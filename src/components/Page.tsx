import * as React from 'react';
import { Link } from 'gatsby';
import SEO from '@widgets/SEO';
import SamiroyLogo from './sprites/SamiroyLogo';

const styles = {
  page: {
    padding: 16,
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    display: 'block',
    maxWidth: 880,
  } as React.CSSProperties,
  footer: {
    color: 'var(--light-text-color)',
    fontWeight: 500,
    fontSize: 12,
    marginTop: 64,
  } as React.CSSProperties,
  logo: {
    height: 48,
    width: 48,
    marginBottom: 4,
    marginTop: 8,
  } as React.CSSProperties,
};

const Footer = React.memo(({ onTop }: { onTop: () => unknown }) => (
  <div style={styles.footer} className="flex-reverse">
    <div className="col-md-6 center-md-left">
      <SamiroyLogo style={styles.logo} />
      <br />
      &copy; Samiroy LLC. All Rights Reserved.
    </div>
    <div className="col-md-6 center-md-right" style={{ marginTop: 'auto' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>Home</Link> |{' '}
      <Link to="/about" style={{ textDecoration: 'none' }}>About</Link> |{' '}
      <Link to="/endlesstraffic" style={{ textDecoration: 'none' }}>Endless Traffic</Link> |{' '}
      <a href="https://www.poonji.io" style={{ textDecoration: 'none' }}>Poonji</a>
      <br />
      <br />
      <button className="link" type="button" onClick={() => onTop()}>back to top</button>
    </div>
  </div>
));

const Page = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  const topRef = React.useRef<HTMLDivElement>(null);

  return (
    <main style={styles.page}>
      <div id="top" ref={topRef} />
      <SEO title={title} />
      {children}
      <Footer onTop={() => topRef.current?.scrollIntoView({ behavior: 'smooth' })} />
    </main>
  );
};

export default Page;
