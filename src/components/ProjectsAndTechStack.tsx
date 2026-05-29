import content from "../data/content.json";
import styles from "../css/project-and-techstack.module.css";
import {
  SiD3,
  SiDocker,
  SiElectron,
  SiExpress,
  SiGit,
  SiMongodb,
  SiMui,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTypescript,
  SiVisx,
} from "react-icons/si";

const techStack = [
  { Typescript: <SiTypescript color="#0000FF" className={styles.icon} /> },
  { React: <SiReact color="#179ce9" className={styles.icon} /> },
  { Express: <SiExpress color="#020303" className={styles.icon} /> },
  { PostgreSQL: <SiPostgresql color="#179ce9" className={styles.icon} /> },
  { MongoDb: <SiMongodb color="#247a0f" className={styles.icon} /> },
  { Git: <SiGit color="#df7615" className={styles.icon} /> },
  { "Redux Toolkit": <SiRedux color="#7619ce" className={styles.icon} /> },
  { "Material UI": <SiMui color="#2558c5" className={styles.icon} /> },
  { D3: <SiD3 color="#df7615" className={styles.icon} /> },
  { Visx: <SiVisx color="#f03629" className={styles.icon} /> },
  { Electron: <SiElectron color="#325e86" className={styles.icon} /> },
  { Docker: <SiDocker color="#4c61dd" className={styles.icon} /> },
];

function ProjectsAndTechStack() {
  return (
    <aside>
      <Projects />
      <TechStack />
      <section className={styles.printBtnSection}>
        <button onClick={() => window.print()} className={styles.printBtn}>
          Skriv ut / PDF
        </button>
      </section>
    </aside>
  );
}
function Projects() {
  return (
    <section className={styles.container}>
      <h2>Hobbyprojekt</h2>
      <p className={styles.subtitle}>
        Nyfiken på min kod? Här är några projekt jag har byggt.
      </p>
      <ul className={styles.projectList}>
        {Object.values(content.projects).map((project) => (
          <li className={styles.project}>
            <img className={styles.projectImg} src={project.img} alt="" />
            <a href={project.link} target="_blank">
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TechStack() {
  return (
    <section>
      <h2>Min stack</h2>
      <ul className={styles.projectList}>
        {techStack.map((item) => (
          <li className={styles.project}>
            {Object.values(item)}
            {Object.keys(item)}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default ProjectsAndTechStack;
