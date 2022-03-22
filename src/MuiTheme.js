import { createTheme } from "@mui/material/styles";

const googleFonts = {
  audiowide: "Audiowide",
  cabinSketch: "Cabin Sketch",
  marker: "Permanent Marker",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#1976d2",
    },
  },
  text: {
    disabled: "rgba(0 0 0 / 9%)",
  },
  fonts: {
    ...googleFonts,
  },
});

//for quick copy paste
// font-family: 'Audiowide', cursive;
// font-family: 'Cabin Sketch', cursive;
// font-family: 'Permanent Marker', cursive;
