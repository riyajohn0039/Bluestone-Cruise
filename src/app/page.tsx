import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import styles from '../styles/Home.module.css';  // import CSS

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon | Cruise Booking</title>
        <meta name="description" content="Cruise Booking - Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoBorder}></div>
          <div className={styles.logoCircle}>
            <div className={styles.logoInner}>
              <Image src={Logo} alt="Cruise Booking Logo" width={350} height={350} />
            </div>
          </div>
        </div>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.subtitle}>
          Our website is under construction. We&apos;ll be here soon. Stay Tuned
        </p>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2025 bluestonecruise. All rights reserved.</p>
      </footer>
    </div>
  );
}
