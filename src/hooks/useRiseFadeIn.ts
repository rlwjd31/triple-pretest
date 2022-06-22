import { useState, useEffect } from "react";

function useFadeIn() {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTrigger(true);
  }, [trigger]);

  return trigger;
}

export default useFadeIn;
