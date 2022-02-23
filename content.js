function init() {
  const ref = document.querySelector("[data-onboarding-key=share]");
  const refParent = ref?.parentElement;
  const refParentParent = refParent?.parentElement;
  const buttonToInsert = createButton();
  buttonToInsert.addEventListener("click", buttonClick);
  refParentParent.insertBefore(buttonToInsert, refParent);
}

async function buttonClick() {
  const figmaData = getFigmaData();
  const url = "https://quiet-lowlands-48114.herokuapp.com/api";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(figmaData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(response);
}

function getFigmaData() {
  let data = {};
  const href = location.href;
  console.log(href);
  const url = new URL(href);

  const fid = url.pathname.split("/")[2];

  const nid = url.searchParams.get("node-id");

  return { fileKey: fid, nodeId: nid };
}

function createButton() {
  const buttonToInsert = document.createElement("button");

  buttonToInsert.classList.add("figmaToDuda");
  buttonToInsert.classList.add("button--primary");
  buttonToInsert.innerText = "Build With Duda";
  return buttonToInsert;
}

init();
