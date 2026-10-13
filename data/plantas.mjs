// Plantas comuns em casas brasileiras, classificadas pela base de plantas da ASPCA.
// t = tóxica, n = não tóxica, null = a ASPCA não classifica para essa espécie (ou não encontramos a ficha).
// efeito: paráfrase da ficha. url: ficha individual; quando só confirmamos a planta na lista geral, link para a lista.
const F = slug => `https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/${slug}`;
const LISTA_CAES = 'https://www.aspca.org/pet-care/animal-poison-control/dogs-plant-list';
const LISTA_GATOS = 'https://www.aspca.org/pet-care/animal-poison-control/cats-plant-list';
const oxalato = 'Tem cristais de oxalato de cálcio: ao ser mastigada, irrita boca, língua e lábios, com salivação, vômito e dificuldade para engolir.';

export const PLANTAS = [
  { nome: 'Lírio (Lilium)', outros: 'lírio-asiático, lírio-de-páscoa, lírio-tigre', cientifico: 'Lilium spp.', cao: null, gato: 't', grave: true, efeito: 'Para gatos, todas as partes da planta são tóxicas; pequenas quantidades podem causar lesão grave nos rins. É uma emergência.', url: F('lily') },
  { nome: 'Lírio-da-paz', outros: 'espatifilo', cientifico: 'Spathiphyllum', cao: 't', gato: 't', efeito: oxalato + ' Segundo a ASPCA, problemas graves são raros.', url: F('peace-lily') },
  { nome: 'Copo-de-leite', outros: 'cala', cientifico: 'Zantedeschia aethiopica', cao: 't', gato: 't', efeito: oxalato, url: F('calla-lily') },
  { nome: 'Costela-de-adão', outros: 'monstera', cientifico: 'Monstera deliciosa', cao: 't', gato: 't', efeito: oxalato, url: F('cutleaf-philodendron') },
  { nome: 'Comigo-ninguém-pode', outros: 'difembáquia', cientifico: 'Dieffenbachia', cao: 't', gato: 't', efeito: oxalato, url: F('dieffenbachia') },
  { nome: 'Jiboia', outros: 'pothos', cientifico: 'Epipremnum aureum', cao: 't', gato: 't', efeito: 'Tem oxalato de cálcio; costuma causar irritação leve na boca e no estômago.', url: LISTA_GATOS },
  { nome: 'Espada-de-são-jorge', outros: 'sansevieria, língua-de-sogra', cientifico: 'Sansevieria trifasciata', cao: 't', gato: 't', efeito: 'Contém saponinas; pode causar náusea, vômito e diarreia.', url: F('snake-plant') },
  { nome: 'Babosa', outros: 'aloe vera', cientifico: 'Aloe vera', cao: 't', gato: 't', efeito: 'Pode causar vômito, apatia e diarreia quando a planta é ingerida.', url: F('aloe') },
  { nome: 'Azaleia', outros: 'rododendro', cientifico: 'Rhododendron spp.', cao: 't', gato: 't', grave: true, efeito: 'Pode causar vômito, salivação e, em ingestões maiores, alterações no ritmo do coração e sinais neurológicos.', url: F('azalea') },
  { nome: 'Cica', outros: 'sagu, palmeira-sagu', cientifico: 'Cycas revoluta', cao: 't', gato: 't', grave: true, efeito: 'Uma das plantas ornamentais mais perigosas: todas as partes são tóxicas, sobretudo as sementes, e pode causar vômito, diarreia, problemas de coagulação e insuficiência do fígado.', url: F('sago-palm') },
  { nome: 'Espirradeira', outros: 'oleandro', cientifico: 'Nerium oleander', cao: 't', gato: 't', grave: true, efeito: 'Pode causar vômito e diarreia e afetar gravemente o coração.', url: LISTA_CAES },
  { nome: 'Mamona', outros: 'carrapateira', cientifico: 'Ricinus communis', cao: 't', gato: 't', grave: true, efeito: 'As sementes contêm ricina, uma toxina muito potente. Qualquer suspeita de ingestão é emergência.', url: F('castor-bean-plant') },
  { nome: 'Hera-inglesa', outros: 'hera', cientifico: 'Hedera helix', cao: 't', gato: 't', efeito: 'Pode causar vômito, dor abdominal, salivação e diarreia.', url: F('english-ivy') },
  { nome: 'Tulipa', outros: '', cientifico: 'Tulipa spp.', cao: 't', gato: 't', efeito: 'O bulbo concentra a toxina; pode causar vômito, salivação e diarreia.', url: F('tulip') },
  { nome: 'Hortênsia', outros: '', cientifico: 'Hydrangea', cao: 't', gato: 't', efeito: 'Contém um glicosídeo cianogênico; costuma causar vômito, diarreia e apatia.', url: F('hydrangea') },
  { nome: 'Begônia', outros: '', cientifico: 'Begonia spp.', cao: 't', gato: 't', efeito: 'A parte subterrânea é a mais tóxica; pode irritar boca e estômago.', url: F('begonia') },
  { nome: 'Crisântemo', outros: 'margarida-de-jardim', cientifico: 'Chrysanthemum', cao: 't', gato: 't', efeito: 'Pode causar vômito, diarreia, salivação, falta de coordenação e irritação na pele.', url: F('chrysanthemum') },
  { nome: 'Lavanda', outros: 'alfazema', cientifico: 'Lavandula angustifolia', cao: 't', gato: 't', efeito: 'Pode causar náusea, vômito e falta de apetite.', url: F('lavender') },
  { nome: 'Hortelã', outros: 'menta', cientifico: 'Mentha spp.', cao: 't', gato: 't', efeito: 'Vômito e diarreia, sobretudo quando o animal come bastante.', url: F('mint') },
  { nome: 'Tomateiro (planta)', outros: 'pé de tomate', cientifico: 'Solanum lycopersicum', cao: 't', gato: 't', efeito: 'Folhas, caules e frutos verdes têm solanina; o tomate maduro não é tóxico.', url: F('tomato-plant') },
  { nome: 'Bico-de-papagaio', outros: 'poinsétia, flor-do-natal', cientifico: 'Euphorbia pulcherrima', cao: 't', gato: 't', efeito: 'A seiva irrita boca e estômago. A ASPCA considera a toxicidade geralmente superestimada: os sinais costumam ser leves.', url: F('poinsettia') },
  { nome: 'Planta-jade', outros: 'árvore-da-felicidade-jade', cientifico: 'Crassula ovata', cao: 't', gato: 't', efeito: 'Costuma causar irritação gastrointestinal leve; alguns animais ficam apáticos ou sem coordenação.', url: LISTA_GATOS },
  { nome: 'Antúrio', outros: '', cientifico: 'Anthurium', cao: null, gato: 't', efeito: 'Consta como tóxico para gatos na lista da ASPCA; tem oxalato de cálcio, que irrita a boca.', url: LISTA_GATOS },
  { nome: 'Ciclâmen', outros: 'violeta-dos-alpes', cientifico: 'Cyclamen spp.', cao: null, gato: 't', efeito: 'Consta como tóxico para gatos na lista da ASPCA.', url: LISTA_GATOS },
  { nome: 'Samambaia-americana', outros: 'samambaia', cientifico: 'Nephrolepis exaltata', cao: 'n', gato: 'n', efeito: 'Não tóxica para cães e gatos.', url: F('boston-fern') },
  { nome: 'Palmeira-areca', outros: 'areca-bambu', cientifico: 'Dypsis lutescens', cao: 'n', gato: 'n', efeito: 'Não tóxica para cães e gatos.', url: F('areca-palm') },
  { nome: 'Palmeira-de-salão', outros: 'camedórea', cientifico: 'Chamaedorea elegans', cao: 'n', gato: 'n', efeito: 'Não tóxica para cães e gatos.', url: F('parlor-palm') },
  { nome: 'Orquídea-borboleta', outros: 'orquídea phalaenopsis', cientifico: 'Phalaenopsis', cao: 'n', gato: 'n', efeito: 'Não tóxica para cães e gatos.', url: F('phalaenopsis-orchid') },
  { nome: 'Clorofito', outros: 'gravatinha, planta-aranha', cientifico: 'Chlorophytum comosum', cao: 'n', gato: 'n', efeito: 'Não tóxico para cães e gatos.', url: F('spider-plant') },
  { nome: 'Violeta-africana', outros: 'violeta', cientifico: 'Saintpaulia spp.', cao: 'n', gato: 'n', efeito: 'Não tóxica para cães e gatos.', url: F('african-violet') },
  { nome: 'Bromélia', outros: '', cientifico: 'Neoregelia spp.', cao: 'n', gato: 'n', efeito: 'A ficha da ASPCA (bromélia-ruborizada) a classifica como não tóxica.', url: F('blushing-bromeliad') },
  { nome: 'Peperômia', outros: '', cientifico: 'Peperomia spp.', cao: 'n', gato: 'n', efeito: 'Não tóxica para cães e gatos.', url: F('trailing-peperomia') },
  { nome: 'Hibisco', outros: '', cientifico: 'Hibiscus syriacus', cao: 'n', gato: 'n', efeito: 'Não tóxico para cães e gatos.', url: F('hibiscus') },
  { nome: 'Girassol', outros: '', cientifico: 'Helianthus annuus', cao: 'n', gato: 'n', efeito: 'Não tóxico para cães e gatos.', url: F('sunflower') },
  { nome: 'Alecrim', outros: '', cientifico: 'Rosmarinus officinalis', cao: 'n', gato: 'n', efeito: 'Não tóxico para cães e gatos.', url: F('rosemary') },
  { nome: 'Manjericão', outros: '', cientifico: 'Ocimum basilicum', cao: 'n', gato: 'n', efeito: 'Não tóxico para cães e gatos.', url: F('basil') }
];
export const FONTE_PLANTAS = { nome: 'ASPCA — Toxic and Non-Toxic Plants', url: 'https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants' };
