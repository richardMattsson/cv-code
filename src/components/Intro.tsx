import styles from "../css/intro.module.css";

function Intro() {
  return (
    <section className={styles.container}>
      <p>
        Fullstackutvecklare med erfarenhet av React, TypeScript, databaser och
        moderna utvecklingsverktyg. Genom praktik på Paliscope och studier på
        IT-Högskolan har jag arbetat i agila team, ansvarat för features i Azure
        DevOps och utvecklat lösningar genom hela stacken.
      </p>
      <p className={styles.indent}>
        Min bakgrund som verksamhetsutvecklare och utredare har gett mig en
        stark analytisk förmåga och förståelse för hur teknik kan skapa nytta
        för verksamheter och användare. Jag trivs i samarbete med andra,
        uppskattar kodgranskning och ser kontinuerligt lärande som en naturlig
        del av utvecklarrollen.
      </p>
      <p className={styles.indent}>
        Använder AI-baserade utvecklingsverktyg som ChatGPT, GitHub Copilot och
        Claude för problemlösning, kodgranskning och effektiv utveckling.
      </p>
    </section>
  );
}

export default Intro;
