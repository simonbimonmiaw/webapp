<!DOCTYPE html>
<html la="en">
  <head>
    <meta charset="utf-8">
    <title>Convertinator</title>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
    <link href="css/styles.css" rel="stylesheet">


  </head>
  <body>
    <header class="header">
        <img class="header__logo" src="images/robot.svg" alt="logo">
      <h1 class="header__heading">Convertinator</h1>
      <h5 class="header__subheading">- The internet's converter for useless currencies</h5>
    </header>

      <!-- Search form -->
      <div id="app">
    <main class="main__form">
      <form class="form__design" action="" method="get" v-on:submit.prevent="randomItem()">
        <select class="select" name="currency" ref="randomCurrency">
          <option class="select__option" value="DKK">DKK</option>
          <option class="select__option" value="USD">USD</option>
          <option class="select__option" value="SKK">SKK</option>
          <option class="select__option" value="NKK">NKK</option>
        </select>
        <input class="form__text" ref="randomInput" type="text" name="search-input" placeholder="Amount">
        <button class="form__submit" type="submit"><span class="random">Random</span><span class="go">Let's go!</span></button>
      </form>
      <!-- Search form end -->

    </main>

    <article class="randomItem" v-bind:class="{randomItem__active: randomDisplay.isActive}">
      <i v-on:click="randomDisplay.isActive = false" class="fa fa-times randomItem__exit"></i>



      <p>{{ randomDisplay.userInput }} can buy you ..</p>
      <h2 class="randomItem__amount">{{ randomDisplay.amount }}</h2>
      <h5 class="randomItem__name">{{ randomDisplay.name }}</h5>
      <img v-bind:src="randomDisplay.image" class="randomItem__image" alt="Picture of..">

    </article>

    <section class="browseCategory" v-bind:class="{browseCategory__hide: categoryDisplay.isActive}">

      <!-- Categories -->
      <h2 class="sectionBrowse">... Or browse currency: </h2>
      <ul class="kategori">
        <li class="kategori__item" v-on:click="displayCategory('food')">Food</li>
        <li class="kategori__item" v-on:click="displayCategory('minerals')">Minerals</li>
        <li class="kategori__item" v-on:click="displayCategory('fruit')">Fruit</li>
        <li class="kategori__item" v-on:click="displayCategory('cars')">Cars</li>
        <li class="kategori__item" v-on:click="displayCategory('animals')">Animals</li>
        <li class="kategori__item" v-on:click="displayCategory('guns')">Guns</li>
        <li class="kategori__item" v-on:click="displayCategory('houses')">Houses</li>
        <li class="kategori__item" v-on:click="displayCategory('drinks')">Drinks</li>
        <li class="kategori__item" v-on:click="displayCategory('electronics')">Electronics</li>
      </ul>
      <!-- Categories end -->

    </section>

    <section class="popupWrapper" v-bind:class="{popupWrapper__active: categoryDisplay.isActive}">
      <header class="popupHeader">
        <h3 class="popupHeader__heading">Category: {{ categoryDisplay.category }}</h3>
        <a class="popupHeader__exit" v-on:click="categoryDisplay.isActive = false"><i class="fa fa-times"></i></a>
      </header>

      <div class="popup">
        <article class="popupItem" v-for="(item, index) in items" v-if="item.category == categoryDisplay.category">
          <img v-bind:src="item.image" class="popupItem__image" alt="Billede af fugl">
          <h5 class="popupItem__heading">{{item.name}}</h5>

          <!-- ... For each  -->

          <form class="popupItem__form" action="" method="get" v-on:submit.prevent="convertItem">
            <select class="poptupItem__select" name="currency">
              <option class="select_option" value="DKK">DKK</option>
              <option class="select_option" value="USD">USD</option>
              <option class="select_option" value="SKK">SKK</option>
              <option class="select_option" value="NKK">NKK</option>
            </select>
            <input type="hidden" name="index" v-bind:value="index">
            <input class="textInput" ref="{{index}}" type="text" name="name" placeholder="Amount">
            <input class="submit" type="submit" value="Convert">
          </form>
          <h5 class="popupItem__result" v-bind:id="index">Can buy you..</h5>
        </article>

      </div>
    </div>
  </section>
    <script src="javascript/vue.js"></script>
    <script src="javascript/vue-script.js"></script>
  </body>
</html>
