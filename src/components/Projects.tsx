import styles from './components.module.css';

export default function Projects() {
  const projects = [
    {
      title: '2.4 GHz ESP32-S3 Wireless IoT Node & RF Layout',
      tech: 'Altium Designer, 4-Layer PCB',
      details: [
        'Designed a custom Wi-Fi/Bluetooth (BLE) development board utilizing the bare ESP32-S3 SoC (QFN-56 package), eliminating reliance on pre-certified RF modules.',
        'Calculated and routed a strictly controlled 50Ω Coplanar Waveguide with Ground (CPWG) RF feedline customized for the manufacturer\'s specific PCB layer stackup.',
        'Integrated an 0402 Pi-matching network for VNA impedance tuning and routed a 40MHz crystal oscillator utilizing analog ground guard-rings.',
        'Executed advanced high-frequency layout techniques, including 1/10th wavelength via-stitching (Faraday cage), continuous ground planes, and strict antenna keep-out zones.',
        'Designed a CP2102N USB-to-UART bridge featuring a dual-transistor auto-reset circuit, utilizing DFM/DFA best practices for fine-pitch QFN assembly.'
      ]
    },
    {
      title: 'STM32 Industrial CAN & Telemetry Gateway',
      tech: 'KiCad, 4-Layer PCB',
      details: [
        'Designed a 4-layer industrial communication gateway centered on the 32-bit STM32F4 ARM Cortex-M4 microcontroller for high-speed data acquisition.',
        'Engineered precise differential signal routing for 90Ω USB 2.0 (Full-Speed), 120Ω CAN Bus, and RS485 interfaces, ensuring strict trace length-matching.',
        'Designed a wide-input (9V–24V to 3.3V) DC-DC buck converter, optimizing the layout for thermal dissipation and localized EMI switching loops.',
        'Implemented industrial-grade hardware protection, including TVS diode ESD arrays on communication lines and continuous ground reference planes.',
        'Configured a custom 4-layer stackup (Signal-GND-Power-Signal) and generated production-ready Gerber X2, Drill, and PNP (Pick & Place) files.'
      ]
    },
    {
      title: 'Automotive-Grade 9V–15V to 3.3V/500mA Buck Converter',
      tech: 'KiCad, Power Supply Design',
      details: [
        'Designed a 2-layer SMPS PCB converting 9V–15V DC input to a regulated 3.3V/500mA output with >85% estimated power efficiency.',
        'Executed power component calculations, inductor/switch selection, and thermal relief layout to optimize thermal performance.',
        'Implemented EMI-aware routing practices, localized switching loops, continuous ground planes, and rigorous DRC/ERC verification.'
      ]
    },
    {
      title: 'Dual Output Breadboard Power Supply PCB',
      tech: 'KiCad, Power Electronics',
      details: [
        'Designed a mini-breadboard compatible power supply featuring dual output linear regulation (5V and 3.3V) powered via a DC barrel jack.',
        'Performed footprint creation, copper pour assignments, silkscreen optimization, and generated production-ready Gerber and drill files.'
      ]
    },
    {
      title: 'Automatic Night Lamp PCB Using LDR Sensor',
      tech: 'KiCad, Sensor Interfacing',
      details: [
        'Designed a sensor-driven ambient lighting controller utilizing LDR sensor interfacing and transistor switching circuits.',
        'Executed complete schematic capture, component placement, ERC/DRC verification, and 3D step model generation.'
      ]
    }
  ];

  return (
    <section id="projects">
      <h2 className={styles.sectionTitle}>Hardware & PCB Design Projects</h2>
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
