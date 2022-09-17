<script lang="ts">
  import PasswordDisplay from "./PasswordDisplay.svelte";
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
  <PasswordDisplay value="P45$w0rd!!!" />
  <Form bind:settings />
</main>

<style lang="scss">
  .password-generator {
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
    row-gap: 1.2rem;
    color: var(--clr-white);
  }
</style>
