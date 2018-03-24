<template>
  <div class="calc">
  <p>Valor: {{ valor }}</p>
  <p>{{parOuImpar}}</p>
  <p>{{negativoOuPositivo}}</p>
  <input v-model="entrada">
  <button @click="agregarValor()">Somar</button>
  <button @click="subtrairValor()">Subtrair</button>
</div>
</template>
<script>
export default {
  name: 'Contador',
  data () {
    return {
      valor: 0,
      entrada: 0,
    };
  },
  methods: {
    agregarValor(){
      this.valor+= parseInt(this.entrada, 10);
    },
    subtrairValor(){
      this.valor-= parseInt(this.entrada, 10);
    }
  },
  computed: {
    parOuImpar() {
      if (this.valor % 2 === 0) {
        return 'PAR';
      }

      return 'IMPAR';
    },
    negativoOuPositivo() {
      if (this.valor >= 0) {
        return 'POSITIVO';
      }

      return 'NEGATIVO';
    },
        numeroPrimo() {
      if (this.valor % 1 === 0) {
        return 'PRIMO';
      }

      return 'IMPAR';
    },
  },
}
</script>
