import { Materiais } from './Materiais';
import { Pessoa } from './Pessoa';

export class Transacao {
  saida: boolean;
  modalidade: string = '';
  genero: string = '';
  materiais: Materiais = new Materiais();
  responsavelRetirada: Pessoa = new Pessoa();
  responsavelInterno: Pessoa = new Pessoa();

  constructor(saida: boolean = true) {
    this.saida = saida;
  }
}
