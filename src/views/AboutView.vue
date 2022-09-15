<template>
  <div class="prime pa-6">

    <h1>Sieve of Atkin</h1>
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
    isPrime: function() {
    if (this.value > 2)
        this.text += 2 + ", ";
    if (this.value > 3)
        this.text +=3 + ", ";

    let sieve = new Array()
    sieve[this.value+1] = 0;
    for (let i = 0; i <= this.value; i++)
        sieve[i] = false;
    for (let x = 1; x * x <= this.value; x++)
    {
        for (let y = 1; y * y <= this.value; y++)
        {
            let n = (4 * x * x) + (y * y);
            if (n <= this.value && (n % 12 == 1 || n % 12 == 5))
                sieve[n] ^= true;
 
            n = (3 * x * x) + (y * y);
            if (n <= this.value && n % 12 == 7)
                sieve[n] = true;
 
            n = (3 * x * x) - (y * y);
            if (x > y && n <= this.value && n % 12 == 11)
                sieve[n] ^= true;
        }
    }
    for (let r = 5; r * r <= this.value; r++) {
        if (sieve[r]) {
            for (var i = r * r; i <= this.value; i += r * r)
                sieve[i] = false;
        }
    }
    for (let a = 5; a <= this.value; a++)
        if (sieve[a])
            this.text += a + ", ";
  },

  },

}

</script>
