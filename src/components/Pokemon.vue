<template>
  <div class="container">
    <div class="row">
      <div class="col-12 m-5">
        <div class="input-group rounded">
          <form>
            <input
              type="search"
              class="form-control rounded"
              placeholder="Introduce el id del pokemon."
              aria-label="Search"
              aria-describedby="search-addon"
              v-model="pokemon"
              name="poke"
            />
            <!-- <button
              type="submit"
              class="btn input-group-text border-0"
              id="search-addon"
              v-on:click="getPoke"
            >
              Search
            </button>  -->
            <v-btn plain slot="append" v-on:click="getPoke()" name="poke">Search</v-btn>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 m-5" v-if="pokemons">
        <div class="card" style="width: 18rem">
          <img class="card-img-top m-5" v-bind:src="pokemons.img" />
          <div class="card-body">
            <h5 class="card-title">{{pokemons.nombre}}</h5>
            <p class="card-text">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Pokemon",
  props: {},
  data() {
    return {
      pokemon: "",
      pokemons: {
        nombre:null,
        img:null
      },
    };
  },
  mounted() {
    console.log("Pokemon montado");
  },
  methods: {
    getPoke() {
      console.log(this.pokemon);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`)
        .then((response) => {
          console.log(response);
          //this.pokemons.push(response.data);
          this.pokemons.nombre = response.data.name;
          this.pokemons.img = response.data.sprites.front_default;
          console.log(this.pokemons);
        })
        .catch((e) => alert(e));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
