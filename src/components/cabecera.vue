<template lang="html">

  <section class="cabecera">
    <div class="row" id="nav">
            <div class="col-12 bg-dark">
                <nav class="navbar navbar-expand-md navbar-light bg-dark ">
                    <img src="../assets/aros.svg" width="75px" height="25px">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                  
                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                      <a class="nav-link bg-dark text-light" href="#/olimpiadas">Olimpiadas</a>
                        <a class="nav-link bg-dark text-secondary" href="#/lista">
                          Notas
                        </a>
                      <a class="nav-link bg-dark text-secondary" href="#/noticias">Noticias</a>
                    </div>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#miModal">login</button>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#miModal2">registro</button>
                  </nav>
            </div>
        </div>
        <div class="modal" tabindex="-1" role="dialog" id="miModal2">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Registro</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Nombre y apellidos</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce nombre y apellidos">
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Direccion de email</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                </div>
              </div>
            </div>
          </div>
        <div class="modal" tabindex="-1" role="dialog" id="miModal">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Login</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                </div>
              </div>
            </div>
          </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'cabecera',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .cabecera {

  }
  #nav{
        padding: 0;
        margin: 0;
      }
  .row{
    width:100%;
  }
</style>
