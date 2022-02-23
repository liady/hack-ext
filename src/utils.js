export function getFigmaData() {
  const href = location.href;
  const url = new URL(href);

  const fid = url.pathname.split("/")[2];

  const nid = url.searchParams.get("node-id");

  return { fileKey: fid, nodeId: nid };
}

export function getElementByText(parent, text) {
  const element = parent.querySelector(`[innerText="${text}"]`);
  return element;
}
