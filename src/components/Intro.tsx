import styles from "../css/intro.module.css";

function Intro() {
  return (
    <section className={styles.container}>
      <p>
        Junior utvecklare med <strong>grund i JavaScript</strong>, bygg på
        hobbyprojekt, formell utbildning och nio månaders{" "}
        <strong>lärande i arbete</strong>.
      </p>
      <p className={styles.indent}>
        Jag <strong>välkomnar</strong> kodgranskning och feedback - det är så
        jag <strong>växer</strong> snabbast. På sikt vill jag{" "}
        <strong>fördjupa</strong> mig i ett specialistområde för att en dag
        kunna <strong>föra kunskapen vidare</strong> till andra. Du får en{" "}
        <strong>utvecklare</strong> som är hungrig på utmaningar, enkel att
        samarbeta med och som alltid har slutanvändarens{" "}
        <strong>upplevelse</strong> i fokus.
      </p>
    </section>
  );
}

export default Intro;
