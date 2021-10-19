import React from "react";
import { Grid, TextField, Switch } from "@mui/material";

export const BinaryInput = (props) => {
  const { inputState, setInputState, name } = props;
  const handleChange = (event) => {
    const checked = event.target.checked;
    setInputState((prev) => {
      return { ...prev, [name]: checked };
    });
  };
  return (
    <Grid item>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={inputState[name] ? "1" : "0"}
      ></TextField>
      <Switch
        checked={inputState[name]}
        onChange={handleChange}
        name={name}
      ></Switch>
    </Grid>
  );
};
