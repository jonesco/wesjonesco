import React from 'react';

const styles = {
  page: { margin: 0, minHeight: '100vh', background: '#f5f5f7', color: '#1d1d1f', padding: '64px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif' },
  main: { boxSizing: 'border-box', width: 'min(760px, 100%)', margin: '0 auto', padding: 48, background: '#fff', border: '1px solid #e5e5e7', borderRadius: 18, boxShadow: '0 12px 36px rgba(0,0,0,.06)', lineHeight: 1.55 },
  h1: { margin: '0 0 8px', fontSize: 'clamp(2rem, 6vw, 3.25rem)', letterSpacing: '-.04em' },
  h2: { marginTop: 32, fontSize: '1.2rem' },
  muted: { color: '#6e6e73' },
  footer: { marginTop: 40, paddingTop: 24, borderTop: '1px solid #e5e5e7', color: '#6e6e73' }
};

export default function FlatbedSupport() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <p style={{...styles.muted, fontWeight: 600, marginBottom: 8}}>Flatbed for macOS</p>
        <h1 style={styles.h1}>Support</h1>
        <p>Flatbed is a lightweight personal issue tracker for macOS. If something is not working as expected, email <a href="mailto:wes@jonesco.com">wes@jonesco.com</a>.</p>
        <h2 style={styles.h2}>Back up your issues</h2>
        <p>Choose File &gt; Export Backup to save a JSON copy wherever you like. Choose File &gt; Import Backup to restore one of those files.</p>
        <h2 style={styles.h2}>iCloud sync</h2>
        <p>Flatbed uses your private iCloud account when it is available. Make sure you are signed in to the same Apple Account on each Mac and that iCloud Drive is enabled. Flatbed continues to work locally if iCloud is unavailable.</p>
        <h2 style={styles.h2}>What to include when contacting support</h2>
        <p>Please include your macOS version, what you were trying to do, what happened, and any steps that reliably reproduce the problem. Do not send private issue content unless it is necessary and you are comfortable sharing it.</p>
        <footer style={styles.footer}><a href="/flatbed-privacy">Privacy Policy</a> · © 2026 Jonesco Worldwide, LLC</footer>
      </main>
    </div>
  );
}
