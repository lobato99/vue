<template lang="html">

  <section class="pie">
    <footer class="site-footer footer-expand bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p class="copyright-text text-light">&copy; 2020 Copyright <a href="#">Antonio Ramirez Lobato</a></p>
              </div>
              <div class="col-md-6">
                <ul class="social-icons">
                  <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a class="dribbble" href="#"><i class="fa fa-github"></i></a></li>
                  <li><a class="linkedin" href="#"><i class="fa fa-youtube"></i></a></li>   
                  <li><a class="linkedin" href="#"><i class="fa fa-instagram"></i></a></li>  
                </ul>
              </div>
            </div>
          </div>
        </footer>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'pie',
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
  .pie {

  }
  .site-footer{
  background-color:#cfcfcf;
  padding:45px;
  width: 100%;
  text-align: center;
}
.social-icons {
    list-style: none;
}
.social-icons li {
    display: inline-block;
    width: 10vh;
    margin-left: -20px;
}
.social-icons a {
    font-size:4vh;
}
</style>
