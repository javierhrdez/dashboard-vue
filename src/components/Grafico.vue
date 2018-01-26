<template>
  <main class="main">

    <h1>VueUp</h1>


    <div class="chart">
      <vue-c3 :handler="handler"></vue-c3>
    </div>


    <button @click="addData">Load Data</button>

  </main>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'
  import Axios from 'axios'


  export default {
    name: 'app',
    components: {
      VueC3
    },

    data () {
      return {
        handler: new Vue()
      }
    },

    mounted () {
  

      const options = {
        data: {
          columns: [
            ['data1', 2, 4, 1, 5, 2, 1, 3, 1, 3, 5, 3, 2, 7, 8, 9, 7, 3, 1],
            ['data2', 7, 2, 4, 6, 10, 1, 4, 7, 8, 12, 14, 8, 5, 2, 5, 2, 2, 1]
          ]
        }
      }

      this.handler.$emit('init', options)
    },
    created (){


      Axios.get(`https://pubsbapi.smartbike.com/oauth/v2/token?client_id=1254_67bksu8eh00sso808co840g0os8o4csck080cko8s000sckcc4&clien
t_secret=44thhl9tagcgwc48swwkc8w0o4oogk84wgcw0o8coksws0gwcc&grant_type=client_credentials`)
      .then(function(response){
         //console.log(response);
         const ACCESS_TOKEN = response.data.access_token; 
         console.log(ACCESS_TOKEN);
      })
      //const DISPO = 'https://pubsbapi.smartbike.com/api/v1/stations/status.json?access_token='.concat(ACCESS_TOKEN)
      //console.log(DISPO)

    },

    methods: {
      addData () {
        this.handler.$emit('dispatch', (chart) => {
          let data1 = chart.data('data1')[0].values.map(v => v.value)
          let data2 = chart.data('data2')[0].values.map(v => v.value)

          data1.unshift(Math.floor(Math.random() * 15))
          // data1 = data1.shift()
          data2.unshift(Math.floor(Math.random() * 15))
          // data2 = data2.shift()

          chart.load({
            columns: [
              ['data1', ...data1],
              ['data2', ...data2]
            ]
          })
        })
      }
    }
  }
</script>

<style>
  @import '../c3.min.css';
</style>

<style lang="scss">
  @import '../style.scss';
  @import '../highlight.scss';
</style>



