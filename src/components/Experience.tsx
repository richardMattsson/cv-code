import content from "../data/content.json";
import styles from "../css/experience.module.css";

function Experience() {
  return (
    <article>
      {Object.values(content.experience).map((exp) => (
        <section className={styles.expContainer}>
          <span className={styles.titleContainer}>
            <h2>{exp.title}</h2>
            <a className={styles.link} href={exp.link} target="_blank">
              @{exp.location}
            </a>
            <img
              className={styles.icon}
              src={exp.img}
              alt={`${exp.location} icon`}
            />
          </span>
          <p className={styles.subtitle}>{exp.subtitle}</p>
          <ul className={styles.expInfo}>
            {exp["list-items"].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}

export default Experience;
