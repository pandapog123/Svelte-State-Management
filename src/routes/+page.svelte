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
      $globalState.error = "Text field Cannot Be Empty.";
    }
  }

  function handleErrorClick() {
    $globalState.error = "";
  }
</script>

<section>
  {#each $globalState.checkBoxes as checkbox}
    <div>
      <input
        type="checkbox"
        id={checkbox.label}
        bind:checked={checkbox.checked}
      />
      <label for={checkbox.label}>{checkbox.label}</label>
    </div>
  {/each}
</section>

<hr />

{#if $globalState.checkBoxes[0].checked}
  <section><DataDisplay /></section>

  <hr />
{/if}

{#if $globalState.checkBoxes[1].checked}
  <section>
    <form on:submit|preventDefault={handleTextFieldClick}>
      <input bind:value={$globalState.currentText} />

      <button type="submit">Create New Field</button>
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
        /><label for={index}>{buttonName}</label>
      </div>
    {/each}
  </section>

  <hr />
{/if}
