import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("./img/easy-to-use.svg").default,
    description: (
      <>
        Dark Elixir is designed to simplify the installation and writing process
        to promote developer productivity
      </>
    ),
  },
  {
    title: "Inspired from Elixir",
    Svg: require("./img/2svg.svg").default,
    description: (
      <>
        The Elixir programming language is widely regarded for its simplified
        syntax. Dark Elixir includes this conciese convention along with various
        other benefits
      </>
    ),
  },
  {
    title: "Runs on JVM",
    Svg: require("./img/3svg.svg").default,
    description: (
      <>
        Dark Elixir currently runs on JRE as its intepreter is developed in Java
        to make it more versatile.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
