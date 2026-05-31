import styles from './components.module.css';

export default function About() {
  return (
    <section id="about">
      <h2 className={styles.sectionTitle}>Professional Summary</h2>
      <p className={styles.aboutText}>
        VLSI Physical Design trainee and Electronics & Electrical Engineering graduate with hands-on experience in end-to-end physical design implementation using industry-standard EDA tools. Proficient in the complete physical design flow — floor planning, placement, CTS, routing, and timing closure — on a real 28nm multi-voltage design. Additionally skilled in PCB design using KiCad and Eagle, MATLAB simulation, and embedded systems. Eager to contribute to a high-performance engineering team and grow within the VLSI or hardware design domain.
      </p>
    </section>
  );
}
