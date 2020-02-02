<template lang="html">

  <section class="olimpiadas">
    <head>
    <title>Tokio</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
<div class="container-fluid sinesp">
	<div class="row">
		<div class="col-md-12 sinesp">
			<img src="../assets/hero.jpeg" style="width:100%">
			<div class="centrado"><h1 class="text-white text-center">科克</h1><h2 class="text-white text-center">DESCUBRE EL MAÑANA</h2></div>
		</div>
	</div>
	<div class="row mt-4">
        <div class="col-md-7"><!-- PRIMER TEXTO E IMAGEN -->
            <div class="row justify-content-center">
                <div class="col-md-7 ml-4">
                    <h3>Atenas 1896</h3>
                    <p>Los Juegos Olímpicos de Atenas 1896, conocidos oficialmente como Juegos de la I Olimpiada, se celebraron en Atenas, Grecia, entre el 6 y el 15 de abril de 1896. Participaron 241 atletas masculinos —no hubo participación femenina— de 14 países, 
                      que disputaron en 43 competiciones de 9 deportes. Fueron los primeros Juegos Olímpicos de la Edad Contemporánea.	</p>
                </div>
                <div class="col-md-4 ml-3">
                        <img class="img-fluid" src="../assets/atenas1896.jpeg">
                </div>
            </div><!-- SEGUNDO TEXTO E IMAGEN -->
            <div class="row justify-content-center mt-4">
              <div class="col-md-4 ml-3"><h3>París 1900</h3><img class="img-fluid" src="../assets/paris1900.jpeg"></div>
              <div class="col-md-7 ml-4">
                    <p>
                          Los Juegos Olímpicos de París 1900, oficialmente Juegos de la II Olimpiada, son la segunda edición de las 
                          olimpiadas modernas. Tuvieron lugar en París, Francia, del 14 de mayo al 28 de octubre de 1900, en el marco 
                          de la Exposición Universal. La decisión de celebrar los Juegos de 1900 en París se tomó en la reunión del I 
                          Congreso Olímpico celebrado en 1894.Tras los Juegos de 1896 Pierre de Coubertin, presidente del Comité Olímpico 
                          Internacional (COI), quería organizar los Juegos de la II Olimpiada, pero Alfred Picard, comisario general de la 
                          Exposición Universal quería organizar «competiciones internacionales de ejercicio físico y deportes» durante el 
                          evento.
                    </p>
              </div>
            </div>
        </div>
        <div class="col-md-5 px-5">
          <div class="row">
            <div class="col-md-12">
              <h2>Grandes atletas de la historia</h2>
                <table class="table table-striped">
                        <tbody>
                              <tr>
                                <th scope="row"><a href="">Johnny Weissmuller</a></th>
                              </tr>
                              <tr>
                                <th scope="row"><a href="">Jesse Owens</a></th>
                              </tr>
                              <tr>
                                <th scope="row"><a href="">Nadia Comaneci</a></th>
                              </tr>
                              <tr>
                                <th scope="row"><a href="">Michael Pheleps</a></th>
                              </tr>
                              <tr>
                                <th scope="row"><a href="">Usain Bolt</a></th>
                              </tr>
                              <tr>
                                <th scope="row"><a href="">Simone Biles</a></th>
                              </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
          <div id="carouselExampleControls" class="carousel slide col-12" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="../assets/juegos1.jpeg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="../assets/juegos2.jpeg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="../assets/juegos3.jpeg" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
            
        </div>
  </div>
</body>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'olimpiadas',
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
  .olimpiadas {

  }
  .centrado{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.sinesp{
  padding: 0;
  margin: 0;
}
img{
  padding: 0;
  margin: 0;
}
</style>
