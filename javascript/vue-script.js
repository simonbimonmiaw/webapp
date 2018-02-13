var app7 = new Vue({
  el: '#test',
  data: {
    animals: [
      {
        id: 0, name: 'Seahorse', image: 'images/seahorse.jpg', value: 900
      },
      {
        id: 1, name: 'Chameleon', image: 'images/chameleon.jpg', value: 250
      },
      {
        id: 2, name: 'Tibetan Mastiff', image: 'images/tibetan-mastiff.jpg', value: 42500
      },
      {
        id: 3, name: 'Marmoset Monkey', image: 'images/marmoset-monkey.jpg', value: 23700
      },
      { id: 4, name: 'Icelandic Hourse', image: 'images/icelandic-horse.jpg', value: 15000
      },
      {
        id: 5, name: 'Chihuahua', image: 'images/chihuahua.jpg', value: 3500
      },
      {
        id: 6, name: 'Hedgehog', image: 'images/hedgehog.jpg', value: 1200
      },
      {
        id: 7, name: 'Cuvier\'s Dwarf Caiman', image: 'images/dwarf-caiman.jpg', value: 1800
      },
      {
        id: 8, name: 'Mini Donkey', image: 'images/mini-donkey.jpg', value: 8000
      },
      {
        id: 9, name: 'Llama', image: 'images/llama.jpg', value: 2500
      }
    ],
    randomDisplay: {
      name: '',
      image: '',
      amount: '',
      userInput: ''
    },
    randomDisplayIsActive: false,
  },
  methods: {
      convertCurrency(currency, userInput) {
        var money = '';
        switch (currency) {
          case 'USD':
            money = userInput * 6;
            break;

          case 'NKK':
            userInput = parseInt(userInput);
            money = (userInput * 0.3) + userInput;
            break;

          case 'DKK':
            money = userInput;
            break;

          case 'SKK':
            money = userInput * 1.33;
            break;
        }
        return money;
      },

      randomItem() {
        // Receive currency and userinput
        var currency = this.$refs.randomCurrency.value;
        var userInput = this.$refs.randomInput.value;

        // if user has not submitted anything return nothing
        if (userInput === '') {
          return ''
        } else if(isNaN(userInput)){
          this.randomDisplay.name = "Dude, that's not a number";
          this.randomDisplay.image = "images/loser.jpg";
          this.randomDisplay.amount = '';
          this.randomDisplayIsActive = true;
          console.log('not a number');
        } else {

        // Convert userinput into amount in DKK
        var money = this.convertCurrency(currency, userInput);

        // Receive array length and generate random number between 0 and array length
        var arrayCount = this.animals.length;
        var randomNum = Math.floor((Math.random() * arrayCount));

        // Display random array item and amount
        this.randomDisplay.name = this.animals[randomNum].name;
        this.randomDisplay.image = this.animals[randomNum].image;
        this.randomDisplay.amount = Math.floor(money / this.animals[randomNum].value);
        this.randomDisplayIsActive = true;
      }
    }
  }
})
