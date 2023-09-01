import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import { Provider } from "react-redux";
export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif", // Montserrat to czcionka typu sans-serif,

    body1: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          fontFamily: "Montserrat, sans-serif",
        }
        *, *::before, *::after {
          box-sizing: inherit;
        }
      `,
    },
  },
});
const toastContainerStyle = {
  zIndex: 9999,
};
const toastStyle = {
  background: "white",
  color: "black",
};

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss={false}
          style={toastContainerStyle}
          toastStyle={toastStyle}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
