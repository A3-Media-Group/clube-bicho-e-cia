# Baseline — 12/10/2026 (antes da auditoria de SEO)

Gerado com `npm run audit` sobre os 17 HTMLs escritos à mão (commit 6dbd6da). Os números "Entrada" contam links de outras páginas internas **sem contar a home**.

## O que cada ferramenta calcula hoje (JS inline idêntico em todas as páginas; `assets/app.js` é cópia)

| Página | Entrada | Cálculo |
|---|---|---|
| idade.html | espécie (cão/gato), anos inteiros 1–30 | 1 ano = 15; 2+ anos = 24 + (anos−2)×5 (cão) ou ×4 (gato). `calculateAge` lança exceção fora do intervalo e **não há try/catch** (o `required/min/max` do formulário evita o caso pelo navegador, mas a ferramenta WebMCP `registerTool` pode lançar). |
| racao.html | espécie, peso kg (0,5–100), kcal/kg do rótulo | RER = 70 × peso^0,75; fatores cão castrado 1,4–1,6, gato castrado 1,2–1,4; g/dia = kcal ÷ (kcal/kg) × 1000. Link de fonte aponta para a seção de **emagrecimento** da AAHA 2021. |
| alimentos.html | select com 6 itens fixos | Mensagem fixa por item (chocolate, uva, cebola, xilitol, café, álcool) + "procure atendimento, não induza vômito". |
| gastos.html | alimentação/mês, higiene/mês, cuidados/ano, reserva/mês | total mensal = alimentação + higiene + cuidados/12 + reserva; anual = ×12. Valores padrão de exemplo (150, 60, 1200, 50). |
| agenda.html | título, data | Gera .ics de dia inteiro (DTSTART/DTEND), UID aleatório `@clubebicho.local`, escape de `\ ; ,` e quebras de linha. |
| nomes.html | estilo (4 listas de 12 nomes) | Mostra 4 nomes por clique, ciclando 3 blocos. |

Ponto de atenção: nenhuma página tem canonical, og:url, og:image, sitemap ou link de entrada vindo de outra página além da home e da navegação; a 404 é um HTML mínimo sem layout. `robots.txt` não referencia sitemap. `preparar-seo.cjs` e o LEIA-ME pressupõem GitHub Pages, mas a hospedagem real é a Hostinger.

## Tabela

| URL | Title (chars) | Description (chars) | Palavras | H1 | Entrada | Saída | Canonical | og:image |
|---|---|---|---|---|---|---|---|---|
| /404.html (noindex) | Página não encontrada (21) |  (0) | 16 | Esse caminho saiu do passeio. | 0 | 0 | — | — |
| /agenda.html | Agenda de cuidados — ferramenta gratuita \| Clube Bicho e Cia (60) | Transforme a próxima consulta em um lembrete. (45) | 81 | Agenda de cuidados ▦ | 0 | 5 | — | — |
| /alimentacao-e-porcoes.html | Ração na medida: comece pelo rótulo, ajuste com o veterinário \| Clube Bicho e Cia (81) | Entenda por que uma calculadora é um ponto de partida. (54) | 225 | Ração na medida: comece pelo rótulo, ajuste com o veterinário | 0 | 5 | — | — |
| /alimentos-perigosos.html | Chocolate, uva e outros alimentos que ficam fora do potinho \| Clube Bicho e Cia (79) | Uma consulta rápida pode evitar um acidente em casa. (52) | 215 | Chocolate, uva e outros alimentos que ficam fora do potinho | 0 | 5 | — | — |
| /alimentos.html | Pode comer? — ferramenta gratuita \| Clube Bicho e Cia (53) | Consulte alimentos que merecem atenção. (39) | 89 | Pode comer? ♡ | 0 | 5 | — | — |
| /creditos.html | Créditos das fotos \| Clube Bicho e Cia (38) | Fotografias reais utilizadas no Clube Bicho e Cia e suas licenças. (66) | 54 | Fotos reais. Créditos merecidos. | 14 | 4 | — | — |
| /gastos.html | Gastos do pet — ferramenta gratuita \| Clube Bicho e Cia (55) | Planeje o mês sem sustos no orçamento. (38) | 96 | Gastos do pet ＄ | 0 | 5 | — | — |
| /idade-caes-gatos.html | Idade de cachorro e gato: por que multiplicar por sete não resolve \| Clube Bicho e Cia (86) | Uma equivalência divertida, com limites que vale conhecer. (58) | 196 | Idade de cachorro e gato: por que multiplicar por sete não resolve | 0 | 5 | — | — |
| /idade.html | Idade do pet — ferramenta gratuita \| Clube Bicho e Cia (54) | Quantos anos de gente tem o seu melhor amigo? (45) | 98 | Idade do pet ◷ | 0 | 5 | — | — |
| / | Cuidados com pets e ferramentas gratuitas \| Clube Bicho e Cia (61) | Cuide de cães e gatos com guias baseados em fontes oficiais e seis ferramentas gratuitas: idade, ração, alimentos, agenda, gastos e nomes. (138) | 328 | Amar é natural. Cuidar se aprende. | 0 | 16 | — | — |
| /nomes.html | Nomes para pets — ferramenta gratuita \| Clube Bicho e Cia (57) | Encontre um nome com a cara do seu bichinho. (44) | 75 | Nomes para pets ✦ | 0 | 5 | — | — |
| /peso-e-condicao-corporal.html | Seu cão está no peso adequado? Observe além da balança \| Clube Bicho e Cia (74) | Costelas e cintura ajudam a perceber mudanças. (46) | 174 | Seu cão está no peso adequado? Observe além da balança | 0 | 5 | — | — |
| /privacidade.html | Privacidade \| Clube Bicho e Cia (31) | Saiba como as ferramentas tratam os dados informados. (53) | 189 | Privacidade, sem complicação. | 14 | 4 | — | — |
| /racao.html | Porção de ração — ferramenta gratuita \| Clube Bicho e Cia (57) | Uma estimativa para começar a conversa com o vet. (49) | 101 | Porção de ração ◒ | 0 | 5 | — | — |
| /sobre.html | Sobre o clube e nossas fontes \| Clube Bicho e Cia (49) | Conheça a política editorial, as referências brasileiras e internacionais e os critérios das ferramentas. (105) | 258 | Um clube para cuidar melhor. | 14 | 4 | — | — |
| /termos.html | Termos de uso \| Clube Bicho e Cia (33) | Condições de uso do conteúdo educativo e das ferramentas. (57) | 128 | Termos de uso. | 14 | 4 | — | — |
| /vacinacao-antirrabica.html | Vacina antirrábica: cuidado que protege toda a família \| Clube Bicho e Cia (74) | O que conferir na carteirinha e como se preparar para a vacinação. (66) | 228 | Vacina antirrábica: cuidado que protege toda a família | 0 | 5 | — | — |

Páginas: 17 (16 indexáveis). Palavras no total: 2551.
Páginas com menos de 3 links de entrada (sem contar a home): /agenda.html, /alimentacao-e-porcoes.html, /alimentos-perigosos.html, /alimentos.html, /gastos.html, /idade-caes-gatos.html, /idade.html, /nomes.html, /peso-e-condicao-corporal.html, /racao.html, /vacinacao-antirrabica.html
