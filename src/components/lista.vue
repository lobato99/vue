<template lang="html">

  <section class="lista bg-dark">
    <h1 class="text-white">Proyecto vue.js - Antonio Ramírez Lobato</h1>
    <div id="app">
      <div>
        <input type="text" class="form-control" placeholder='¿Qué quieres recordar?' v-model='tarea' @keyup.enter='add'>
        <!--<button v-on:click='add'>Añadir</button> -->
      </div>
        <p class="text-white">{{tareas.length - comp()}} tareas pendientes de un total de {{tareas.length}} | <a id="enlace" v-on:click='borrarTot'>X Borrar tareas completadas</a></p>
      <div>
      </div>
        <!--<p v-show='!tareas.length'>No hay mas tareas</p>-->
        <div id="lista-tareas">
          <div v-for="tarea in tareas" v-bind:key="tarea.i" class="row mx-4 px-4 bg-secondary rounded border border-light">
            <input type="checkbox" v-model='tarea.done' class="my-auto mr-4"> 
            <h3 v-bind:class="{'tachar':tarea.done}" class="text-light my-auto">{{tarea.titulo}}</h3>
            <span class="mt-4 ml-5"> Nota creada el {{tarea.hora}}</span>
            <button class="px-2 bg-success mr-1 ml-auto my-1">Low</button>
            <button class="px-2 bg-warning mr-1 my-1">Normal</button>
            <button class="px-2 bg-danger mr-5 my-1">High</button>
            <button v-on:click="borrar(tarea)" class="bg-danger my-2 ">X</button>
          </div>
        </div> 
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'lista',
    props: [],
    mounted () {
      if (localStorage.getItem('tareas')) {
        try {
          this.tareas=JSON.parse(localStorage.getItem('tareas'));
        } catch(e) {
          localStorage.removeItem('tareas');
        }
      }
    },
    updated: function(){
        this.guardar();
    },
    data () {
      return{
        tarea: '',
        tareas:[]
      }
    },
    methods: {
      add: function() {
        let hor=new Date();
        var horaMaque = hor.getDate()+'/'+(hor.getMonth()+1)+'/'+hor.getFullYear()+' a las '+hor.getHours()+':'+hor.getMinutes();
        var tareaObj = {
          titulo: this.tarea,
          done: false,
          hora: horaMaque
        };
        this.tareas.push(tareaObj);
        this.tarea = '';
        this.guardar();
      },
      comp: function(){
        var result=0;
        for(let i=0;i<this.tareas.length;i++){
          if(this.tareas[i].done == true){
            result++;
          }
        }
        return result;
      },
      borrarTot: function(){
        for(let i=0;i<this.tareas.length;i++){
          if(this.tareas[i].done==true){
            this.tareas.splice(i,1);
            i--;
          }
        }
        this.guardar();
      },
      guardar() {
        const parsed=JSON.stringify(this.tareas);
        localStorage.setItem('tareas', parsed);
      },
      borrar: function(tarea){
        for (let i=0;i<this.tareas.length;i++){
          if(this.tareas[i]==tarea){  
            this.tareas.splice(i,1)
          }
        }
        this.guardar();
      }

    },
    
    computed: {

    }
}


</script>

<style scoped>
  .lista {

  }
  .tachar {
            text-decoration:line-through;
        }
  li{
    list-style: none;
  }
  #enlace{
    color:rgb(245, 81, 4);
  }
</style>
