<script lang="ts">
  export let name = "";
  export let id = "";
  export let label;
  export let checked = false;
  export let disabled = false;
</script>

<div class="checkbox" class:disabled>
  <label for={id} class="checkbox__label">
    <input
      type="checkbox"
      {...{ name, id, disabled }}
      bind:checked
      class="checkbox__input"
    />
    {label}
  </label>
</div>

<style lang="scss">
  @import "../scss/mixins";

  $input-size: 1.15em;
  @mixin border-color($color) {
    border: 1.5px solid $color;
  }
  .checkbox {
    &__label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    &__input {
      appearance: none;
      @include flex-center;
      position: relative;
      margin: 0 1.5em 0 0;
      font: inherit;
      width: $input-size;
      height: $input-size;
      @include border-color(var(--clr-white));
      border-radius: 1px;
      background-color: transparent;
      @include default-transition(border);
      &:hover,
      &:focus,
      &:checked {
        @include border-color(var(--clr-light-green));
      }

      &::before {
        content: "";
        opacity: 0;
        position: absolute;
        inset: 0;
        background-color: var(--clr-light-green);
        z-index: 1;
        @include default-transition(opacity);
      }

      &::after {
        content: "";
        opacity: 0;
        position: absolute;
        bottom: 0.35em;
        width: 0.65em;
        height: 0.35em;
        border: 0.2em solid var(--clr-dark-green);
        border-top: 0;
        border-right: 0;
        z-index: 10;
        transform: rotate(-50deg);
        @include default-transition(opacity);
      }

      &:checked::before,
      &:checked::after {
        opacity: 1;
      }

      &:disabled {
      }
    }
  }
</style>
