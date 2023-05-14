import { SyntheticEvent } from "react";
import { useState } from "react";

const useTab = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return [tab, handleTabChange] as const;
};

export default useTab;
