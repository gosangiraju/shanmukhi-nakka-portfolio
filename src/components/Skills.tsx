import styles from './components.module.css';

export default function Skills() {
  const skills = [
    {
      category: 'VLSI Physical Design',
      items: ['Floor Planning', 'Placement', 'CTS', 'Routing', 'Timing Closure', 'Multi-Voltage Design']
    },
    {
      category: 'EDA Tools',
      items: ['Synopsys ICC2 (Implementation)', 'PrimeTime (Timing Analysis)']
    },
    {
      category: 'PCB Design',
      items: ['KiCad', 'Eagle (Schematic, Layout, Routing, DRC/ERC, Gerber Generation, 3D Visualization)']
    },
    {
      category: 'Simulation & Scripting',
      items: ['MATLAB', 'TCL (basic EDA automation)']
    },
    {
      category: 'Operating Systems & Tools',
      items: ['Linux (commands, file handling, shell)', '3D Printing']
    },
    {
      category: 'Productivity',
      items: ['Microsoft Excel & Word', 'Presentation & Report Writing']
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
