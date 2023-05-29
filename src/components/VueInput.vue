<script lang="ts" setup>
import { useStore } from "@nanostores/vue";
import { inputValue, setInputValue } from "../store";

const value = useStore(inputValue);
</script>

<template>
  <div>
    <label for="vue">Vue</label>
    {{ " " }}
    <input
      id="vue"
      :value="value"
      type="text"
      @input="(e) => setInputValue(e.target.value)"
    />
  </div>
</template>
