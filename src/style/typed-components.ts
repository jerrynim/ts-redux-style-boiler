import * as styledComponents from "styled-components";

interface IThemeInterface {
  buttonBlue: string;
  blue: string;
  brownGrey: string;
  dark: string;
  grey: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
