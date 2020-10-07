import { Pessoa } from './Pessoa';

export class Transacao {
  saida: boolean;
  modalidade: string = '';
  genero: string = '';
  materiais: string = '';
  responsavelRetirada: Pessoa = new Pessoa();
  responsavelInterno: Pessoa = new Pessoa();

  constructor(saida: boolean = true) {
    this.saida = saida;
  }
}
