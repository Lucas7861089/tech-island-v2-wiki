import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocausaurusContext();
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
  return (
    <section className={styles.features}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <img src="/img/logo.svg" alt="Tech Island V2 Wiki" style={{width: '150px', height: 'auto'}} />
        </div>
        <div className="row">
          <div className="col col--4" style={{marginBottom: '2rem'}}>
            <h3>Documentation</h3>
            <p>Comprehensive guides and documentation for Tech Island V2. Learn everything you need to know about the game.</p>
            <Link to="/docs/">View Docs</Link>
          </div>
          <div className="col col--4" style={{marginBottom: '2rem'}}>
            <h3>Community</h3>
            <p>Join our Discord communities to discuss the game, share ideas, and connect with other players.</p>
            <Link to="https://discord.gg/YRFXm9qVDN">Wiki Discord</Link> | <Link to="https://discord.gg/JJWd6NUMhB">Official Server</Link>
          </div>
          <div className="col col--4" style={{marginBottom: '2rem'}}>
            <h3>Contribute</h3>
            <p>Help improve this wiki by contributing guides, tips, and documentation. Everyone's input is welcome.</p>
            <Link to="/docs/how-to-contribute/">How to Contribute</Link>
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
