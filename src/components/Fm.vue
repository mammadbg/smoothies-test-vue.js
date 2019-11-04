<template>
  <div class="front">
    <!-- ********************* -->
    <div class="container">
      <p>Taco?</p>
      <p>
        <input v-model="tacos" />
      </p>
      <!-- <p v-once="tacos">{{ tacos }}</p> -->
      <span v-pre>this is good if i nedd to show the mustache view of {{tacos}}</span>
      <label for="no">no</label>
      <br />
      <div>
        <p v-if="tacos === 'yes' " class="thumbs">+++</p>
        <p v-else>you are a monster</p>
        <pre>{{ $data}}</pre>
      </div>
    </div>
    <!-- container -->

    <!-- ********************* -->
    <div class="container">
      <div class="item">
        <img src="../assets/logo.png" />
        <div class="quantity">
          <button class="inc" @click="counter> 0 ? counter -=1 : 0">-</button>
          <span class="quant-text">Quantity: {{counter }}</span>
          <button class="inc" @click="counter += 1">+</button>
        </div>
        <!-- quantity -->
        <button class="submit" @click="counter += 1">Submit</button>
      </div>
      <!-- item -->
    </div>
    <!-- container -->
  </div>
</template>

<script>
export default {
  name: "front",
  data() {
    return {
      tacos: "I like Al Pastor",
      counter: 0
    };
  }
};
</script>

<style>
.container {
  margin-top: 4rem;
  padding: 2rem;
  border: 2px solid black;
}
</style>