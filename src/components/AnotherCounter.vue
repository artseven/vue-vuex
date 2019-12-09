<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement(50)">Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement(50)">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"])
  }
};
</script>
