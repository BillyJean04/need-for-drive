import { theme } from "@/styles/theme";

declare module "styled-components" {
  type CustomTheme = typeof theme;

  export interface DefaultTheme extends CustomTheme {}
}
