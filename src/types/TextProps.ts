import { ColorTheme, FontFamily, FontSize, FontWeight, TextCase } from "../theme";

export interface TextProps {
  $size?: FontSize;
  color?: ColorTheme | string;
  $weight?: FontWeight | string;
  $family?: FontFamily;
  $case?: TextCase;
  $padding?: string;
}