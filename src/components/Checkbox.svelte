<script lang="ts">
  export let name = "";
  export let id = "";
  export let label;
  export let checked = false;
</script>

<div class="checkbox">
  <label for={id} class="checkbox__label">
    <input
      type="checkbox"
      {...{ name, id }}
      bind:checked
      class="checkbox__input"
    />
    {label}
  </label>
</div>

<style lang="scss">
  @import "../scss/mixins";

  .checkbox {
    &__label {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      cursor: pointer;
    }
    &__input {
      appearance: none;
      display: flex;
      @include flex-center;
      position: relative;
      margin: 0 1.5em 0 0;
      font: inherit;
      width: 1.15em;
      height: 1.15em;
      border: 1.5px solid var(--clr-white);
      border-radius: 1px;
      color: var(--clr-light-green);
      background-color: transparent;
      @include default-transition(border);

      &:hover,
      &:focus {
        border: 1.5px solid currentColor;
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--clr-light-green);
        z-index: 1;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0.35em;
        width: 0.65em;
        height: 0.35em;
        border: 0.2em solid var(--clr-dark-green);
        border-top: 0;
        border-right: 0;
        z-index: 10;
        transform: rotate(-50deg);
      }
    }
  }
</style>
