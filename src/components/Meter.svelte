<script lang="ts">
</script>

<div class="meter">
  <p class="meter__label">Strength</p>
  <div class="meter__indicator">
    <p class="meter__strength">Medium</p>
    <div class="meter__units">
      {#each new Array(4) as _, index}
        <div class={`meter__unit meter__unit--${index}`} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .meter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--clr-dark);
    height: 3.5em;
    padding: 2em;
    //TODO : SMALL SCREEN padding:1em;
    text-transform: uppercase;
    font-size: 1.1rem;

    &__label {
      color: var(--clr-muted);
    }

    &__indicator {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 0 0 31%;
    }

    &__strength {
      font-size: 1.2rem;
    }

    &__units {
      display: flex;
      justify-content: space-between;
    }
    &__unit {
      width: 8px;
      height: 1.5em;
      margin-left: 6px;
      border: 2px solid var(--clr-yellow);
      background-color: var(--clr-yellow);
    }
  }
</style>
