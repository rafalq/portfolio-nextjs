import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>Rafał — Portfolio</h1>
          <p>
            Fullstack developer tworzący nowoczesne aplikacje webowe.
            Sprawdź moje projekty i&nbsp;skontaktuj się ze mną.
          </p>
          <div className={styles.ctas}>
            <a href="#projekty" className={styles.primary}>
              Zobacz projekty
            </a>
            <a href="#kontakt" className={styles.secondary}>
              Kontakt
            </a>
          </div>
        </section>

        <section className={styles.swatches}>
          <h2>Paleta kolorów</h2>
          <div className={styles.grid}>
            <div className={styles.swatch} style={{ background: 'var(--color-accent)' }}>
              <span>Accent</span>
            </div>
            <div className={styles.swatch} style={{ background: 'var(--color-accent-hover)' }}>
              <span>Accent hover</span>
            </div>
            <div className={styles.swatch} style={{ background: 'var(--color-surface)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)' }}>
              <span>Surface</span>
            </div>
            <div className={styles.swatch} style={{ background: 'var(--color-border)' }}>
              <span>Border</span>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            Text secondary — przykład mniejszego tekstu z palety.
          </p>
        </footer>
      </main>
    </div>
  );
}
