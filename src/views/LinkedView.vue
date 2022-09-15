<template>
  <div class="prime pa-6">

    <h1>Sieve of Sundaram</h1>
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

    <div class ="ma-2"><p>{{text}}</p></div>

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

    let nNew = (n - 1) / 2;
   
    let marked = [];
   
    for (let i = 0; i < nNew + 1; i++)
    marked[i] = false;
   
    for (let i = 1; i <= nNew; i++)
    for (let j = i; (i + j + 2 * i * j) <= nNew; j++)
        marked[i + j + 2 * i * j] = true;
   
    if (n > 2)
    this.text += 2 + ", ";
   
    for (let i = 1; i <= nNew; i++)
    if (marked[i] == false)
        this.text += 2 * i + 1 + ", ";
    return -1;
  },

  },

}

</script>
