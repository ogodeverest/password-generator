<script lang="ts">
  import Range from "./Range.svelte";
  import Checkbox from "./Checkbox.svelte";
  import Meter from "./Meter.svelte";
  import Button from "./Button.svelte";
  import type Settings from "src/models/Settings.interface";

  export let settings: Settings;
</script>

<form class="form">
  <Range
    min={6}
    max={20}
    bind:value={settings.length}
    label="Charachter Length"
    name="length"
    id="length"
  />
  <Checkbox
    label="Include Uppercase Letters"
    id="uppercase"
    name="uppercase"
    bind:checked={settings.uppercase}
  />
  <Checkbox
    label="Include Lowercase Letters"
    id="lowercase"
    name="lowercase"
    bind:checked={settings.lowercase}
  />
  <Checkbox
    label="Include Numbers"
    id="numbers"
    name="numbers"
    bind:checked={settings.numbers}
  />
  <Checkbox
    label="Include Symbols"
    id="symbols"
    name="symbols"
    bind:checked={settings.symbols}
  />
  <Meter />
  <Button />
</form>

<style lang="scss">
  @import "../scss/mixins";
  .form {
    display: flex;
    flex-direction: column;
    row-gap: 1.3em;
    font-size: 0.9rem;
    padding: 1.7rem;
    background-color: var(--clr-box);
  }

  @media (max-width: $breakpoint-tablet) {
    .form {
      padding: 1.2rem;
    }
  }
</style>
