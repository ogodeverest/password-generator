<script lang="ts">
  import { onDestroy } from "svelte";
  import Range from "./Range.svelte";
  import Checkbox from "./Checkbox.svelte";
  import Meter from "./Meter.svelte";
  import Button from "./Button.svelte";
  import { settings } from "../stores";
  import type Settings from "../models/Settings.interface";

  let formSettings: Settings;

  const unsubscribe = settings.subscribe((settings: Settings) => {
    formSettings = settings;
  });

  onDestroy(unsubscribe);

  function handleSubmit() {
    settings.set(formSettings);
  }
</script>

<form class="form" on:submit|preventDefault={handleSubmit}>
  <Range
    min={6}
    max={20}
    bind:value={formSettings.length.value}
    label="Charachter Length"
    name="length"
    id="length"
  />
  <Checkbox
    label="Include Uppercase Letters"
    id="uppercase"
    name="uppercase"
    bind:checked={formSettings.uppercase.value}
  />
  <Checkbox
    label="Include Lowercase Letters"
    id="lowercase"
    name="lowercase"
    bind:checked={formSettings.lowercase.value}
  />
  <Checkbox
    label="Include Numbers"
    id="numbers"
    name="numbers"
    bind:checked={formSettings.numbers.value}
  />
  <Checkbox
    label="Include Symbols"
    id="symbols"
    name="symbols"
    bind:checked={formSettings.symbols.value}
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
