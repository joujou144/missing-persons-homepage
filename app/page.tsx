import dynamic from "next/dynamic";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Why from "./Why";
import { Fragment } from "react";

export default function Home() {
  const DynamicNavbar = dynamic(() => import("../components/Navbar"), {
    ssr: false,
    loading: () => <p>Loading..</p>,
  });
  return (
    <Fragment>
      <DynamicNavbar />
      <Hero />
      <About />
      <Why />
      <Contact />
    </Fragment>
  );
}
