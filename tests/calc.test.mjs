// Testes unitários da lógica das ferramentas (node --test).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseDecimal, parseInteger, InputError } from '../src/js/calc/numero.mjs';
import { tableAge, nhgriAge, ageEquivalent } from '../src/js/calc/idade.mjs';
import { rer, dailyPortion } from '../src/js/calc/racao.mjs';
import { budget, CATEGORIES } from '../src/js/calc/gastos.mjs';
import { buildIcs, validDate } from '../src/js/calc/agenda.mjs';
import { searchFoods, ALIMENTOS, FONTES, CATEGORIAS } from '../src/js/calc/alimentos.mjs';
import { filterNames, pickNames } from '../src/js/calc/nomes.mjs';

test('parseDecimal aceita vírgula, ponto e milhar pt-BR', () => {
  assert.equal(parseDecimal('10,5'), 10.5);
  assert.equal(parseDecimal('10.5'), 10.5);
  assert.equal(parseDecimal('1.234,56'), 1234.56);
  assert.equal(parseDecimal('1.500'), 1500);
  assert.equal(parseDecimal('R$ 150,00'), 150);
  assert.equal(parseDecimal(' 0 '), 0);
  assert.ok(Number.isNaN(parseDecimal('')));
  assert.ok(Number.isNaN(parseDecimal('abc')));
  assert.ok(Number.isNaN(parseDecimal('1,2,3')));
  assert.ok(Number.isNaN(parseDecimal('1.2.3')));
  assert.equal(parseInteger('7'), 7);
  assert.ok(Number.isNaN(parseInteger('7,5')));
  assert.ok(Number.isNaN(parseInteger('-1')));
});

test('idade: tabela para 1, 2, 3 e 10 anos', () => {
  assert.equal(tableAge('dog', 1), 15);
  assert.equal(tableAge('dog', 2), 24);
  assert.equal(tableAge('dog', 3), 29);
  assert.equal(tableAge('dog', 10), 64);
  assert.equal(tableAge('cat', 1), 15);
  assert.equal(tableAge('cat', 2), 24);
  assert.equal(tableAge('cat', 3), 28);
  assert.equal(tableAge('cat', 10), 56);
});

test('idade: limites e entradas inválidas lançam InputError', () => {
  assert.throws(() => tableAge('dog', 0), InputError);
  assert.throws(() => tableAge('dog', 31), InputError);
  assert.throws(() => tableAge('dog', 2.5), InputError);
  assert.throws(() => tableAge('cobra', 2), InputError);
  assert.throws(() => ageEquivalent({ species: 'dog', years: 0, months: 0 }), InputError);
  assert.throws(() => ageEquivalent({ species: 'dog', years: 1, months: 12 }), InputError);
  assert.throws(() => ageEquivalent({ species: 'dog', years: NaN, months: 0 }), InputError);
  assert.throws(() => ageEquivalent({ species: 'cat', years: 30, months: 1 }), InputError);
});

test('idade: meses (filhotes) e método NHGRI só para cães', () => {
  const puppy = ageEquivalent({ species: 'dog', years: 0, months: 6 });
  assert.equal(puppy.table, null);
  assert.equal(puppy.nhgri, Math.round(16 * Math.log(0.5) + 31)); // 20
  const kitten = ageEquivalent({ species: 'cat', years: 0, months: 6 });
  assert.equal(kitten.table, null);
  assert.equal(kitten.nhgri, null);
  const r = ageEquivalent({ species: 'dog', years: 3, months: 6 });
  assert.equal(r.completedYears, 3);
  assert.equal(r.table, 29);
  assert.equal(ageEquivalent({ species: 'dog', years: 0, months: 1 }).nhgri, null);
  assert.equal(ageEquivalent({ species: 'dog', years: 17, months: 0 }).nhgri, null);
  assert.equal(Math.round(nhgriAge(1)), 31);
  assert.equal(Math.round(nhgriAge(10)), 68);
});

test('ração: cão de 10 kg com ração de 3.600 kcal/kg', () => {
  assert.equal(Math.round(rer(10)), 394);
  const r = dailyPortion({ species: 'dog', weightKg: 10, kcalPerKg: 3600 });
  assert.equal(Math.round(r.kcalMin), 551);
  assert.equal(Math.round(r.kcalMax), 630);
  assert.equal(Math.round(r.gramsMin), 153);
  assert.equal(Math.round(r.gramsMax), 175);
  const cat = dailyPortion({ species: 'cat', weightKg: 4, kcalPerKg: 4000 });
  assert.equal(Math.round(cat.kcalMin), Math.round(70 * 4 ** 0.75 * 1.2));
  assert.equal(Math.round(cat.gramsMax), Math.round(70 * 4 ** 0.75 * 1.4 / 4));
});

