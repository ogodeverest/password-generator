<script lang="ts">
  import Display from "./Display.svelte";
  import Form from "./Form.svelte";
  import type Settings from "../models/Settings.interface";

  let settings: Settings = {
    length: 10,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  };

  $: console.log(settings);
</script>

<main class="password-generator">
  <h1 class="password-generator__title">Password Generator</h1>
  <Display value="PTx1f5DaFX" />
  <Form bind:settings />
</main>

<style lang="scss">
  @import "../scss/mixins";
  .password-generator {
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
    row-gap: 1.2rem;
    color: var(--clr-white);

    &__title {
      font-size: 1.1rem;
      color: var(--clr-grey);
      font-weight: 500;
      text-align: center;
      margin-block: 0.7em;
    }
  }

  @media (max-width: $breakpoint-tablet) {
    .password-generator {
      row-gap: 1rem;
    }
  }
</style>
