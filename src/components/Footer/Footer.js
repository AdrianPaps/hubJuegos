import "./Footer.css";

const template = () => `<h3><span> With 💘 by </span> Adrian</h3>`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
