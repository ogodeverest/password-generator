<script lang="ts">
</script>

<button type="submit" class="button">
  Generate <span class="button__icon">&#8594</span></button
>

<style lang="scss">
  @import "../scss/mixins";
  .button {
    @include flex-center;
    height: calc(3em - 4px);
    padding: 1.7em;
    margin-top: 0.6rem;
    border: 2px solid transparent;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    font-family: inherit;
    color: var(--clr-dark-green);
    letter-spacing: 1px;
    background-color: var(--clr-light-green);
    cursor: pointer;
    @include default-transition(background-color);

    &__icon {
      margin: 0 0 0.15em 0.8em;
      font-weight: bolder;
      font-size: 1.5em;
    }

    &:hover,
    &:focus {
      background-color: transparent;
      border-color: var(--clr-light-green);
      color: var(--clr-light-green);
    }
  }
</style>
