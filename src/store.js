import { writable } from "svelte/store";

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
    {
      label: "Display Data",
      checked: false,
    },
    {
      label: "Display Form",
      checked: true,
    },
    {
      label: "Display List",
      checked: true,
    },
  ],
});
