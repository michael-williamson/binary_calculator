import React, { useState } from "react";
import { Grid } from "@mui/material";
import { binaryUnitStateObject } from "../helperFunctions";
import { BinaryContainer } from "./binaryInputComponents/BinaryContainer";
import { FlowContainer } from "./flowComponents/FlowContainer";

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
      <FlowContainer binaryStateObject={binaryStateObject} />
    </Grid>
  );
};
