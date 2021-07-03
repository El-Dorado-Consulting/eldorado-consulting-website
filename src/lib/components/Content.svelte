<body>
  <header>
    <img class="logo" src="logo_white.png" alt="logo" />
    <nav>
      <ul class="nav white">
        <li>About</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
  <section class="banner flex-col">
    <h1>MICROMOBILITY & PROCESS ENGINEERING SPECIALISTS</h1>
    <h2>You have the vision to execute. Let us focus on the details</h2>
    <button>Connect With Us</button>
  </section>
  <section class="bk-teal white">
    <div class="column">
      <h1>About Us</h1>
    </div>
    <div class="column flex-col">
      <h2>
        We’re a team of experts who’ve spent years building micromobility
        operations from the ground-up across industry-leading companies
      </h2>
      <p>
        Our experience ranges from e-bikes to scooters, docked to dock-less,
        leasing to sharing, local to multinational. Our expertise covers the
        complete vehicle lifecycle, from its assembly to maintenance to failure
        analysis. Whether it’s starting up your operation from scratch or taking
        it to the next level, the El Dorado Team has you covered.
      </p>
    </div>

  </section>
  <section class="">
    <div class="column flex-col">
        <div class="slider">
          Slider
        </div>
    </div>
    <div class="column flex-col">
      <h1>Services</h1>
      <h2>WE OFFER DEDICATED MODULES ON KEY OPERATIONAL TOPICS</h2>
    </div>
  </section>
  <section class="bk-mustard white">
    <h1>CANT FIND WHAT YOU’RE LOOKING FOR? <span>CONTACT US</span> TO EXPLORE MORE HANDS ON PROJECTS</h1>
  </section>
  <section class="">
    <div class="column flex-col">
      <h1>Teams We've Helped</h1>

    </div>
    <div class="column flex-col">
       <img src="team-logos.png" alt="">
    </div>
  </section>
  <section class="center">
    <h1>Our Thoughts</h1>
  </section>
  <section>
    <div class="column">
      <div class="post">
        <img src="blog-header.png" alt="">
        <h1>The Art of Tying Shoes</h1>
        <div class="date"> March 25th</div>
        <div class="snippet">We three kings of orient are. Bearing Gifts we travel so far...</div>
      </div>
    </div>
    <div class="column flex-col">
      <div class="post">
        <div class="date"> March 25th</div>
        <div class="snippet">We three kings of orient are. Bearing Gifts we travel so far...</div>
      </div>
      <div class="post">
        <div class="date"> March 25th</div>
        <div class="snippet">We three kings of orient are. Bearing Gifts we travel so far...</div>
      </div>
      <div class="post">
        <div class="date"> March 25th</div>
        <div class="snippet">We three kings of orient are. Bearing Gifts we travel so far...</div>
      </div>
      <div class="post">
        <div class="date"> March 25th</div>
        <div class="snippet">We three kings of orient are. Bearing Gifts we travel so far...</div>
      </div>

    </div>
  </section>
  <section>
    <div class="column flex-col">
      <h1>Contact US</h1>
      Every micromobility company is unique! Schedule a one-hour session with us to understand where we can help elevate your operation.
    </div>
    <div class="column flex-col">
      <form action="" method="get" class="form-example">
        <div class="form-example">
          <label for="name">Name: </label>
          <input type="text" name="name" id="name" required>
        </div>
        <div class="form-example">
          <label for="email">Email: </label>
          <input type="email" name="email" id="email" required>
        </div>
        <div class="form-example">
          <label for="email">Message: </label>
          <textarea id="story" name="story"
          rows="5" cols="33">
        </textarea>
        </div>
        <button>Submit</button>

      </form>

    </div>
  </section>
  <footer>
    Made with ❤️ in San Francisco           
  </footer>

</body>

<style>
  body {
    display: flex;
    flex-direction: column;
  }

  header {
    background-color: var(--mustard);
    min-height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: none;

  }

  nav {
    display: flex;
    max-height: 4rem;
    justify-content: space-between;
    margin-right: 2%;
  }
  .logo {
    max-width: 15%;
    margin-left: 2%;
  }
  .nav {
    text-decoration: none;
    display: flex;
    align-items: center;
    background-color: var(--mustard);
  }
  .nav > li {
    list-style-type: none;
    text-transform: uppercase;
    padding: 1rem;
  }

  .banner {
    min-height: 60rem;
    text-align: center;
    background-image: url("../animation-one.png");
    background-size: cover;
    background-position: center;
    color: black;
  }

  .banner > h1 {
    font-weight: 300;
    margin: 8%;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 4rem;
  }

  .banner > h2 {
    font-weight: 300;
    margin: 8%;
    text-decoration: none;
    font-size: 2rem;
  }

  button {
    text-transform: uppercase;
    padding: 1rem;
    font-size: larger;
    margin-left: 40%;
    margin-right: 40%;

  }

  section {
    display: flex;
  }

  .bk-teal {
    background-color: var(--teal);
  }

  .bk-mustard {
    background-color: var(--mustard);
  }

  .white {
    color: white;
  }
 
  .column {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .flex-col {
    flex-direction: column;
  }

  .slider {
    min-height: 20rem;
  }

  .center {
    justify-content: center;
  }
</style>
