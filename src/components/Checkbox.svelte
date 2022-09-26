<script lang="ts">
  export let name: string = "";
  export let id: string = "";
  export let label: string = "";
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

  $input-size: 1.17em;

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
      width: $input-size;
      height: $input-size;
      position: relative;
      margin: 0 1.5em 0 0;
      font: inherit;
      @include border-color(var(--clr-white));
      border-radius: 1px;
      background-color: transparent;
      @include default-transition(border);
      cursor: pointer;
      &:hover,
      &:focus,
      &:checked {
        @include border-color(var(--clr-light-green));
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        opacity: 0;
        background-color: var(--clr-light-green);
        z-index: 1;
        @include default-transition(opacity);
      }

      &::after {
        content: "";
        width: 0.65em;
        height: 0.35em;
        position: absolute;
        bottom: 0.35em;
        border: 0.2em solid var(--clr-dark-green);
        border-top: 0;
        border-right: 0;
        opacity: 0;
        z-index: 10;
        transform: rotate(-50deg);
        @include default-transition(opacity);
      }

      &:checked::before,
      &:checked::after {
        opacity: 1;
      }
    }
  }
</style>
