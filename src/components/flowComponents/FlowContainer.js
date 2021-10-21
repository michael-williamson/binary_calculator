import React from "react";
import { Grid } from "@mui/material";
import { FlowDiagram } from "./FlowDiagram";

export const FlowContainer = (props) => {
  const { binaryStateObject } = props;
  const renderFlowDiagrams = () => {
    const flowDiagramCompArray = [];
    for (let i = 0; i <= 7; i++) {
      flowDiagramCompArray.push(
        <FlowDiagram
          key={i}
          flowDiagram={`flowDiagram${i + 1}`}
          binaryStateObject={binaryStateObject}
        />
      );
    }
    return flowDiagramCompArray;
  };
  return <Grid container>{renderFlowDiagrams()}</Grid>;
};
