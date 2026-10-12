// Configuração do build. SITE_URL e CONTATO_EMAIL podem ser sobrescritos por variáveis de ambiente.
export const SITE_URL = (process.env.SITE_URL || 'https://clubebichoecia.com.br').replace(/\/+$/, '');
export const CONTATO_EMAIL = (process.env.CONTATO_EMAIL || '').trim();
export const SITE_NAME = 'Clube Bicho e Cia';
export const THEME_COLOR = '#702bd4';
