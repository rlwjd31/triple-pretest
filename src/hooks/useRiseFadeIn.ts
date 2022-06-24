import { useState, useEffect } from "react";

const useFadeIn = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTrigger(true);
  }, [trigger]);

  return trigger;
};

export default useFadeIn;
