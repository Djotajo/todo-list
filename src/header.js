export default function header() {
  const header = document.createElement("div");

  header.classList.add("header");
  header.innerHTML = "To do or not to do";

  return header;
}
