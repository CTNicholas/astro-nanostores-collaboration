<script lang="ts">
  import { inputValue, setInputValue } from "../store";
</script>

<div>
  <label for="svelte">Svelte</label>
  <input
    id="svelte"
    on:input={(e) => setInputValue(e.target.value)}
    type="text"
    value={$inputValue}
  />
</div>

