import React, { useState } from "react";
import { Grid } from "@mui/material";
import { binaryUnitStateObject } from "../helperFunctions";
import { BinaryContainer } from "./binaryInputComponents/BinaryContainer";
import { FlowContainer } from "./flowComponents/FlowContainer";
import { Sum } from "./resultComponents/Sum";

export const Main = () => {
  const [binaryStateObject, setBinaryStateObject] = useState(
    binaryUnitStateObject()
  );

  return (
    <Grid>
      <BinaryContainer
        binaryStateObject={binaryStateObject}
        setBinaryStateObject={setBinaryStateObject}
      />
      <Sum binaryStateObject={binaryStateObject} />
      <FlowContainer binaryStateObject={binaryStateObject} />
    </Grid>
  );
};