test('ração: limites', () => {
  assert.throws(() => dailyPortion({ species: 'dog', weightKg: 0, kcalPerKg: 3600 }), InputError);
  assert.throws(() => dailyPortion({ species: 'dog', weightKg: 101, kcalPerKg: 3600 }), InputError);
  assert.throws(() => dailyPortion({ species: 'dog', weightKg: NaN, kcalPerKg: 3600 }), InputError);
  assert.throws(() => dailyPortion({ species: 'dog', weightKg: 10, kcalPerKg: 50 }), InputError);
  assert.throws(() => dailyPortion({ species: 'peixe', weightKg: 10, kcalPerKg: 3600 }), InputError);
  assert.doesNotThrow(() => dailyPortion({ species: 'cat', weightKg: 0.5, kcalPerKg: 100 }));
  assert.doesNotThrow(() => dailyPortion({ species: 'dog', weightKg: 100, kcalPerKg: 10000 }));
});

test('gastos: soma mensal, anual e por categoria', () => {
  const r = budget({ racao: 150, areia: 60, consulta: 1200, imprevistos: 50 });
  assert.equal(r.monthly, 150 + 60 + 100 + 50);
  assert.equal(r.yearly, 360 * 12);
  assert.deepEqual(r.rows.map(x => x.id), ['racao', 'areia', 'consulta', 'imprevistos']);
  assert.equal(r.rows.find(x => x.id === 'consulta').monthly, 100);
  assert.equal(budget({}).monthly, 0);
  assert.throws(() => budget({ racao: -1 }), InputError);
  assert.throws(() => budget({ racao: NaN }), InputError);
  assert.ok(CATEGORIES.length >= 8);
});

test('agenda: .ics válido e datas inválidas', () => {
  const ics = buildIcs({ title: 'Vacina; reforço, retorno', date: '2026-12-31', now: new Date('2026-10-12T10:00:00Z'), uid: 'x@y' });
  assert.match(ics, /DTSTART;VALUE=DATE:20261231/);
  assert.match(ics, /DTEND;VALUE=DATE:20270101/);
  assert.match(ics, /SUMMARY:Vacina\; reforço\\, retorno/);
  assert.match(ics, /DTSTAMP:20261012T100000Z/);
  assert.ok(ics.includes('\r\n'));
  assert.equal(validDate('2026-02-30'), false);
  assert.equal(validDate('2028-02-29'), true);
  assert.throws(() => buildIcs({ title: '', date: '2026-12-31' }), InputError);
  assert.throws(() => buildIcs({ title: 'x', date: '31/12/2026' }), InputError);
});

test('alimentos: base com fontes e classificação válidas', () => {
  const ids = new Set();
  for (const a of ALIMENTOS) {
    assert.ok(!ids.has(a.id), 'id repetido ' + a.id); ids.add(a.id);
    assert.ok(a.fontes.length >= 1, 'sem fonte: ' + a.id);
    for (const f of a.fontes) assert.ok(FONTES[f], `fonte desconhecida ${f} em ${a.id}`);
    assert.ok(a.cao || a.gato, 'sem espécie: ' + a.id);
    for (const s of ['cao', 'gato']) if (a[s]) {
      assert.ok(CATEGORIAS[a[s].c], `categoria inválida em ${a.id}`);
      assert.ok(a[s].motivo.length > 20);
      assert.doesNotMatch(a[s].motivo, /\b\d+\s*(g|mg|kg|gramas?)\b|por kg/i, 'sem limiar de dose: ' + a.id);
    }
  }
  assert.ok(ALIMENTOS.filter(a => a.cao).length >= 40);
});

test('alimentos: busca sem acento, por espécie e categoria', () => {
  const r = searchFoods({ query: 'cafe' });
  assert.equal(r[0].item.id, 'cafe');
  assert.equal(searchFoods({ query: 'Chocolate' })[0].item.cao.c, 'perigoso');
  assert.ok(searchFoods({ query: 'macadamia', especie: 'gato' }).length === 0);
  const seguros = searchFoods({ especie: 'gato', categoria: 'seguro' });
  assert.ok(seguros.length > 5 && seguros.every(x => x.item.gato.c === 'seguro'));
  assert.ok(searchFoods({ query: 'xyz' }).length === 0);
});

test('nomes: filtros e sorteio', () => {
  const machos = filterNames({ especie: 'cao', sexo: 'm' });
  assert.ok(machos.length >= 100);
  assert.ok(machos.every(n => n.sexo !== 'f' && n.especie.includes('cao')));
  assert.ok(filterNames({ especie: 'cao', sexo: 'f' }).length >= 100);
  assert.ok(filterNames({ especie: 'gato' }).length >= 100);
  assert.equal(new Set(machos.map(n => n.nome)).size, machos.length);
  const grandes = filterNames({ especie: 'cao', porte: 'grande' });
  assert.ok(grandes.every(n => n.porte !== 'pequeno'));
  let seed = 1; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  assert.equal(pickNames(machos, 6, rnd).length, 6);
});
