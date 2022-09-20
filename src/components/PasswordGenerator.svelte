<script lang="ts">
  import Display from "./Display.svelte";
  import Form from "./Form.svelte";
</script>

<main class="password-generator">
  <h1 class="password-generator__title">Password Generator</h1>
  <Display value="PTx1f5DaFX" />
  <Form />
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
