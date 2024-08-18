import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/found.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Arka Mukherjee</h3>

        <p>
          Hey, Everyone I am Arka Mukherjee, the founder of B.TECH Khana Pakane Wala.
          <br />
          Our aim is to create the most tasty Food on planet.Also support me to achieve this aim.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
