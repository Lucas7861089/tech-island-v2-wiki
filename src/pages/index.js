import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function Features() {
  const cardStyle = {
    border: 'none',
    borderRadius: '8px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    height: '100%'
  };

  const buttonStyle = {
    marginTop: '1rem',
    display: 'inline-block'
  };

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div style={cardStyle}>
              <h3>Documentation</h3>
              <p>Comprehensive guides and documentation for Tech Island V2. Learn everything you need to know about the game.</p>
              <Link className="button button--primary" to="/docs/" style={buttonStyle}>
                View Docs
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div style={cardStyle}>
              <h3>Community</h3>
              <p>Join our Discord communities to discuss the game, share ideas, and connect with other players.</p>
              <div style={buttonStyle}>
                <Link className="button button--primary" to="https://discord.gg/YRFXm9qVDN">
                  Wiki Discord
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div style={cardStyle}>
              <h3>Contribute</h3>
              <p>Help improve this wiki by contributing guides, tips, and documentation. Everyone's input is welcome.</p>
              <Link className="button button--primary" to="/docs/how-to-contribute/" style={buttonStyle}>
                How to Contribute
              </Link>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          <div className="col col--12">
            <div style={cardStyle}>
              <h3>Roadmap</h3>
              <p>Track the development and progress of Tech Island V2 Wiki.</p>
              <Link className="button button--primary" to="/docs/roadmap/" style={buttonStyle}>
                View Roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Collaborative wiki for Tech Island V2">
      <HomepageHeader />
      <main>
        <Features />
      </main>
    </Layout>
  );
}
