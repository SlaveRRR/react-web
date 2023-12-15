import { createGlobalStyle } from "styled-components";

interface StyledProps {
    mode: 'light' | 'dark'
}

const GlobalStyles = createGlobalStyle<StyledProps>`
:root{
    --black-border:1px solid rgb(0 0 0 / 20%);
    --white-border:1px solid white
}
    body{
        background-color: ${({ mode }) => mode === 'light' ? 'white' : 'black'}

    }

    .container {
  max-width: calc(2560px + 1.875em);
  margin: 0 auto;
  width: 100%;
  padding-left: 0.9375em;
  padding-right: 0.9375em;
}
`
export default GlobalStyles;