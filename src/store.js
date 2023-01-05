import { writable } from "svelte/store";

//get the source code at https://github.com/pandapog123/Svelte-State-Management/blob/main/src/store.js
export const globalState = writable({
  currentText: "",
  currentSelectedRadioButton: "",
  error: "",
  radioButtons: [
    "First Radio Button",
    "Second Radio Button",
    "Third Radio Button",
    "Fourth Radio Button",
  ],
  checkBoxes: [
    { label: "Display Data", checked: false },
    { label: "Display Form", checked: true },
    { label: "Display List", checked: true },
  ],
});
