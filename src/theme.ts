export const theme = {
  colors: {
    white: "#EEF0F2",
    lightGray: "#A1A1A1",
    gray: "#3A3A3A",
    black: "#131313",
    purple: "#523767",
    grayGradient: "linear-gradient(180deg, rgba(43, 43, 43, 0.46) 0%, rgba(32, 32, 32, 0.46) 100%)",
    blur: "rgba(21, 21, 21, 0.63)",
  },
  font: {
    familys: {
      primary: "'Plus Jakarta Sans', sans-serif",
    },
    sizes: {
      xxSmall: "0.75rem", // 12px
      xSmall: "0.938rem", // 15px
      small: "1rem", // 16px
      medium: "1.25rem", // 20px
      large: "2rem",  // 32px
      xLarge: "2.75rem", // 44px
    },
    weights: {
      thin: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    cases: {
      upper: {
        textTransform: "uppercase",
      },
      capitalize: {
        texTransform: "capitalize",
      }
    },
  },
};

export type ThemeType = typeof theme;
export type ColorTheme = keyof typeof theme.colors
export type FontSize = keyof typeof theme.font.sizes
export type FontWeight = keyof typeof theme.font.weights
export type FontFamily = keyof typeof theme.font.familys
export type TextCase = keyof typeof theme.font.cases
