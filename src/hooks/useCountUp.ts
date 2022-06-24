import { useState, useEffect } from "react";

import easeOutCubic from "../utils/easeOutCubic";
import UseCountUpProps from "../interfaces/useCountUpProps";

const useCountUp: UseCountUpProps = (duration, endCount) => {
  const [count, setCount1] = useState(0);
  const stepPeriod = 1000 / 60;

  useEffect(() => {
    let step = 0;
    const numOfSteps = Math.round(duration / stepPeriod);

    const counter = setInterval(() => {
      if (step === numOfSteps) {
        clearInterval(counter);
      }

      step += 1;
      const progressRate = easeOutCubic(step / numOfSteps);
      setCount1(Math.floor(endCount * progressRate));
    }, stepPeriod);
  }, []);

  return count;
};

export default useCountUp;

// export default function useCountUp() {
//   console.log("something!!");
// }
