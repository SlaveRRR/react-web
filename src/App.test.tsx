import { describe } from "vitest";
import { render, screen, userEvent } from "@/tests/setup";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./providers/contextProvider";
import App from "./App";

describe("App", () => {
   test("работа роутера", async () => {
      render(
         <BrowserRouter>
            <ContextProvider>
               <App />
            </ContextProvider>
         </BrowserRouter>,
      );
      const profile = await screen.findByTestId("profile");
      const authBtn = await screen.findByTestId("auth-btn");
      expect(authBtn).toBeInTheDocument();
      userEvent.click(profile);
      expect(await screen.findByText("Authorized only!")).toBeInTheDocument();
      userEvent.click(authBtn);
      expect(await screen.findByText("Username profile")).toBeInTheDocument();
   });
});
