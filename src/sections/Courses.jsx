import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Courses = () => {
  // Define default text for when there are no examples passed
  const defaultExamples = [
    "Need help focusing on a task?",
    "Want to collaborate with others while staying focused?",
    "How do I set study goals in my focus room?",
    "What happens if I get distracted during a focus session?"
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-neutral-100 px-8 py-24 text-neutral-800 min-h-screen">
      <BlockInTextCard
        tag="/ Support"
        text={
          <>
            <strong>Got questions?</strong> We are here to help you stay focused and productive. Reach out for assistance with setting up focus sessions or using collaboration tools!
          </>
        }
        examples={defaultExamples}
      />
    </div>
  );
};

const BlockInTextCard = ({ tag, text, examples }) => {
  return (
    <div className="w-full max-w-lg space-y-6 bg-white p-6 rounded-lg shadow-lg">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
        <hr className="border-neutral-700" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed">{text}</p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-neutral-300" />
      </div>
      <button className="w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100">
        Contact Support
      </button>
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    // Handle automatic switching of examples with a default fallback
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [examples]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};

export default Courses;
