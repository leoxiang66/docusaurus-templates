import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.row}>
          <div  className={styles.column}>
            <img id={styles.lc}
              src="https://nlp-guild.github.io/text2music/static/testlogo1-better.png"
              alt="Text2Music Virtual Figure"
              width="100%"
            ></img>
          </div>

          <div id={styles.rc} className={styles.column}>
            <h1 id={styles.rc_head} className="hero__title">
              {siteConfig.title}
            </h1>
            <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Get Started
              </Link>
            </div>
            <br/>
                <font color = "gray">The project is still under development and new features are coming soon.
                  Therefore, we welcome anyone interested to join!</font>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Text2Music is a virtual composer that creates style-specific music based on user-defined prompts."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
