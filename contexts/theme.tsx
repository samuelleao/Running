import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";

const newTheme = extendTheme({
  fonts: {
    heading: "Inter, serif",
  },
  colors: {
    brand: {
      1: "#C32361",
      2: "#E62971",
      3: "#8A1944",
      4: "#460D23",
    },

    grey: {
      1: "#030303",
      2: "#0E0E0E",
      3: "#1A1A1C",
      4: "#2B2B2E",
      5: "#818181",
      6: "#F8F9FA",
    },

    google: {
      1: "#3F96D4",
      2: "#49ADF5",
    },
    feedback: {
      sucess: "#42d388",
      error: "#d34242"
    }
  },
  radii: {
    sm: "0.5rem",
  },
  components: {
    Heading: {
      variants: {
        h1: { fontSize: ["3xl", "3xl", "3xl", "5xl"], fontWeight: "bold" },
        h2: { fontSize: "4xl", fontWeight: "bold" },
        h3: { fontSize: "3xl", fontWeight: "bold" },
      },
    },
    Text: {
      variants: {
        text_1: { fontSize: "lg", fontWeight: "regular" },
      },
    },
  },
});

function GlobalStyleProvider({ children }) {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>;
}

export default GlobalStyleProvider;
