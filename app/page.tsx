import dynamic from "next/dynamic";
import { Hero, Navbar, About, Why, Contact } from "@/components";
import { Fragment } from "react";

export default function Home() {
  const DynamicNavbar = dynamic(() => import("../components/Navbar"), {
    ssr: false,
    loading: () => <p>Loading..</p>,
  });

  const DynamicHero = dynamic(() => import("../components/Hero"), {
    ssr: false,
    loading: () => <p>Loading..</p>,
  });
  return (
    <Fragment>
      <Navbar />
      <Hero />
      {/* <DynamicNavbar />
      <DynamicHero /> */}
      <About />
      <Why />
      <Contact />
    </Fragment>
  );
}
