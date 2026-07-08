import styles from './components.module.css';

export default function Experience() {
  const experiences = [
    {
      company: 'VLSI GURU Institute',
      location: 'Bengaluru, India',
      role: 'Engineering Trainee – High-Frequency Layout & Constraints',
      date: 'Aug 2024 – Apr 2025',
      responsibilities: [
        'Executed floor planning, power mesh distribution, placement, and clock tree routing on a 435 MHz, 28nm digital block.',
        'Analyzed timing constraints, signal integrity issues, and parasitic delays using Synopsys ICC2 and PrimeTime.',
        'Developed custom TCL scripts to automate design constraint checks and layout verification workflows.'
      ]
    },
    {
      company: 'AICTE – PCB Prototype Skill Development Program',
      location: '',
      role: 'Trainee (Eagle CAD Software)',
      date: 'Oct 2022',
      responsibilities: [
        'Completed structured training in schematic design, component library setup, PCB layout routing, and ERC/DRC verification.',
        'Generated Gerber files and inspected physical fabricated PCBs to understand manufacturing and assembly considerations.'
      ]
    },
    {
      company: 'APTRANSCO 220/132/33 KV Substation',
      location: '',
      role: 'Engineering Intern',
      date: 'Jul 2023 – Aug 2023',
      responsibilities: [
        'Observed high-voltage power distribution controls, protection relays, and transformer operations while reviewing electrical schematics.'
      ]
    },
    {
      company: 'HIEE – Solar PV Cell',
      location: '',
      role: 'Engineering Intern',
      date: 'Sep 2022 – Nov 2022',
      responsibilities: [
        'Gained practical experience in solar photovoltaic system layouts, electrical connections, and power efficiency monitoring.'
      ]
    }
  ];

  return (
    <section id="experience">
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <div key={idx} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>{exp.role}</h3>
              <h4>{exp.company}{exp.location && ` - ${exp.location}`}</h4>
              <span className={styles.date}>{exp.date}</span>
              <ul>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
