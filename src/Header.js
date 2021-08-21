export default function Header({ target, text, icon }) {
  const header = document.createElement('div');
  header.setAttribute('class', 'header');

  target.appendChild(header);

  this.render = () => {
    header.innerHTML = `
      ${icon}
      ${text}
    `;
  };

  this.render();
}
