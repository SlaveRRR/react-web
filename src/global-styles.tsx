import { createGlobalStyle } from "styled-components";

interface StyledProps {
   mode: "light" | "dark";
}
//

const GlobalStyles = createGlobalStyle<StyledProps>`
*{
    box-sizing:border-box;
}

:root{
    --main-border:${({ mode }) => (mode === "light" ? "1px solid rgb(0 0 0 / 20%)" : "1px solid white")};
    --theme-bg:${({ mode }) => (mode === "light" ? "white" : "black")};
    --theme-text-color:${({ mode }) => (mode === "dark" ? "white" : "black")};
    --table-content-bg:${({ mode }) => (mode === "dark" ? "#636363" : "white")};
    --table-header-bg:${({ mode }) => (mode === "dark" ? "#8b8b8b" : "#fafafa")};
    --table-outline:${({ mode }) => (mode === "dark" ? "2px solid white" : "none")};   
    --table-cell-hover-color:${({ mode }) => (mode === "dark" ? "#8b8a8a" : "#fafafa")}; 
}
    body{
        background-color: var(--theme-bg)
    }

    .container {
  max-width: calc(2560px + 1.875em);
  margin: 0 auto;
  width: 100%;
  padding-left: 0.9375em;
  padding-right: 0.9375em;
}
`;
export default GlobalStyles;
