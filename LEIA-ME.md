# Clube Bicho e Cia — pronto para GitHub Pages

Site estático em HTML, CSS e JavaScript, sem instalação para navegar, sem API paga e sem cadastro dos leitores. Abra `index.html` para visualizar. Fotos locais com créditos em `creditos.html`.

## Publicar pelo GitHub

1. Extraia o ZIP. Envie **o conteúdo** da pasta `clube-bicho-e-cia` à raiz do seu repositório, incluindo `assets`, `.github` e `.nojekyll`. Não envie somente o ZIP. O arquivo `index.html` precisa ficar na raiz.
2. Use a branch `main`. Se sua branch tem outro nome, ajuste `branches` em `.github/workflows/pages.yml`.
3. No repositório, abra **Settings → Pages → Source → GitHub Actions**.
4. Em **Actions → Publicar Clube Bicho e Cia**, execute **Run workflow**. Os próximos envios à branch `main` publicam automaticamente.
5. O endereço aparecerá em Pages. O workflow descobre essa URL e gera automaticamente sitemap.xml, canonical, og:url e a referência do sitemap em robots.txt. Funciona também em subdiretório de repositório.

Se preferir publicação por branch: execute `node preparar-seo.cjs https://SEU-USUARIO.github.io/SEU-REPOSITORIO` com seu endereço real e publique os arquivos resultantes. Node é necessário apenas para essa preparação alternativa; o site não depende dele para funcionar. Não execute com o endereço de exemplo.

Documentação: https://docs.github.com/en/pages/quickstart

## O que está incluído

- Seis ferramentas: equivalência de idade, estimativa de ração, alerta de alimentos, agenda com exportação .ics, orçamento e nomes.
- Cinco guias educativos originais com referências institucionais e data de consulta.
- Sobre/política editorial, privacidade, termos e créditos de fotos.
- HTML legível por buscadores, títulos e descrições próprios, links internos, dados estruturados Article, imagens com texto alternativo, carregamento tardio das imagens secundárias e layout responsivo.
- Movimento discreto que respeita a preferência de movimento reduzido do leitor.
- Nenhum rastreador, fonte externa, login ou dependência de imagens remotas durante a navegação.

## Google Search e divulgação

Após publicar, cadastre o endereço real no Google Search Console, verifique a propriedade com o método disponível e envie `sitemap.xml`. Isso exige sua conta Google; não é necessário para o site funcionar. Canonical e sitemap só devem apontar para a URL pública definitiva. Se mudar de domínio, rode novamente o workflow/configurador.

Os conteúdos priorizam buscas como “idade do cachorro”, “quantidade de ração”, “alimentos perigosos para cães”, “vacina antirrábica” e “quanto custa manter um pet”. Essa seleção é editorial, não contém volumes de busca medidos e não comprova um top 6. Referências pesquisadas: Petz, Cobasi, PDSA, AKC, CalculaPet e Special Dog; os links estão em `sobre.html`.

Para divulgação, compartilhe links diretos de cada ferramenta e guia. Exemplo de chamada: “Quanto custa cuidar do seu pet por mês? Faça sua conta grátis, sem cadastro.” Amplie o conteúdo a partir de dúvidas reais dos leitores e de dados do Search Console. Não compre backlinks nem publique páginas repetidas apenas para multiplicar palavras-chave. Não há garantia de posição ou indexação.

Fonte: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

## AdSense: integração futura

O site está **sem anúncios ativos**. Ativar AdSense exige sua conta de editor, verificação e aprovação do Google. Nenhum código ou publisher ID foi inventado. A aprovação e receita não são garantidas. Para ativar:

1. Cadastre a URL publicada no AdSense e siga o método de verificação fornecido pela sua conta.
2. Insira o snippet real no `<head>` das páginas, conforme instruções do Google. Se usar blocos manuais, coloque-os entre seções e identifique-os como “Publicidade”, afastados dos botões de ferramentas.
3. Quando solicitado, crie `ads.txt` com **a linha exata fornecida pelo Google** no local indicado; em GitHub Pages com subdiretório, confira as exigências para a raiz do domínio. Não basta colocar qualquer arquivo dentro do repositório. Domínio próprio pode facilitar essa configuração.
4. Atualize a política de privacidade com os serviços efetivamente usados e configure os controles de consentimento aplicáveis à audiência antes de ativar anúncios. A versão atual afirma corretamente não usar anúncios/rastreadores.
5. Adicione um canal de contato real e a identificação do responsável em `sobre.html` e `privacidade.html`. Não criamos e-mail fictício. Se usar Issues como contato, habilite-as no repositório e inclua seu link real.

Fontes: https://support.google.com/adsense/answer/91205 e https://support.google.com/adsense/answer/12169212

## Limites e manutenção

Conteúdo educativo, sem revisão clínica por veterinário. Os links permitem conferir as fontes; revise os guias se as orientações institucionais mudarem. A calculadora de ração atende somente adultos saudáveis castrados e não prescreve dieta. A agenda recebe a data escolhida pelo usuário, não gera protocolo vacinal. O gerador de nomes usa sugestões locais, não ranking de buscas. Nenhuma ferramenta armazena os dados ou manda notificações.

As fotografias usam a licença Pexels. Consulte `creditos.html`; não use imagens para sugerir endosso dos fotógrafos. Código e textos criados para este projeto podem ser editados livremente pelo proprietário do site.

## Verificações

A navegação local, referências de arquivos, sintaxe JavaScript e resultados das ferramentas foram conferidos. A publicação e o workflow precisam ser executados na sua conta GitHub; não foram realizados nesta entrega. O domínio, Search Console e AdSense dependem dos seus dados reais.

## Versão corrigida — estilos incorporados

Os estilos e o JavaScript estão incorporados em cada HTML para evitar que arquivos antigos chamados assets/style.css ou assets/app.js alterem a apresentação. Os arquivos externos permanecem como referência para edição, mas alterá-los sozinho não atualiza as páginas: edite também os blocos incorporados.

Extraia o novo ZIP em uma pasta vazia e abra index.html de dentro dela. No GitHub, substitua todos os HTML antigos pelos novos e preserve a pasta assets com as fotos. Aguarde a publicação terminar e recarregue com Ctrl+F5. Não misture arquivos de versões diferentes.
