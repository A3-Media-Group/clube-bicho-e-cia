// Equivalência educativa de idade (mesma regra da versão anterior).
export function calculateAge(species, years) {
  if (!['dog', 'cat'].includes(species) || !Number.isInteger(years) || years < 1 || years > 30) throw new Error('Informe uma espécie válida e idade inteira entre 1 e 30 anos.');
  return years === 1 ? 15 : 24 + (years - 2) * (species === 'dog' ? 5 : 4);
}
