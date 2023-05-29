<script lang="ts">
  import { inputValue, setInputValue } from "../store";
  import SvelteLogo from "./SvelteLogo.svelte";
</script>

<div>
  <label for="svelte">
    <SvelteLogo />
  </label>
  <input
    id="svelte"
    type="text"
    value={$inputValue}
    on:input={(e) => setInputValue(e.target.value)}
    on:click={(e) => e.currentTarget.select()}
  />
</div>

