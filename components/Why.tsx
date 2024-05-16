import React from "react";
import Pill from "./Pill";

const Why = () => {
  return (
    <section className="max-w-[1480px] mx-auto border-cream border-2 py-4 lg:py-8">
      <div className="p-10 bg-cream">
        <Pill
          label="The Reason"
          variant="pill-dark"
          className="padding-container self-start"
        />
      </div>

      <div className="flex-1 border-2 border-purple-300">missing people</div>
    </section>
  );
};

export default Why;
