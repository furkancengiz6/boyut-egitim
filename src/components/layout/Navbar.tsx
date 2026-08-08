"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "../../lib/constants";
import BoyutLogo from "../ui/BoyutLogo";
import InfinityIcon from "../ui/InfinityIcon";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.inner}>
          {/* Official Boyut Logo */}
          <Link href="/" className={styles.logoLink} onClick={() => setMobileOpen(false)}>
            <BoyutLogo width={46} height={30} showText={true} />
          </Link>

          {/* Desktop Links */}
          <nav className={styles.desktopNav}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isMadlen = link.href === "/madlen";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                  {link.label}
                  {isMadlen && <span className={styles.aiTag}>AI</span>}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className={styles.ctaGroup}>
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <InfinityIcon width={20} height={14} />
              WhatsApp Bilgi
            </a>

            {/* Hamburger button for mobile */}
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ""}`}>
        <div className={styles.mobileNav}>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const isMadlen = link.href === "/madlen";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                {isMadlen && <span className={styles.aiTagMobile}>AI</span>}
              </Link>
            );
          })}
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileWhatsapp}
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle size={18} style={{ marginRight: '8px' }} /> WhatsApp&apos;tan Hızlı Ulaşın
          </a>
        </div>
      </div>
    </header>
  );
}
