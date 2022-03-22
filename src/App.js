import { Box } from "@mui/system";
import { Main } from "./components/Main";
import { Header } from "./components/headerComponents/Header";

function App() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 3 },
        px: { md: 5 },
        width: { xs: "100%", md: "60%" },
        my: { md: 0 },
        mx: { md: "auto" },
        background: "black",
      }}
    >
      <Header />
      <Main />
    </Box>
  );
}

export default App;
