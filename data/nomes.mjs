// Nomes sugeridos pela redação (seleção editorial original, sem ranking de popularidade).
// Formato compacto por estilo: "Nome:sexo:espécie:porte".
//   sexo: m (macho), f (fêmea), u (serve para os dois)
//   espécie: a (cão e gato), c (cão), g (gato)          porte (só cães): p, g ou vazio (qualquer)
export const ESTILOS = {
  classicos: 'Clássicos',
  fofos: 'Fofinhos',
  fortes: 'Fortes e marcantes',
  comidas: 'Comidinhas',
  natureza: 'Natureza',
  divertidos: 'Divertidos',
  famosos: 'Personagens e famosos',
  brasileiros: 'Bem brasileiros'
};

const RAW = {
  classicos: `Max:m:a Bob:m:a Fred:m:a Toby:m:c Billy:m:a Theo:m:a Duke:m:c Rex:m:c:g Marley:m:c Rocky:m:c Jack:m:a Charlie:m:a Oliver:m:a Benjamin:m:a Teddy:m:a Oscar:m:a Felix:m:g Tom:m:g Leo:m:a Frederico:m:a Bruno:m:c Luke:m:a Sam:m:a Henry:m:a Arthur:m:a Bernardo:m:a Augusto:m:a Gaspar:m:a Otto:m:a Ringo:m:a Nicolau:m:a Fritz:m:c Joca:m:a Lulu:f:a Mel:f:a:p Luna:f:a Nina:f:a Lola:f:a Maya:f:a Bella:f:a Sofia:f:a Lara:f:a Cora:f:a Alice:f:a Clara:f:a Duda:f:a Laila:f:a Lili:f:a:p Malu:f:a Mia:f:g Belinha:f:a:p Frida:f:a Olívia:f:a Manu:u:a Dora:f:a Zoe:f:a Penélope:f:a Gigi:f:a:p Lady:f:c Princesa:f:a Kiara:f:a Mimi:f:g Lis:f:a`,
  fofos: `Bento:m:a Tico:m:a:p Nino:m:a:p Chico:m:a Pingo:m:a:p Pitoco:m:c:p Fofão:m:a Bolinha:u:a:p Teco:m:a:p Neném:u:a:p Tutu:u:a:p Dudu:m:a Zezinho:m:a:p Tobias:m:a Pompom:u:a:p Floquinho:u:a:p Gordinho:m:a Bidu:m:c Biscoito:u:a Pipoca:u:a:p Amora:f:a Pituca:f:a:p Belinha:f:a:p Fifi:f:a:p Florzinha:f:a:p Lulinha:f:a:p Docinho:u:a:p Pandora:f:a Pérola:f:a Jujuba:u:a Pantufa:f:a:p Fofura:f:a:p Bibi:f:a:p Dengo:u:a Xodó:u:a Babi:f:a:p Nana:f:a:p Lolita:f:a:p Pitty:f:a:p Fiona:f:a Ursinho:m:c Neve:f:a Algodão:u:a:p Pelúcia:f:a`,
  fortes: `Thor:m:a:g Zeus:m:a:g Apolo:m:a:g Odin:m:c:g Hércules:m:c:g Atlas:m:c:g Titã:m:c:g Bruce:m:c:g Ares:m:c:g Hulk:m:c:g Golias:m:c:g Sansão:m:c:g Brutus:m:c:g Kratos:m:c:g Ragnar:m:c:g Leônidas:m:c:g Tyson:m:c:g Bóris:m:c:g Ivan:m:c:g Conan:m:c:g Thanos:m:c:g Kaiser:m:c:g Tank:m:c:g Trovão:m:a:g Ártemis:f:a:g Atena:f:a:g Hera:f:a:g Xena:f:c:g Freya:f:a:g Valquíria:f:c:g Fênix:u:a Tempestade:f:c:g Fúria:f:c:g Rainha:f:a:g Cleópatra:f:a Electra:f:a Kali:f:c:g Pandora:f:a:g Íris:f:a Diana:f:a:g Lua:f:a Sheila:f:c:g Zara:f:a:g Nikita:f:c:g`,
  comidas: `Paçoca:u:a Cookie:u:a Mochi:u:a Pudim:u:a Canela:f:a Waffle:u:a Farofa:u:a Quindim:u:a Caju:m:a Pimenta:f:a Avelã:f:a Biscoito:u:a Feijão:m:a Torresmo:m:c Bacon:m:a Pastel:m:a Coxinha:f:a Brownie:u:a Muffin:u:a Nutella:f:a Pirulito:u:a:p Bombom:u:a:p Pipoca:u:a:p Tapioca:f:a Mandioca:f:a Cuscuz:m:a Pamonha:f:a Pinhão:m:a Café:m:a Chantilly:f:a Baunilha:f:a Cocada:f:a Rapadura:f:a Mostarda:f:a Ketchup:m:a Sushi:u:a Tofu:m:a Nhoque:m:a Paçoquinha:f:a:p Pitanga:f:a Jabuticaba:f:a Acerola:f:a Amendoim:m:a:p Batata:f:a Cenoura:u:a Pistache:m:a Gengibre:u:a Cappuccino:m:a Picolé:u:a Algodão-doce:u:a:p`,
  natureza: `Sol:u:a Rio:m:a Céu:u:a Cedro:m:c:g Vento:m:a Raio:m:a Bambu:m:a Musgo:m:a Oceano:m:c:g Inverno:m:a Outono:u:a Orvalho:m:a Pedra:f:c:g Carvalho:m:c:g Jade:f:a Flora:f:a Gaia:f:a Nuvem:f:a Brisa:f:a Lótus:u:a Aurora:f:a Estrela:f:a Margarida:f:a Violeta:f:a Rosa:f:a Hortênsia:f:a Jasmim:f:a Dália:f:a Magnólia:f:a Orquídea:f:a Tulipa:f:a Primavera:f:a Areia:f:a Serena:f:a Savana:f:c:g Selva:f:c Amazona:f:c:g Pérola:f:a Safira:f:a Esmeralda:f:a Topázio:m:a Ônix:m:a Cristal:f:a Âmbar:f:a Coral:f:a Maré:f:a Lírio:u:a Ipê:u:a`,
  divertidos: `Pixel:u:a Ziggy:m:a Zeca:m:a Yoda:m:a:p Jazz:u:a Tetris:u:a Bowie:m:a Fubá:u:a Zuzu:u:a Chulé:m:a Muvuca:f:a Bagunça:u:a Fuzuê:u:a Furacão:u:c Sapeca:f:a Pateta:m:c Biruta:f:a Pirata:m:a Bandido:m:c Chiclete:u:a Wi-Fi:u:a Bug:u:a Emoji:u:a Turbo:m:c Foguete:m:c Bolt:m:c Rabisco:u:a Pituco:m:a:p Xuxu:u:a Bolota:f:a:p Pandeiro:m:a Batuque:m:a Cuíca:f:a Tamborim:m:a:p Cotonete:u:a:p Pantufo:m:a Meleca:f:a Sabugo:m:a Dorminhoco:m:a Soneca:u:a Preguiça:f:a Chorão:m:a Fofoca:f:a Encrenca:f:a Treta:f:a`,
  famosos: `Simba:m:a Nala:f:a Frodo:m:a Bilbo:m:a Gandalf:m:a Chewie:m:c:g Han:m:a Leia:f:a Luke:m:a Spock:m:a Scooby:m:c Snoopy:m:c Garfield:m:g Mufasa:m:a:g Elsa:f:a Olaf:m:a Stitch:m:a Groot:m:a Rocket:m:a Hermione:f:a Harry:m:a Sirius:m:a Dobby:m:a:p Mafalda:f:a Mônica:f:a Magali:f:a Cebolinha:m:a Cascão:m:a Bidu:m:c Floquinho:u:a:p Pikachu:u:a Totoro:m:a Sherlock:m:a Watson:m:a Gatsby:m:a Lupin:m:a Freddie:m:a Elvis:m:a Prince:m:a Madonna:f:a Shakira:f:a Beyoncé:f:a Anitta:f:a Rita:f:a Elis:f:a Gal:f:a Clarice:f:a Frida:f:a Cleo:f:a Mozart:m:a Chopin:m:a Picasso:m:a Dalí:m:a`,
  brasileiros: `Tião:m:a Zé:m:a Jorginho:m:a Juca:m:a Tonico:m:a Saci:m:a Curupira:m:a Pelé:m:a Garrincha:m:a Romário:m:a Caetano:m:a Gil:m:a Tom:m:a Vinícius:m:a Cazuza:m:a Noel:m:a Cartola:m:a Pixinguinha:m:a Lampião:m:c:g Jagunço:m:c:g Boto:m:a Guri:m:a Piá:m:a Moleque:m:a Malandro:m:a Baião:m:a Xaxado:m:a Forró:m:a Frevo:m:a Maracatu:m:a Iara:f:a Jurema:f:a Iracema:f:a Bahia:f:a Paraty:f:a Maria:f:a Dona_Flor:f:a Gabriela:f:a Tieta:f:a Capitu:f:a Chiquinha:f:a Clementina:f:a Dercy:f:a Xica:f:a Jandira:f:a Moana:f:a Guaraná:u:a Brigadeira:f:a Cocadinha:f:a:p Bossa:f:a Samba:u:a Ginga:f:a Mandinga:f:a Mainha:f:a Painho:m:a`
};

export const NOMES = Object.entries(RAW).flatMap(([estilo, raw]) => raw.trim().split(/\s+/).map(token => {
  const [nome, sexo, esp, porte = ''] = token.split(':');
  return { nome: nome.replace(/_/g, ' '), estilo, sexo, especie: esp === 'a' ? ['cao', 'gato'] : esp === 'c' ? ['cao'] : ['gato'], porte: porte === 'p' ? 'pequeno' : porte === 'g' ? 'grande' : '' };
}));
