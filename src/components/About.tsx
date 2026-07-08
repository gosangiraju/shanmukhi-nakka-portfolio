import styles from './components.module.css';

export default function About() {
  return (
    <section id="about">
      <h2 className={styles.sectionTitle}>Professional Summary</h2>
      <p className={styles.aboutText}>
        Electronics & Electrical Engineering graduate specializing in Hardware & PCB Design, schematic capture, and multi-layer board layout using KiCad, Eagle, and Altium Designer. Proven experience developing 2-layer and 4-layer PCBs, power supply topologies (DC-DC buck converters), and microcontroller-based embedded hardware. Skilled in EMI/EMC-aware routing, ground plane optimization, component selection (BOM), and hands-on lab testing using oscilloscopes, multimeters, and soldering equipment. Eager to contribute to high-reliability hardware development as a fresher Hardware / PCB Design Engineer.
      </p>
    </section>
  );
}
