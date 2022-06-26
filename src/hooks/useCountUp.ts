import { useState, useEffect } from "react";

import { easeOutCubic } from "../utils/easingFunctions";
import UseCountUpProps from "../interfaces/useCountUpProps";

const useCountUp: UseCountUpProps = (duration, endCount) => {
  const [count, setCount1] = useState(0);
  const stepPeriod = 1000 / 60;
  const totalSteps = Math.round(duration / stepPeriod);

  useEffect(() => {
    let step = 0;

    const counter = setInterval(() => {
      if (step === totalSteps) {
        clearInterval(counter);
      }

      step += 1;
      const progressRate = easeOutCubic(step / totalSteps);
      // console.log(`preogressionRate : ${progressRate}`);
      setCount1(Math.floor(endCount * progressRate));
    }, stepPeriod);
  }, []);

  return count;
};

export default useCountUp;
