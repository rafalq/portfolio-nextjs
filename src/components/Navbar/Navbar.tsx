'use client';

import { useState } from 'react';
import styles from './Navbar.module.scss';

const navLinks = [
  { label: 'Start', href: '#' },
  { label: 'O mnie', href: '#o-mnie' },
  { label: 'Umiejętności', href: '#umiejetnosci' },
  { label: 'Projekty', href: '#projekty' },
  { label: 'Github', href: 'https://github.com', external: true },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          rafalq
        </a>

        <ul className={styles.links}>
          {navLinks.map(({ label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                className={styles.link}
                {...(external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>

      <ul
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
      >
        {navLinks.map(({ label, href, external }) => (
          <li key={label}>
            <a
              href={href}
              className={styles.mobileLink}
              onClick={closeMenu}
              {...(external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
