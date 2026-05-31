import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        <span className={styles.highlight}>Shanmukhi Nakka</span>
      </h1>
      <h2 className={styles.subtitle}>VLSI Physical Design Engineer</h2>
      
      <p className={styles.contact}>
        <a href="mailto:nakkashanmukhi@gmail.com" className="glass-card">nakkashanmukhi@gmail.com</a>
        <a href="https://www.linkedin.com/in/shanmukhinakka" target="_blank" rel="noopener noreferrer" className="glass-card">LinkedIn</a>
        <a href="tel:+919100675561" className="glass-card">+91 9100675561</a>
      </p>
    </section>
  );
}
