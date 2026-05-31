import styles from './components.module.css';

export default function Education() {
  const certifications = [
    { title: 'VLSI Physical Design with Synopsys ICC Compiler -- VLSI GURU', link: 'https://drive.google.com/file/d/1SJKz5jwLsMqNro-5B9bLbZaStTfRvW3q/view' },
    { title: 'PCB Prototype Skill Development Program -- AICTE (Eagle Software)', link: 'https://drive.google.com/file/d/1_LPRtFUJ9bf2-wUvh-Gno1xCZISXrQ3r/view' },
    { title: 'Solar PV Cell Internship Certification -- HIEE', link: 'https://drive.google.com/file/d/1uOJmoMrwt_ZL1ZQnbjOL5nL658uOu-Go/view' }
  ];

  return (
    <div>
      <section id="certifications">
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <div className={styles.listContainer}>
          {certifications.map((cert, idx) => (
            <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              {cert.title}
            </a>
          ))}
        </div>
      </section>

      <section id="education">
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.listContainer}>
          <div className={styles.listItem}>
            <h3>Bachelor of Engineering in Electrical and Electronics Engineering</h3>
            <p>QIS College of Engineering and Technology, Andhra Pradesh, India | 2020 -- 2024</p>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-primary)' }}>
              <strong>Coursework:</strong> VLSI Design, Embedded Systems, Power Electronics, PCB Design, Control Systems, Digital Electronics
            </p>
          </div>
          <div className={styles.listItem}>
            <h3>Intermediate Education -- Maths, Physics, Chemistry</h3>
            <p>Sri Chaitanya Junior College | 2018 -- 2020</p>
          </div>
          <div className={styles.listItem}>
            <h3>Secondary School Certificate (SSC)</h3>
            <p>Narayana High School English Medium | 2018</p>
          </div>
        </div>
      </section>
    </div>
  );
}
