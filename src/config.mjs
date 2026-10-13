// Configuração do build. SITE_URL e CONTATO_EMAIL podem ser sobrescritos por variáveis de ambiente.
export const SITE_URL = (process.env.SITE_URL || 'https://clubebichoecia.com.br').replace(/\/+$/, '');
export const CONTATO_EMAIL = (process.env.CONTATO_EMAIL || '').trim();
export const SITE_NAME = 'Clube Bicho e Cia';
export const THEME_COLOR = '#702bd4';

// Autoria e revisão: preencha só com dados reais (PENDÊNCIA DO DONO).
// AUTOR: { name: 'Nome', url: '/sobre/' } — vazio mantém "Redação Clube Bicho e Cia".
// REVISOR: { name: 'Nome', crmv: 'UF 00000' } e REVISADO_EM: 'AAAA-MM-DD' — vazio mostra o aviso de que
// não há revisão clínica. Nunca invente uma pessoa.
export const AUTOR = null;
export const REVISOR = null;
export const REVISADO_EM = null;
