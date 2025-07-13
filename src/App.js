import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Presentation />
    </ThemeProvider>
  );
}
