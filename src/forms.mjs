// Formulários das ferramentas. Cada campo tem <label for>, inputmode adequado e nome igual ao parâmetro da URL.
import { CATEGORIES } from './js/calc/gastos.mjs';
import { ESTILOS } from '../data/nomes.mjs';

const field = (id, label, input, help = '') => `<div class="field"><label for="${id}">${label}</label>${input}${help ? `<p class="help" id="${id}-ajuda">${help}</p>` : ''}</div>`;
const select = (id, options, attrs = '') => `<select id="${id}" name="${id}"${attrs}>${options.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</select>`;
const text = (id, attrs) => `<input id="${id}" name="${id}" type="text" autocomplete="off"${attrs}>`;
const submit = (tool, label) => `<button class="button" type="submit" data-evento="ferramenta_calculou" data-ferramenta="${tool}">${label} <span aria-hidden="true">↗</span></button>`;
const result = '<div id="result" class="result"><p>Preencha os campos e toque no botão para ver o resultado.</p></div><p id="result-status" class="visually-hidden" role="status" aria-live="polite"></p><noscript><p class="noscript">Ative o JavaScript para usar esta ferramenta. Os guias continuam disponíveis.</p></noscript>';
const wrap = (tool, color, inner) => `<div class="calculator ${color}"><form data-tool="${tool}" novalidate>${inner}</form>${result}</div>`;
const especie = (label = 'Seu pet é') => field('especie', label, select('especie', [['cao', 'Cachorro'], ['gato', 'Gato']]));

export const FORMS = {
  idade: wrap('idade', 'laranja', [
    especie(),
    `<fieldset class="inline-fields"><legend>Idade do pet</legend>${field('anos', 'Anos', text('anos', ' inputmode="numeric" placeholder="Ex.: 3" aria-describedby="anos-ajuda"'), 'De 0 a 30.')}${field('meses', 'Meses', text('meses', ' inputmode="numeric" placeholder="0" aria-describedby="meses-ajuda"'), 'De 0 a 11. Para filhotes, use só os meses.')}</fieldset>`,
    submit('idade', 'Calcular idade')
  ].join('')),
  racao: wrap('racao', 'verde', [
    especie('Adulto saudável e castrado'),
    field('peso', 'Peso atual (kg)', text('peso', ' inputmode="decimal" placeholder="Ex.: 10,5" aria-describedby="peso-ajuda"'), 'Use vírgula ou ponto para decimais. De 0,5 a 100 kg.'),
    field('kcal', 'Energia da ração (kcal/kg)', text('kcal', ' inputmode="decimal" placeholder="Ex.: 3600" aria-describedby="kcal-ajuda"'), 'Está no rótulo como “energia metabolizável”. Se vier em kcal/100 g, multiplique por 10.'),
    submit('racao', 'Calcular porção')
  ].join('')),
  alimentos: wrap('alimentos', 'rosa', [
    field('q', 'Qual alimento?', '<input id="q" name="q" type="search" autocomplete="off" inputmode="search" placeholder="Ex.: uva, queijo, cebola" aria-describedby="q-ajuda">', 'Digite pelo menos 2 letras; a busca ignora acentos.'),
    `<div class="inline-fields">${field('especie', 'Espécie', select('especie', [['', 'Cão e gato'], ['cao', 'Cachorro'], ['gato', 'Gato']]))}${field('categoria', 'Mostrar', select('categoria', [['', 'Todas as categorias'], ['perigoso', 'Perigosos'], ['cuidado', 'Com cuidado'], ['seguro', 'Seguros com preparo']]))}</div>`,
    submit('alimentos', 'Consultar')
  ].join('')),
  agenda: wrap('agenda', 'azul', [
    field('evento', 'Cuidado ou consulta', '<input id="evento" name="evento" type="text" maxlength="80" autocomplete="off" placeholder="Ex.: retorno ao veterinário">'),
    field('data', 'Data combinada com o profissional', '<input id="data" name="data" type="date">'),
    submit('agenda', 'Baixar lembrete (.ics)')
  ].join('')),
  gastos: wrap('gastos', 'amarelo', [
    '<p class="form-note">Digite quanto você paga (deixe em branco o que não se aplica). O site não sugere preços.</p>',
    `<div class="money-grid">${CATEGORIES.map(c => field(c.id, `${c.label} <span class="period">(${c.period === 'mes' ? 'por mês' : 'por ano'})</span>`, text(c.id, ' inputmode="decimal" placeholder="R$ 0,00"'))).join('')}</div>`,
    submit('gastos', 'Calcular orçamento')
  ].join('')),
  nomes: wrap('nomes', 'roxo', [
    `<div class="inline-fields">${especie('Para')}${field('sexo', 'Sexo', select('sexo', [['', 'Qualquer'], ['m', 'Macho'], ['f', 'Fêmea']]))}</div>`,
    `<div class="inline-fields">${field('estilo', 'Estilo', select('estilo', [['', 'Qualquer estilo'], ...Object.entries(ESTILOS)]))}<div data-porte>${field('porte', 'Porte do cão', select('porte', [['', 'Qualquer'], ['pequeno', 'Pequeno'], ['medio', 'Médio'], ['grande', 'Grande']]))}</div></div>`,
    submit('nomes', 'Sortear nomes')
  ].join(''))
};
