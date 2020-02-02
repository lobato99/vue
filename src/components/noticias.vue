<template lang="html">

  <section class="noticias">
    <h1 class="pt-5">NOTICIAS</h1>
    <div class="p-5">
    <input v-model="ad" type="text" @keyup.enter='consultar' class="form-control" placeholder="Buscador...">
    </div>
    <div class="container-fluid row mx-auto">
      <div v-for="noticia in noticias" v-bind:key="noticia.i" class="col-md-4 card">
          <img class="card-img-top" :src=noticia.imagen alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{noticia.titulo}}</h5>
            <p class="card-text">{{noticia.descrip}}</p>
          </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios';

  export default  {
    name: 'noticias',
    props: [],
    mounted () {

    },
    data () {
      return {
        noticias:[],
        ad:""
      }
    },
    methods: {
      consultar:function(){
        this.noticias=[];
        axios
        .get('https://newsapi.org/v2/everything?q='+this.ad+'&from=2020-01-02&sortBy=publishedAt&apiKey=0920f4bc077a40a79a8e4f2c10e9a803')
        .then(response =>{
          for(let i=0;i<response.data.articles.length;i++){
            this.noticias.push({titulo:response.data.articles[i].title,imagen:response.data.articles[i].urlToImage,descrip:response.data.articles[i].description})
            }
          })
      }
    },
    computed: {

    }
}


</script>

<style scoped>
  .noticias {

  }
</style>
