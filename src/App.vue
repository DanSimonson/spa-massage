<template>
  <div id="app" class='bg-img'>
    <app-header></app-header>
    <app-card></app-card>
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products2="products2"></product-list-two>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import ProductListOne from './components/ProductListOne.vue'
  import ProductListTwo from './components/ProductListTwo.vue'
  import header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Card from './components/Card.vue'
  export default {
    name: 'app',
    components: {
      'product-list-one': ProductListOne,
      'product-list-two': ProductListTwo,
      'app-header': header,
      'app-footer': Footer,
      'app-card': Card
    },
    data() {
      return {
        products: [
          { name: 'Swedish Massage', price: 250 },
          { name: 'Shiatsu Massage', price: 300 },
          { name: 'Hot Stone Massage.', price: 350 },
          { name: 'Aromatherapy Massage', price: 350 }

        ],
        products2: [
          { name: 'Ear Candling', price: 400 },
          { name: 'foot reflexiology', price: 200 },
          { name: 'Chair Massage', price: 300 }
        ]
      }
    }
  }
</script>

<style>
  body,
  html {
    font-family: Ubuntu;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }

  /*
  .bg-img {
    background-image: url('https://res.cloudinary.com/dmglopmul/image/upload/v1524428090/sample.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
  */

  .container {
    width: 100%;
    color: darkolivegreen;

  }
</style>