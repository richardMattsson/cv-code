import styles from "../css/header.module.css";

const { container, image, title, subtitle, contact } = styles;

function Header() {
  return (
    <header className={container}>
      <figure style={{ margin: 0 }}>
        <img className={image} src="profilbild.webp" alt="profile image" />
      </figure>
      <section>
        <h1 className={title}>Richard Mattsson</h1>
        <p className={subtitle}>Fullstackutvecklare</p>
      </section>
      <ul className={contact}>
        <li style={{ fontWeight: 600 }}>Kontakt</li>
        <li>
          <a href="tel:+709408498">0709408498</a>
        </li>
        <li>
          <a href="mailto:mattsson.richard@gmail.com">
            mattsson.richard@gmail.com
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
