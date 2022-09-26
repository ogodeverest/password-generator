<script lang="ts">
  export let name: string = "";
  export let id: string = "";
  export let label: string = "";
  export let min: number = 0;
  export let max: number = 100;
  export let value: number = min;
  export let disabled: boolean = false;

  let containerWidth: number;
  const thumbSize: number = 22.5;
  /* Width of the value range (upper fill) will go up till the width of container minus
    the thumb size */
  /* Max and min values will be mapped to 0 - max - min
   for correct calculations of value range width */
  $: width = ((containerWidth - thumbSize + 2) * (value - min)) / (max - min);
</script>

<div class="range" class:disabled>
  <label for={id} class="range__label">
    {label} <span class="range__indicator">{value}</span>
  </label>
  <div
    bind:clientWidth={containerWidth}
    class="range__container"
    style="--width:{width}px"
  >
    <input
      type="range"
      {...{ name, id }}
      bind:value
      {min}
      {max}
      {disabled}
      class="range__input"
      style="--thumb-size:{thumbSize}px"
    />
  </div>
</div>

<style lang="scss">
  @import "../scss/mixins";

  $border-radius-track: 10px;

  @mixin track-height {
    height: 7px;
  }

  @mixin absolute-positioned {
    position: absolute;
    top: 0;
    left: 0;
  }

  @mixin track-styles {
    -webkit-appearance: none;
    @include track-height;
    background-color: transparent;
  }

  @mixin thumb-styles {
    -webkit-appearance: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    margin-top: -8px;
    border-radius: 100%;
    background-color: var(--clr-light-grey);
    border: none;
    cursor: pointer;
  }

  @mixin active-thumb-styles {
    border: 2px solid var(--clr-light-green);
    background-color: var(--clr-dark);
  }

  @mixin range-styles {
    &::-webkit-slider-runnable-track {
      @include track-styles;
    }

    &::-webkit-slider-thumb {
      @include thumb-styles;
    }

    &:active::-webkit-slider-thumb {
      @include active-thumb-styles;
    }

    &::-moz-range-thumb {
      @include thumb-styles;
    }

    &:active::-moz-range-thumb {
      @include active-thumb-styles;
    }
  }

  .range {
    display: flex;
    flex-flow: column wrap;
    height: 6em;
    row-gap: 1.5em;
    &__label {
      @include flex-space-between;
    }
    &__indicator {
      font-size: 1.5rem;
      color: var(--clr-light-green);
    }

    &__container {
      position: relative;
      width: 100%;
      &::before {
        content: "";
        @include absolute-positioned;
        width: 100%;
        @include track-height;
        background-color: var(--clr-dark);
        cursor: pointer;
      }

      &::after {
        content: "";
        @include absolute-positioned;
        width: var(--width);
        @include track-height;
        background-color: var(--clr-light-green);
      }
    }

    &__input {
      -webkit-appearance: none;
      @include absolute-positioned;
      width: 100%;
      @include track-height;
      margin: 0;
      background-color: transparent;
      z-index: 100;
      cursor: pointer;
      @include range-styles;
    }
  }
</style>
