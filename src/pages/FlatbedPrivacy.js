import React from 'react';

const styles = {
  page: { margin: 0, minHeight: '100vh', background: '#f5f5f7', color: '#1d1d1f', padding: '64px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif' },
  main: { boxSizing: 'border-box', width: 'min(760px, 100%)', margin: '0 auto', padding: 48, background: '#fff', border: '1px solid #e5e5e7', borderRadius: 18, boxShadow: '0 12px 36px rgba(0,0,0,.06)', lineHeight: 1.55 },
  h1: { margin: '0 0 8px', fontSize: 'clamp(2rem, 6vw, 3.25rem)', letterSpacing: '-.04em' },
  h2: { marginTop: 32, fontSize: '1.2rem' },
  muted: { color: '#6e6e73' },
  footer: { marginTop: 40, paddingTop: 24, borderTop: '1px solid #e5e5e7', color: '#6e6e73' }
};

export default function FlatbedPrivacy() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <p style={{...styles.muted, fontWeight: 600, marginBottom: 8}}>Flatbed for macOS</p>
        <h1 style={styles.h1}>Privacy Policy</h1>
        <p style={styles.muted}>Effective August 11, 2026</p>
        <p>Flatbed is a personal issue tracker designed to keep your work private. Flatbed does not collect, sell, rent, share, or use your data for advertising, analytics, or tracking.</p>
        <h2 style={styles.h2}>Information you create</h2>
        <p>Issue titles, notes, checklists, links, statuses, and timestamps are stored on your Mac. When iCloud is available, this content may sync through your private iCloud database so it remains available across your Macs. Jonesco Worldwide, LLC does not receive or have access to the content in your private iCloud database.</p>
        <h2 style={styles.h2}>Backups</h2>
        <p>Flatbed can export and import JSON backups. Backups are written only to a location you choose. They remain there until you move or delete them.</p>
        <h2 style={styles.h2}>Search and preferences</h2>
        <p>Searches happen on your device. Flatbed does not transmit search terms. Basic app preferences, such as window layout, remain on your device.</p>
        <h2 style={styles.h2}>External links</h2>
        <p>Links you save are identified locally and open in your default web browser. Flatbed does not fetch those pages. Once a destination website opens, its own privacy policy applies.</p>
        <h2 style={styles.h2}>Deletion and retention</h2>
        <p>Deleting an issue removes it from Flatbed and, when iCloud sync is active, syncs that deletion across your devices. Uninstalling Flatbed may not delete data already stored in your private iCloud account. Exported backup files remain until you delete them.</p>
        <h2 style={styles.h2}>Children, advertising, and tracking</h2>
        <p>Flatbed has no advertising, third-party analytics, behavioral tracking, user accounts, or developer-operated server. The app is not directed to children and does not knowingly collect personal information from anyone.</p>
        <h2 style={styles.h2}>Changes to this policy</h2>
        <p>If Flatbed's privacy practices change, this page will be updated before those changes take effect.</p>
        <h2 style={styles.h2}>Contact</h2>
        <p>Questions about privacy can be sent to <a href="mailto:wes@jonesco.com">wes@jonesco.com</a>.</p>
        <footer style={styles.footer}><a href="/flatbed-support">Flatbed Support</a> · © 2026 Jonesco Worldwide, LLC</footer>
      </main>
    </div>
  );
}
