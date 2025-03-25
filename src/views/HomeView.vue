<template>
  <div class="row">
  <div class="col-1"></div>
  <div class="col-7">
    <instagram-card/>
    <instagram-card/>
    <instagram-card/>
    <instagram-card/>
  </div>
  <div class="col-3">
  ... ovdje ide desni stupac!
  </div>
  </div>
 </template>

<script>
import InstagramCard from '@/components/InstagramCard.vue';
export default {
  name: 'HomeView',
  components:{InstagramCard } ,
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