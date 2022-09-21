<script lang="ts">
  import Range from "./Range.svelte";
  import Checkbox from "./Checkbox.svelte";
  import Meter from "./Meter.svelte";
  import Button from "./Button.svelte";
  import { settings } from "../stores";
</script>

<form class="form">
  <Range
    min={6}
    max={20}
    bind:value={$settings.length.value}
    label="Charachter Length"
    name="length"
    id="length"
  />
  <Checkbox
    label="Include Uppercase Letters"
    id="uppercase"
    name="uppercase"
    bind:checked={$settings.uppercase.value}
  />
  <Checkbox
    label="Include Lowercase Letters"
    id="lowercase"
    name="lowercase"
    bind:checked={$settings.lowercase.value}
  />
  <Checkbox
    label="Include Numbers"
    id="numbers"
    name="numbers"
    bind:checked={$settings.numbers.value}
  />
  <Checkbox
    label="Include Symbols"
    id="symbols"
    name="symbols"
    bind:checked={$settings.symbols.value}
  />
  <Meter />
  <Button />
</form>

<style lang="scss">
  @import "../scss/mixins";
  .form {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    padding: 1.7rem;
    font-size: 0.9rem;
    background-color: var(--clr-box);
  }

  @media (max-width: $breakpoint-tablet) {
    .form {
      padding: 1.2rem;
    }
  }
</style>
