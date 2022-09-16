<template>
  <div class="prime pa-6">

    <h1>Sieve of Eratosthenes</h1>
    <v-text-field
      label="Enter Number"
      outlined
      dense v-model="value" placeholder="" />

    <v-btn 
      class="ma-2"
      outlined
      color="indigo" v-on:click="
      resetText()
      isPrime(value)
      resetNums()
      generateNums()
    ">Show all Prime Numbers</v-btn>
    <div class ="ma-2" ><p>{{text}}</p></div>
    <div class ="ma-2">{{nums}}</div>

    </div>

</template>


<script>
  export default {
    data: function() {
      
      return {
        value: "",
        result: "",
        text: "",
        nums:"",
      }
      
    },
    methods: {
    resetText: function(){
      this.text = "";
    },
    resetNums: function(){
      this.nums = "";
    },
    isPrime: function(n) {
    var array = [], upperLimit = Math.sqrt(n), output = [];

    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    for (var k = 2; k <= upperLimit; k++) {
        if (array[k]) {
            for (var j = k * k; j < n; j += k) {
                array[j] = false;
            }
        }
    }

    for (var o = 2; o < n; o++) {
        if(array[o]) {
            output.push(o);
        }
    }

    this.text = output;
},


  }
}
  </script>
