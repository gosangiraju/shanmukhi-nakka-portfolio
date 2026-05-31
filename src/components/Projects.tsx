import styles from './components.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'VLSI Physical Design -- ORCA_TOP Multi Voltage Block',
      tech: 'ICC2, PrimeTime, 28nm Technology',
      details: [
        'Implemented full physical design on a 435 MHz, 60K standard cell, 40-macro multi-voltage block in 28nm technology.',
        'Covered all stages: floor planning, placement, CTS, routing, and timing closure using Synopsys ICC2 and PrimeTime.'
      ]
    },
    {
      title: 'Automatic Night Lamp PCB Using LDR Sensor',
      tech: 'KiCad',
      details: [
        'Designed a sensor-based automatic night lamp PCB using an LDR and transistor switching circuit to control LED operation based on ambient light.',
        'Created full schematic, PCB layout, component placement, routing, and 3D visualization; performed ERC/DRC checks and generated Gerber files for fabrication.'
      ]
    },
    {
      title: 'Energy Regeneration System in EV with DC-DC Converter Using Supercapacitors',
      tech: 'MATLAB',
      details: [
        'Designed an energy regeneration system for EVs that captures braking energy and stores it in supercapacitors via a DC-DC converter for redistribution.',
        'Simulated and optimized the energy conversion process using MATLAB to improve vehicle efficiency and sustainability.'
      ]
    },
    {
      title: 'Water Trash Collector',
      tech: 'Embedded Systems, Mechanical Design',
      details: [
        'Developed a floating waste removal system for water bodies (marinas, ports) using a 0.5 HP suction pump to reduce pollution and protect marine ecosystems.'
      ]
    }
  ];

  return (
    <section id="projects">
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((proj, idx) => (
          <div key={idx} className={`glass-card ${styles.projectCard}`}>
            <h3>{proj.title}</h3>
            <p className={styles.techStack}>{proj.tech}</p>
            <ul>
              {proj.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
