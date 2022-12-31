<script>
  import DataDisplay from "../components/data-display.svelte";
  import { globalState } from "../store";

  function handleTextFieldClick() {
    if ($globalState.currentText !== "") {
      $globalState.radioButtons = [
        ...$globalState.radioButtons,
        $globalState.currentText,
      ];

      $globalState.currentText = "";

      $globalState.error = "";
    } else {
      $globalState.error = "Text Field Cannot Be Empty";
    }
  }

  function handleErrorClick() {
    $globalState.error = "";
  }
</script>

<section>
  {#each $globalState.checkBoxes as checkBox}
    <div>
      <input
        type="checkbox"
        id={checkBox.label}
        bind:checked={checkBox.checked}
      />
      <label for={checkBox.label}>{checkBox.label}</label>
    </div>
  {/each}
</section>

<hr />

{#if $globalState.checkBoxes[0].checked}
  <section>
    <DataDisplay />
  </section>

  <hr />
{/if}

{#if $globalState.checkBoxes[1].checked}
  <section>
    <form on:submit|preventDefault={handleTextFieldClick}>
      <input bind:value={$globalState.currentText} />

      <button> Create New Field </button>
    </form>
  </section>

  {#if $globalState.error !== ""}
    <section>
      {$globalState.error}
      <button on:click={handleErrorClick}>Close</button>
    </section>
  {/if}

  <hr />
{/if}

{#if $globalState.checkBoxes[2].checked}
  <section>
    {#each $globalState.radioButtons as buttonName, index}
      <div>
        <input
          type="radio"
          name="radio-buttons"
          id={index}
          bind:group={$globalState.currentSelectedRadioButton}
          value={buttonName}
        />
        <label for={index}>
          {buttonName}
        </label>
      </div>
    {/each}
  </section>

  <hr />
{/if}

<style>
  section {
    margin: 1rem;
  }
</style>
