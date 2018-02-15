var app7 = new Vue({
  el: '#app',
  data: {
    items: [
      {
        name: 'Seahorse', image: 'images/seahorse.jpg', value: 900, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Chameleon', image: 'images/chameleon.jpg', value: 250, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Tibetan Mastiff', image: 'images/tibetan-mastiff.jpg', value: 42500, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Marmoset Monkey', image: 'images/marmoset-monkey.jpg', value: 23700, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      { name: 'Icelandic Hourse', image: 'images/icelandic-horse.jpg', value: 15000, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Chihuahua', image: 'images/chihuahua.jpg', value: 3500, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Hedgehog', image: 'images/hedgehog.jpg', value: 1200, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Cuvier\'s Dwarf Caiman', image: 'images/dwarf-caiman.jpg', value: 1800, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Mini Donkey', image: 'images/mini-donkey.jpg', value: 8000, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Llama', image: 'images/llama.jpg', value: 2500, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 0, name: 'Seat Mii', image: 'images/seat-mii.jpg', value: 80000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 1, name: 'Audi a4', image: 'images/audi-a4.jpg', value: 457000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 2, name: 'Lamborghini Aventador Roadster', image: 'images/lamborghini-aventador-roadster.jpg', value: 8500000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 3, name: 'Ferrari 335 Sport', image: 'images/ferrari-335.jpg', value: 250000000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      { id: 4, name: 'Honda Civic', image: 'images/honda-civic.jpg', value: 249000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 5, name: 'Mercedes S350', image: 'images/mercedes-s350.jpg', value: 1700000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 6, name: 'Koenigsegg One', image: 'images/koenigsegg-one.jpg', value: 10400000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 7, name: 'Bugatti Veyron Grand Sport Ettorre', image: 'images/bugatti-veyron.jpg', value: 17300000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 8, name: 'Pagani Huayra', image: 'images/pagani-huayra.jpg', value: 9700000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 9, name: 'Hyundai i10', image: 'images/hyundai-i10.jpg', value: 84888, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 0, name: 'Bel Air Spec Manor, Florida', image: 'images/bel-air-spec-manor-florida.jpg', value: 1519202720, category: 'houses', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 1, name: 'Briar Patch, The Hamptons', image: 'images/briar-patch.jpg', value: 850000000, category: 'houses', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 2, name: 'Il Palmetto, Palm Beach', image: 'images/il-palmetto.jpg', value: 832000000, category: 'houses', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 3, name: 'Fifth Avenue Duplex, New York City', image: 'images/fifth-avenue-duplex.jpg', value: 729483283, category: 'houses', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      { id: 4, name: 'Brookline Estate, Boston', image: 'images/bookline-estate.jpg', value: 547112462, category: 'houses', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 5, name: 'Holmby Hills Villa, Los Angeles', image: 'images/holby-hills-villa.jpg', value: 534954407, category: 'houses', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 6, name: 'Beverly Hills Mansion, Los Angeles', image: 'images/beverly-hills-mansion.jpg', value: 516717325, category: 'houses', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 7, name: 'Edie Goetz Mansion, Los Angeles', image: 'images/eddie-goetz-mansion.jpg', value: 480243161, category: 'houses', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 8, name: 'Shitty old house in Denmark', image: 'images/shitty-old-house.jpg', value: 75000, category: 'houses', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        id: 9, name: 'House in kværndrup', image: 'images/house-in-kvaerndrup.jpg', value: 95000, category: 'houses', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      // Drinks
      {
		    name: 'Breezer', image: 'images/breezer.jpg', value: 16.95, category: 'drinks', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
	    {
		    name: 'Piña Colada', image: 'images/pina-colada.jpg', value: 90, category: 'drinks', displayAmount: '\.\.\.', displayInput: '\.\.\.'
	    },
	    {
		    name: 'Virgin Strawberry Daiquiri', image: 'images/virgin-strawberry-daiquiri.jpg', value: 50, category: 'drinks', displayAmount: '\.\.\.', displayInput: '\.\.\.'
	    },
    	{
		    name: 'Stor fadøl', image: 'images/fadoel.jpg', value: 40, category: 'drinks', displayAmount: '\.\.\.', displayInput: '\.\.\.'
	    },
	    {
		    name: 'Dry martini', image: 'images/dry-martini.jpg', value: 75, category: 'drinks', displayAmount: '\.\.\.', displayInput: '\.\.\.'
	    },
      { name: 'Smoked ham', image: 'images/skinke.jpg', value: 200, category: 'food', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      { name: 'Beef 1 kg', image: 'images/beef.jpg', value: 65, category: 'food', displayAmount: '\.\.\.', displayInput: '\.\.\.' },

      {name: '5 kg cod', image: 'images/torsk.jpg', value: 530, category: 'food', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: '2 kg herring', image: 'images/sild.jpg', value: 520, category: 'food', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: '1 kg shrimp', image: 'images/rejer.jpg', value: 150, category: 'food', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: '1 kg pasta', image: 'images/pasta.jpg', value: 8, category: 'food', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Mauser 98K', image: 'images/mauser.jpg', value: 12000, category: 'guns', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },

      {name: 'Glock 19', image: 'images/glock19.jpg', value: 3600, category: 'guns', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Five-seven', image: 'images/fiveseven.jpg', value: 8400, category: 'guns', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'm4a1', image: 'images/m4a1.jpg', value: 10000, category: 'guns', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {id:0, name: 'Tiger', image: 'images/tigercub.jpg', value: 45000, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
      id:1, name: 'Horse', image: 'images/horse.jpg', value: 30000, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {id:2, name: 'Labrador Retriever', image: 'images/dog.jpg', value: 8000, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {id:3, name: 'Turtle', image: 'images/turtle.jpg', value: 60, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      { id:4, name: 'Camel', image: 'images/camel.jpg', value: 4000, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      { id:5, name: 'Siberian Dwarf Hamster', image: 'images/hamster.jpg', value: 150, category: 'animals', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      { id:6, name: 'Cheeseburger', image: 'images/Cheeseburger.jpg', value: 10, category: 'food', displayAmount: '\.\.\.', displayInput: '\.\.\.'},
      {
        name: 'Desert Eagle', image: 'images/deserteagle.jpg', value: 9000, category: 'guns', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },

      {name: 'Ak-47', image: 'images/ak47.jpg', value: 3000, category: 'guns', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Ferrari 458 Spider', image: 'images/Ferrari.jpg', value: 4890000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Audi A8', image: 'images/audia8.jpg', value: 1600000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Mercedes-AMG GT', image: 'images/mercedes.jpg', value: 4893000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Aston Martin Vanquish', image: 'images/astonmartin.jpg', value: 5780000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Bugatti Veyron', image: 'images/bugatti.jpg', value: 25000000, category: 'cars'},

      {name: 'Porsche Carrera GT', image: 'images/porsche.jpg', value: 10300000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Lamborghini Murcielago Roadster', image: 'images/lamborghini.jpg', value: 5500000, category: 'cars', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Gold i gram', image: 'images/guld.jpg', value: 230, category: 'minerals', displayAmount: '\.\.\.', displayInput: '\.\.\.' },

      {name: 'Fine silver in gram', image: 'images/silver.jpg', value: 2.66, category: 'minerals', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'platinum in gram', image: 'images/platin.jpg', value: 350, category: 'minerals', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Magnesium in kg', image: 'images/magnesium.jpg', value: 14, category: 'minerals', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Wolfram in kg', image: 'images/wolfram.jpg', value: 184, category: 'minerals', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Palladium i gram', image: 'images/Palladium.jpg', value: 298, category: 'minerals', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Playstation 4 500gb', image: 'images/ps4.jpg', value: 2000, category: 'electronics', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'DJI Phantom 3 drone', image: 'images/drone.jpg', value: 4600, category: 'electronics', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Oculus Rift', image: 'images/rift.jpg', value: 3300, category: 'electronics', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'GTX 1080 Ti Gaming X 11G', image: 'images/gtx1080.jpg', value: 6000, category: 'electronics', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Nokia 3310', image: 'images/nokia3310.jpg', value: 450, category: 'electronics', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'One Plus 5t', image: 'images/oneplus.jpg', value: 3800, category: 'electronics', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Iphone x', image: 'images/iphone.jpg', value: 8700, category: 'electronics', displayAmount: '\.\.\.', displayInput: '\.\.\.'},

      {name: 'Philips 65" 4K Smart TV', image: 'images/tv.jpg', value: 10000, category: 'electronics', displayAmount: '\.\.\.', displayInput: '\.\.\.'},
      // Fruits
      {
        name: 'Banana', image: 'images/banana.jpg', value: 1.95, category: 'fruit', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Grape', image: 'images/grape.jpg', value: 10, category: 'fruit', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Lemon', image: 'images/lemon.jpg', value: 4, category: 'fruit', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Lime', image: 'images/lime.jpg', value: 4, category: 'fruit', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Orange', image: 'images/orange.jpg', value: 8, category: 'fruit', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },
      {
        name: 'Pineapple', image: 'images/pineapple.jpg', value: 22, category: 'fruit', displayAmount: '\.\.\.', displayInput: '\.\.\.'
      },

    ],
    randomDisplay: {
      name: '',
      image: '',
      amount: '',
      userInput: '',
      isActive: false
    },
    categoryDisplay: {
      category: '',
      isActive: false,
      amount: '',
    }
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
        var arrayCount = this.items.length;
        var randomNum = Math.floor((Math.random() * arrayCount));

        // Display random array item and amount
        this.randomDisplay.name = this.items[randomNum].name;
        this.randomDisplay.image = this.items[randomNum].image;
        this.randomDisplay.amount = Math.floor(money / this.items[randomNum].value);
        this.randomDisplay.isActive = true;
      }
    },
    displayCategory(category) {
      this.categoryDisplay.category = category;
      this.categoryDisplay.isActive = true;
    },
    convertItem(submitEvent) {
      var currency = submitEvent.target.elements.currency.value;
      var userInput = submitEvent.target.elements.name.value;

      var money = this.convertCurrency(currency, userInput);
      var index = submitEvent.target.elements.index.value;
      var item = this.items[index];

      var display = Math.floor(money / item.value);
      this.items[index].displayAmount = display;
      this.items[index].displayInput = money;
      document.getElementById(index).value = '';
      console.log(this.items[index].displayAmount);

    }
  }
})
