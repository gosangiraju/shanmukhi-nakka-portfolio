import styles from './components.module.css';

export default function Skills() {
  const skills = [
    {
      category: 'PCB Design Tools',
      items: ['KiCad', 'Eagle', 'Altium Designer (Basic Layout & Schematic Capture)', 'Gerber Verification']
    },
    {
      category: 'Hardware Design & Concepts',
      items: ['2-Layer & 4-Layer Layout', 'Schematic Capture', 'Component Selection (BOM)', 'Datasheet Analysis', 'Ground Plane Optimization', 'Decoupling Strategies', 'Power Integrity', 'EMI/EMC-aware Routing', 'DRC/ERC', 'Thermal Relief']
    },
    {
      category: 'Circuits & Protocols',
      items: ['SPI', 'I2C', 'UART', 'DC-DC Buck/Boost Converters', 'Microcontrollers (ATmega328P)', 'Analog & Digital Circuit Design']
    },
    {
      category: 'Lab & Hardware Testing',
      items: ['Digital Multimeter (DMM)', 'Oscilloscope', 'Board Bring-up', 'Hardware Debugging', 'SMD & Through-Hole Soldering']
    },
    {
      category: 'Simulation & Scripting',
      items: ['MATLAB', 'TCL Scripting', 'C/Embedded Basics', 'Git Version Control', 'Linux Shell']
    }
  ];

  return (
    <section id="skills">
      <h2 className={styles.sectionTitle}>Technical Skills</h2>
      <div>
        {skills.map((skillGroup, idx) => (
          <div key={idx} className={styles.skillCategory}>
            <h3>{skillGroup.category}</h3>
            <div className={styles.skillTags}>
              {skillGroup.items.map((item, i) => (
                <span key={i} className={styles.skillTag}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
