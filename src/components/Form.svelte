<script lang="ts">
  import Range from "./Range.svelte";
  import Checkbox from "./Checkbox.svelte";
  import type Settings from "src/models/Settings.interface";
  import Meter from "./Meter.svelte";

  export let settings: Settings;
</script>

<div class="form">
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
</div>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    row-gap: 1.3em;
    font-size: 0.9rem;
    padding: var(--box-padding);
    background-color: var(--clr-box);
  }
</style>
