import { describe } from "vitest";
import { render, screen, userEvent } from "@/tests/setup";
import NavBar from "./index";
import ContextProvider from "@/providers/contextProvider";
import { BrowserRouter } from "react-router-dom";

describe("NavBar", () => {
   test("авторизация через кнопку", async () => {
      render(
         <BrowserRouter>
            <ContextProvider>
               <NavBar />
            </ContextProvider>
         </BrowserRouter>,
      );
      const authBtn = await screen.findByTestId("auth-btn");

      expect(authBtn).toBeInTheDocument();
      await userEvent.click(authBtn);
      expect(authBtn).toHaveTextContent("Выйти");
   });
});
