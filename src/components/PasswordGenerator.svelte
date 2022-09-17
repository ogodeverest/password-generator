<script lang="ts">
  import PasswordDisplay from "./PasswordDisplay.svelte";
  import Range from "./Range.svelte";
  import Checkbox from "./Checkbox.svelte";
</script>

<main class="password-generator">
  <PasswordDisplay value="P45$w0rd!!!" />
  <div class="generator-form">
    <Range
      min={6}
      max={36}
      value={0}
      label="Charachter Length"
      name="length"
      id="length"
    />
    <br />
    <Checkbox
      label="Include Uppercase Letters"
      id="uppercase"
      name="uppercase"
    />
  </div>
</main>

<style lang="scss">
  .password-generator {
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
    row-gap: 1.2rem;
    color: var(--clr-white);
    .generator-form {
      padding: var(--box-padding);
      background-color: var(--clr-box);
    }
  }
</style>
