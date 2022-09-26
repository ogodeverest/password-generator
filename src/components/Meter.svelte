<script lang="ts">
  import { strength } from "../stores";
  import { levels } from "../utils/findStrength";

  const units: string[] = Array.from(levels.keys());
  $: strengthIndex = units.indexOf($strength);
</script>

<div class="meter">
  <p class="meter__label">Strength</p>
  <div class="meter__indicator">
    <p class="meter__strength">{$strength}</p>
    <div class="meter__units">
      {#each units as unit, index}
        <div
          class={`meter__unit ${
            index <= strengthIndex ? `meter__unit--${$strength}` : ""
          }`}
        />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @import "../scss/mixins";

  $states: "poor", "weak", "medium", "strong";

  @mixin fill-unit($color) {
    border-color: $color;
    background-color: $color;
  }

  .meter {
    @include flex-space-between;
    height: 3em;
    margin-top: 1rem;
    padding: 1.8em;
    font-size: 1rem;
    font-weight: 400;
    background-color: var(--clr-dark);
    text-transform: uppercase;

    &__label {
      color: var(--clr-grey);
    }

    &__indicator {
      display: flex;
      align-items: center;
    }

    &__strength {
      margin-right: 0.3em;
      font-size: 1.1rem;
    }

    &__units {
      @include flex-space-between;
    }

    &__unit {
      width: 8px;
      height: 1.4em;
      margin-left: 6px;
      border: 1.4px solid var(--clr-white);
      background-color: transparent;
    }

    @each $state in $states {
      &__unit--#{$state} {
        @include fill-unit(var(--clr-#{$state}));
      }
    }
  }
</style>
