import styles from './components.module.css';

export default function Experience() {
  const experiences = [
    {
      company: 'VLSI GURU Institute',
      location: 'Hyderabad, India',
      role: 'Physical Design Engineer Trainee',
      date: 'Aug 2024 -- Apr 2025',
      responsibilities: [
        'Executed the complete physical design flow on the ORCA_TOP Multi Voltage Block — a 28nm design running at 435 MHz with 60K standard cells and 40 macros.',
        'Performed floor planning, power planning, placement, clock tree synthesis (CTS), routing, and timing closure using Synopsys ICC2.',
        'Carried out static timing analysis and timing closure using PrimeTime, meeting design frequency constraints.',
        'Gained practical exposure to multi-voltage domain handling, constraint management, and physical verification in a 28nm technology node.'
      ]
    },
    {
      company: 'APTRANSCO 220/132/33 KV Substation',
      location: '',
      role: 'Engineering Intern',
      date: 'Jul 2023 -- Aug 2023',
      responsibilities: [
        'Worked alongside technicians to manage high-voltage power transfer controls, gaining hands-on understanding of power distribution methods and substation operations.',
        'Developed familiarity with industry safety standards and protection systems in a live high-voltage environment.'
      ]
    },
    {
      company: 'HIEE -- Solar PV Cell',
      location: '',
      role: 'Engineering Intern',
      date: 'Sep 2022 -- Nov 2022',
      responsibilities: [
        'Contributed to the design, installation, and maintenance of solar photovoltaic (PV) systems, gaining hands-on experience in renewable energy technology.',
        'Worked on improving system efficiency and sustainability of solar power setups.'
      ]
    },
    {
      company: 'AICTE -- PCB Prototype Skill Development Program',
      location: '',
      role: 'Trainee (Eagle Software)',
      date: 'Oct 2022',
      responsibilities: [
        'Completed structured training in schematic design, PCB layout, routing, and design verification using Eagle software.',
        'Gained hands-on exposure to 2D/3D board visualization, Gerber file generation, and observation of fabricated physical PCBs.'
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
