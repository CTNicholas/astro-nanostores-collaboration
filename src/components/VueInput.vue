<script lang="ts" setup>
import { useStore } from "@nanostores/vue";
import { inputValue, setInputValue } from "../store";
import VueLogo from "./VueLogo.vue";

const value = useStore(inputValue);
</script>

<template>
  <div>
    <label for="vue">
      <VueLogo />
    </label>
    <input
      id="vue"
      type="text"
      :value="value"
      @input="(e) => setInputValue(e.target.value)"
      @click="(e) => e.currentTarget.select()"
    />
  </div>
</template>
