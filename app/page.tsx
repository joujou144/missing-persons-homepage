import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Why from "./Why";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Why />
      <Contact />
    </Fragment>
  );
}
