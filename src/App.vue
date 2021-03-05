<template>
  <v-app>
    <Nav/>
    <Pokemon/>
  </v-app>
</template>

<script>
import Nav from './components/Nav';
import Pokemon from './components/Pokemon';


export default {
  name: 'App',

  components: {
    Nav,
    Pokemon
  },

  data: () => ({
    //
  }),
};
</script>
