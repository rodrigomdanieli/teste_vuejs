<template>
  <div>
    <h1>Ola {{ nome }}</h1>
    <div v-if="valid_names">
      <div v-for="var_nome in list_nomes" :key="var_nome.name">
        <testando :nome="var_nome.name" />
      </div>
    </div>
    <el-button type="success" @click="validarNome">Validar</el-button>
    <div></div>
  </div>
</template>

<script>
import Testando from "./components/Testando"

export default {
  props: {
    type:String,
  },
  methods: {
    validarNome(){
      this.valid_names = !this.valid_names
    }
  },
  watch: {
    valid_names(val){
      console.log(val)
    }
  },
  components: {
    Testando
  },
  data() {
    return {
      nome: "",
      valid_names: false,
      list_nomes: [
        {
          name: "nome_1",
        },
        {
          name: "nome_2",
        },
        {
          name: "nome_3",
        },
      ],
    };
  },
  created() {
    this.nome = "123";
  },
  mounted() {},
  destroyed() {
    this.nome = undefined
    this.list_nomes = []
  },
};
</script>

<style lang="scss" scoped></style>
