// default app theme and colors
export const defaultTheme = {
  palette: {
    primary: {
      main: "#D9001D"
    },
    secondary: {
      main: "#383838"
    },
    error: {
      main: "#FF0040"
    },
    background: {
      default: "#FFFFFF"
    },
    green: {
      main: "#00CF2E"
    },
    orange: {
      main: "#FFA34F"
    }
  },

  typography: {
    // fontFamily: "Mulish",
    fontFamily: "Roboto",
    h1: {
      fontSize: 54,
      lineHeight: 74 / 34,
      fontWeight: 600
    },
    h2: {
      fontSize: 38,
      lineHeight: 63 / 44,
      fontWeight: 700
    },
    h3: {
      fontSize: 32,
      lineHeight: 48 / 26,
      fontWeight: 600
    },
    h4: {
      fontSize: 28,
      lineHeight: 40 / 24,
      fontWeight: 500
    },
    h5: {
      fontSize: 20,
      lineHeight: 24 / 16,
      fontWeight: 700
    },
    h6: {
      fontSize: 16,
      lineHeight: 24 / 18,
      fontWeight: 600
    },
    p1: {
      fontSize: 16,
      lineHeight: 24 / 15,
      fontWeight: 500
    },
    p2: {
      fontSize: 16,
      lineHeight: 22 / 14,
      fontWeight: 400
    },
    button: {
      fontSize: 16,
      lineHeight: 18 / 13,
      letterSpacing: 0.2,
      fontWeight: 600,
      textTransform: "unset",
      borderRadius: 4,
      padding: "16px 32px 16px 32px"
    },
    c1: {
      fontSize: 13,
      lineHeight: 20 / 13,
      fontWeight: 500
    },
    c2: {
      fontSize: 12,
      lineHeight: 17 / 12,
      fontWeight: 600
    },
    label: {
      fontSize: 11,
      lineHeight: 15 / 11,
      fontWeight: 600
    }
  },
  shadows: Array(25).fill("none"),
  overrides: {}
};
