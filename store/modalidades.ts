export const state = () => ({
  lista: [
    'Atletismo',
    'Basquete',
    'Futcampo',
    'Futsal',
    'Handebol',
    'Judô',
    'Natação',
    'Tênis Campo',
    'Tênis Mesa',
    'Vôlei',
    'Vôlei Praia',
    'Xadrez',
  ],
});

export const getters = {
  getModalidades(state: any) {
    return state.lista;
  },
};
