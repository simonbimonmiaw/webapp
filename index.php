<!DOCTYPE html>
<html la="en">
  <head>
    <meta charset="utf-8">
    <title>Convertinator</title>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
  </head>
  <body>
    <header class="header">
        <img class="header__logo" src="images/robot.svg" alt="logo">
      <h1 class="header__heading">Convertinator</h1>
      <h5 class="header__subheading">- The internet's converter for useless currencies</h5>
    </header>

      <!-- Search form -->
    <main class="main__form">
      <form class="form__design" action="" method="get">
        <select class="select" name="currency">
          <option class="select__option" value="DKK">DKK</option>
          <option class="select__option" value="USD">USD</option>
          <option class="select__option" value="SKK">SKK</option>
          <option class="select__option" value="NKK">NKK</option>
        </select>
        <input class="form__text" type="text" name="search-input" placeholder="Amount">
        <input class="form__submit" type="submit" value="Random">
      </form>
      <!-- Search form end -->

    </main>


      <header class="popupHeader">
        <h3 class="popupHeader__heading">Category: Animals </h3>
        <a class="popupHeader__exit"><i class="fa fa-times"></i></a>
      </header>

      <div class="popup">
        <article class="popupItem">
          <img class="popupItem__image" src="images/flodhest.jpg" alt="Billede af fugl">
          <h5 class="popupItem__heading">Your mom</h5>

          <!-- ... For each  -->

          <form class="popupItem__form" action="" method="get">
            <select class="poptupItem__select" name="currency">
              <option class="select_option" value="DKK">DKK</option>
              <option class="select_option" value="USD">USD</option>
              <option class="select_option" value="SKK">SKK</option>
              <option class="select_option" value="NKK">NKK</option>
            </select>
            <input class="textInput" type="text" name="search-input" placeholder="Amount">
            <input class="submit" type="submit" value="Convert">
          </form>
          <h5 class="popupItem__result">Can buy you.. </h5>
        </article>
        <article class="popupItem">
          <img class="popupItem__image" src="images/trump.jpg" alt="Billede af fugl">
          <h5 class="popupItem__heading">Trump</h5>

          <!-- ... For each  -->

          <form class="popupItem__form" action="" method="get">
            <select class="select" name="currency">
              <option class="select_option" value="DKK">DKK</option>
              <option class="select_option" value="USD">USD</option>
              <option class="select_option" value="SKK">SKK</option>
              <option class="select_option" value="NKK">NKK</option>
            </select>
            <input class="textInput" type="text" name="search-input" placeholder="Amount">
            <input class="submit" type="submit" value="Convert">
          </form>
          <h5 class="popupItem__result">Can buy you.. </h5>
        </article>
        <article class="popupItem">
          <img class="popupItem__image" src="images/fugl.jpg" alt="Billede af fugl">
          <h5 class="popupItem__heading">Birdie</h5>

          <!-- ... For each  -->

          <form class="popupItem__form" action="" method="get">
            <select class="select" name="currency">
              <option class="select_option" value="DKK">DKK</option>
              <option class="select_option" value="USD">USD</option>
              <option class="select_option" value="SKK">SKK</option>
              <option class="select_option" value="NKK">NKK</option>
            </select>
            <input class="textInput" type="text" name="search-input" placeholder="Amount">
            <input class="submit" type="submit" value="Convert">
          </form>
          <h5 class="popupItem__result">Can buy you.. </h5>
        </article>
        <article class="popupItem">
          <img class="popupItem__image" src="images/fugl.jpg" alt="Billede af fugl">
          <h5 class="popupItem__heading">Birdie</h5>

          <!-- ... For each  -->

          <form class="popupItem__form" action="" method="get">
            <select class="select" name="currency">
              <option class="select_option" value="DKK">DKK</option>
              <option class="select_option" value="USD">USD</option>
              <option class="select_option" value="SKK">SKK</option>
              <option class="select_option" value="NKK">NKK</option>
            </select>
            <input class="textInput" type="text" name="search-input" placeholder="Amount">
            <input class="submit" type="submit" value="Convert">
          </form>
          <h5 class="popupItem__result">Can buy you.. </h5>
        </article>

      </div>
        <!-- Endforeach -->

    <!-- End browse currency -->

  </body>
</html>
