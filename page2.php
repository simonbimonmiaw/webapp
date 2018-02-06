<!DOCTYPE html>
<html la="en">
  <head>
    <meta charset="utf-8">
    <title>Chang'a'later</title>
    <link href="css/styles.css" rel="stylesheet">
  </head>
  <body>

    <!-- Heading + seach form -->
    <main>
      <h1>Chang'a'later</h1>
      <h5>- The internet's converter for useless currencies</h5>

      <!-- Search form -->
      <form action="" method="get">
        <select name="currency">
          <option value="USD">USD</option>
          <option value="saab">DKK</option>
          <option value="opel">PESOS</option>
          <option value="audi">NKK</option>
        </select>
        <input type="text" name="search-input" placeholder="Amount">
        <input type="submit">
      </form>
      <!-- End search form -->

    </main>
    <!-- End heading + search form -->

    <!-- Start browse currency -->
    <section>
      <h2>... Or browse currency: </h2>
        <h3>Category: .... </h3>
        <button>X</button>
        <article>
          <img src="" alt="Billede af fugl">
          <h5>Some parrot</h5>

          <!-- ... For each  -->
          <form class="" action="" method="post">
            <select name="currency">
              <option value="USD">USD</option>
              <option value="saab">DKK</option>
              <option value="opel">NKK</option>
              <option value="audi">SKK</option>
            </select>
            <input type="hidden" value="id" name="id">
            <input type="text" name="amount" placeholder="amount">
            <input type="submit">
          </form>
      </article>
        <!-- Endforeach -->

    </section>
    <!-- End browse currency -->

  </body>
</html>
