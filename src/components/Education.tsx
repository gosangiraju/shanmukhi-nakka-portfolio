import styles from './components.module.css';

export default function Education() {
  const certifications = [
    { title: 'PCB Design with KiCad – Udemy' },
    { title: 'PCB Prototype Skill Development Program – AICTE (Eagle Software)' },
    { title: 'Physical Design & High-Frequency Layout – VLSI GURU' }
  ];

  return (
    <div>
      <section id="certifications">
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <div className={styles.listContainer}>
          {certifications.map((cert, idx) => (
            <div key={idx} className={styles.certLink}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              {cert.title}
            </div>
          ))}
        </div>
      </section>

      <section id="education">
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.listContainer}>
          <div className={styles.listItem}>
            <h3>Bachelor of Engineering in Electrical and Electronics Engineering</h3>
            <p>QIS College of Engineering and Technology, Andhra Pradesh, India | 2020 – 2024</p>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-primary)' }}>
              <strong>Relevant Coursework:</strong> PCB Design, Power Electronics, Microcontrollers & Embedded Systems, Control Systems, Digital Electronics
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
