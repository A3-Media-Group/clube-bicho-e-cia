import { setupTool } from '../lib/ui.js';
import { avaliar, TEXTOS, PERGUNTAS } from '../calc/condicao.mjs';

setupTool({
  tool: 'condicao',
  compute(data) {
    const respostas = Object.fromEntries(PERGUNTAS.map(p => [p.id, data.get(p.id)]));
    const r = avaliar(respostas);
    const t = TEXTOS[r.resultado];
    const lines = [t.texto, 'Orientação para conversar com o médico-veterinário, não diagnóstico.'];
    return { title: t.titulo, lines, copy: `${t.titulo}. ${t.texto}` };
  }
});
