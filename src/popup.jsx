import ReactDOM from "react-dom";
import React from "react";
import CreationPopup from "./popup/CreationPopup.jsx";

export function insertPopupToBody() {
  let popup = document.getElementById("popup");
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "popup";
    document.body.appendChild(popup);
  }
}

export function openCreationPopup() {
  ReactDOM.render(
    <CreationPopup open={true} />,
    document.getElementById("popup")
  );
}

export function closeCreationPopup() {
  ReactDOM.render(
    <CreationPopup open={false} />,
    document.getElementById("popup")
  );
  ReactDOM.unmountComponentAtNode(document.getElementById("popup"));
}
