<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="8">
      <v-card>
        <v-card-title class="headline">
          Nova {{ transacao.saida ? 'Saída' : 'Entrada' }}
          <v-spacer />
          <v-btn @click="transacao.saida = !transacao.saida">
            {{ !transacao.saida ? 'Saída' : 'Entrada' }}
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-select
                v-model="transacao.modalidade"
                :items="modalidades"
                label="Modalidade"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="transacao.genero"
                :items="selectGenero"
                label="Gênero"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="transacao.materiais"
                label="Materiais emprestados"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="transacao.responsavelRetirada.nome"
                label="Responsável pela retirada"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="transacao.responsavelRetirada.telefone"
                label="Informações de contato"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="transacao.responsavelInterno.nome"
                label="Responsável Interno"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="enviar()"> Confirmar </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { Transacao } from '../models/index';

export default {
  data: () => ({
    transacao: new Transacao(),
    selectGenero: ['Feminino', 'Masculino', 'Misto'],
  }),

  computed: {
    modalidades() {
      return this.$store.getters['modalidades/getModalidades'];
    },
  },

  methods: {
    enviar() {
      alert(JSON.stringify(this.transacao));
    },
  },
};
</script>
