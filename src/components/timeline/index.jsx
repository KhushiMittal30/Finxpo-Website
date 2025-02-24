import React from "react";
import Timeline from "./Timeline";
import { day1Data, day2Data, day3Data } from "./DayData";

const Index = () => {
  return (
    <>
      <Timeline {...day1Data} />
      <Timeline {...day2Data} />
      {/* <Timeline {...day3Data} /> */}
    </>
  );
};

export default Index;
