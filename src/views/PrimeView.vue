
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
      temp = value,
      resetText(),
      isPrime(value),
      calcStep = showSteps,
      Driver(calcStep)
    ">Show all Prime Numbers</v-btn>
    <div class ="ma-2" ><p>{{text}}</p></div>
    <v-btn
      class="ma-2"
      outlined
      color="indigo"    
      v-on:click="
      showSteps = !showSteps
      Driver(showSteps)
      "> Show Steps</v-btn>
      
    <div v-show="showSteps">
      
      <div class ="ma-2"><p>{{nums}}</p></div>
      <div v-if="temp>= 2" class ="ma-2"><p>{{twos}}</p></div>
      <div v-if="temp>= 9" class ="ma-2"><p>{{three}}</p></div>
      <div v-if="temp>= 25" class ="ma-2"><p>{{fives}}</p></div>
      <div v-if="temp>= 49" class ="ma-2"><p>{{sevens}}</p></div>
      <div v-if="temp>= 121" class ="ma-2"><p>{{text}}</p></div>

    </div>

    </div>

</template>


<script>
  export default {
    data: function() {
      
      return {
        showSteps: false,
        calcStep: false,
        value: "",
        result: "",
        text: "",
        nums:"",
        twos:"",
        three:"",
        fives:"",
        sevens:"",
        temp:"",

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

  printNums: function(){
    var prints = []; 
    for (var i = 0; i < this.value; i++) {
      prints.push(i);
    }
    
    this.nums = prints;

    },

    removeTwos: function(){
    var prints = [], output = []; 
    for (var i = 0; i < this.value; i++) {
      prints.push(i);
    }
    
    for (var k = 2; k <= this.value; k=k+2) {
        if(k>2) prints[k] = false;
        
      }
    for (var o = 2; o < this.value; o++) {
        if(prints[o]) {
            output.push(o);
        }
      }
      this.twos = output;

    },

    removeThrees: function(){
    var prints = [], output=[]; 
    for (var i = 0; i < this.value; i++) {
      prints.push(i);
    }
    
    for (var k = 2; k <= this.value; k=k+2) {
        if(k>2) prints[k] = false;
          for (var j = 3; j <= this.value; j=j+3) {
          if(j > 3) prints[j] = false;
        }
      }

      for (var o = 2; o < this.value; o++) {
        if(prints[o]) {
            output.push(o);
        }
      }
    
      this.three = output;

    },

    removeFives: function(){
    var prints = [], output = []; 
    for (var i = 0; i < this.value; i++) {
      prints.push(i);
    }
    
    for (var k = 2; k <= this.value; k=k+2) {
        if(k>2) prints[k] = false;
          for (var j = 3; j <= this.value; j=j+3) {
          if(j > 3) prints[j] = false;
            for (var l = 5; l <= this.value; l = l+5) {
            if(l > 5) prints[l] = false;
          }
        }
      }

      for (var o = 2; o < this.value; o++) {
        if(prints[o]) {
            output.push(o);
        }
      }
      this.fives = output;

    },

    removeSevens: function(){
    var prints = [], output = []; 
    for (var i = 0; i < this.value; i++) {
      prints.push(i);
    }
    
    for (var k = 2; k <= this.value; k=k+2) {
        if(k>2) prints[k] = false;
          for (var j = 3; j <= this.value; j=j+3) {
          if(j > 3) prints[j] = false;
            for (var l = 5; l <= this.value; l = l+5) {
            if(l > 5) prints[l] = false;
              for (var z = 7; z <= this.value; z=z+7) {
                if(z > 7) prints[z] = false;
              }
          }
        }
      }

      for (var o = 2; o < this.value; o++) {
        if(prints[o]) {
            output.push(o);
        }
      }
      this.sevens = output;

    },

    Driver: function(step){
      if(step){
        this.resetNums();      
        this.printNums();
        this.removeTwos();
        this.removeThrees();
        this.removeFives();
        this.removeSevens();
      }

    }

  }
}

  </script>
