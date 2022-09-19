<script lang="ts">
</script>

<div class="meter">
  <p class="meter__label">Strength</p>
  <div class="meter__indicator">
    <p class="meter__strength">Medium</p>
    <div class="meter__units">
      {#each new Array(4) as _, index}
        <div
          class={`meter__unit meter__unit--${index} meter__unit--${
            index - 3 !== 0 ? "active" : ""
          }`}
        />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @import "../scss/mixins";

  .meter {
    @include flex-space-between;
    background-color: var(--clr-dark);
    height: 3em;
    font-size: 1rem;
    font-weight: 400;
    padding: 1.8em;
    text-transform: uppercase;

    &__label {
      color: var(--clr-grey);
    }

    &__indicator {
      display: flex;
      align-items: center;
    }

    &__strength {
      font-size: 1.1rem;
      margin-right: 0.3em;
    }

    &__units {
      @include flex-space-between;
    }

    &__unit {
      width: 9px;
      height: 1.5em;
      margin-left: 6px;
      border: 1.8px solid var(--clr-white);
      background-color: transparent;
    }

    &__unit--active {
      border-color: var(--clr-yellow);
      background-color: var(--clr-yellow);
    }
  }
</style>
