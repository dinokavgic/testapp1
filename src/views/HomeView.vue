<template>
  <div class="home-container">
    <header>
      <h1>Welcome to Our Coffee Shop</h1>
      <p>Freshly brewed coffee made just for you</p>
    </header>

    <section class="intro">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Fresh Beans</li>
        <li>Expert Baristas</li>
        <li>Cozy Atmosphere</li>
      </ul>
    </section>

    <section class="testimonials">
      <h2>Customer Testimonials</h2>
      <p>"The best coffee I've ever had!" - Sarah</p>
      <p>"Great ambiance and coffee!" - John</p>
    </section>

    <footer>
      <p>&copy; 2025 Coffee Shop</p>
      <router-link to="/login">Login</router-link> | 
      <router-link to="/registracija">Registracija</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home-container {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
}

header h1 {
  font-size: 2.5rem;
}

header p {
  font-size: 1.2rem;
}

.intro {
  margin: 30px 0;
}

.intro h2 {
  font-size: 2rem;
}

.intro ul {
  list-style-type: none;
  padding: 0;
}

.intro li {
  font-size: 1.2rem;
}

.testimonials {
  margin: 30px 0;
}

footer {
  background-color: #333;
  color: white;
  padding: 10px;
}
footer a {
  color: #4CAF50;
  text-decoration: none;
}
</style>