import { useState, useEffect } from "react";

const useFadeInRise = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTrigger(true);
  }, [trigger]);

  return trigger;
};

export default useFadeInRise;
