import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Unreal visions. Real results.",
            1000,
            "World-builder. Visual thinker.",
            1000,
            "Lighting. Modeling. Level design.",
            1000,
            "From Blender to Unreal — I bring ideas to life.",
            1000,
            "Design. Develop. Play.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/me1.png" alt="" />
    </motion.div>
  );
};

export default Speech;
