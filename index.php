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
      <div id="test">
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
    <article class="randomItem" v-bind:class="{randomItem__active: randomDisplayIsActive}">
      <i v-on:click="randomDisplayIsActive = false" class="fa fa-times randomItem__exit"></i>



      <p>{{ randomDisplay.userInput }} can buy you ..</p>
      <h2 class="randomItem__amount">{{ randomDisplay.amount }}</h2>
      <h5 class="randomItem__name">{{ randomDisplay.name }}</h5>
      <img v-bind:src="randomDisplay.image" class="randomItem__image" alt="Picture of..">

    </article>

    <section>

      <!-- Categories -->
      <h2 class="sectionBrowse">... Or browse currency: </h2>
      <ul class="kategori">
        <li class="kategori__item">Food</li>
        <li class="kategori__item">Minerals</li>
        <li class="kategori__item">Fruit</li>
        <li class="kategori__item">Cars</li>
        <li class="kategori__item">Animals</li>
        <li class="kategori__item">Guns</li>
        <li class="kategori__item">Houses</li>
        <li class="kategori__item">Drinks</li>
        <li class="kategori__item">Electronics</li>
      </ul>
      <!-- Categories end -->

    </section>
  </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="javascript/vue-script.js"></script>
  </body>
</html>
