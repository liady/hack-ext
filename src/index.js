import {
  closeCreationPopup,
  insertPopupToBody,
  openCreationPopup,
} from "./popup.jsx";
import { getFigmaData } from "./utils";

const url = "https://quiet-lowlands-48114.herokuapp.com/api";

function init() {
  insertPopupToBody();
  insertButton();
  setInterval(() => {
    insertToMenu();
  }, 16);
}

function insertToMenu() {
  const element = document.querySelector(
    '[data-testid="dropdown-option-Export frames to PDF…"'
  );
  if (element && !element.innerText.includes("Export to Duda")) {
    element.children[1].innerText = "Export to Duda";
    element.children[1].addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        triggerSiteCreation();
      },
      { capture: true }
    );
    element.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        triggerSiteCreation();
      },
      { capture: true }
    );
  }
}

function insertButton() {
  const ref = document.querySelector("[data-onboarding-key=share]");
  const refParent = ref?.parentElement;
  const refParentParent = refParent?.parentElement;
  const buttonToInsert = createButton();
  if (refParentParent) {
    refParentParent.insertBefore(buttonToInsert, refParent);
  }
  buttonToInsert.addEventListener("click", triggerSiteCreation);
}

async function triggerSiteCreation() {
  const figmaData = getFigmaData();
  openCreationPopup();
  const [response] = await Promise.all([
    fetch(url, {
      method: "POST",
      body: JSON.stringify(figmaData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()),
    new Promise((resolve) => setTimeout(resolve, 5000)),
  ]);
  console.log(response);
  closeCreationPopup();
}

function createButton() {
  const buttonToInsert = document.createElement("button");

  buttonToInsert.classList.add("figmaToDuda");
  buttonToInsert.classList.add("button--primary");
  buttonToInsert.innerText = "Continue In Duda";
  return buttonToInsert;
}

init();
