import { output, onSubmit } from './lib-ui.bb9afc40.js';

const messages = { chocolate: 'Chocolate e cafeína podem causar alterações cardíacas e neurológicas em pets.', uva: 'Uvas e passas podem causar lesão renal em cães. Não ofereça.', cebola: 'Cebola e alho podem lesar as células do sangue de cães e gatos.', xilitol: 'Xilitol pode causar hipoglicemia e lesão hepática em cães.', cafe: 'Cafeína pode provocar alterações cardíacas e neurológicas.', alcool: 'Álcool e massa crua com fermento podem causar intoxicação.' };

onSubmit((data, result) => {
  output(result, 'Não ofereça ao pet', messages[data.get('food')] + ' Em caso de ingestão, procure atendimento veterinário agora e leve a embalagem. Não induza vômito sem orientação.');
});
