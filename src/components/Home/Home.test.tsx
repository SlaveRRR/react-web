import { describe } from "vitest";
import { render, screen } from "@/tests/setup";
import Home from "./index";

describe("Home", () => {
   test("отображает домашнюю страницу значение count", () => {
      render(<Home />);
      const head = screen.getByText("Welcome to Filmix");
      const text = screen.getByText("Online cinema without ads");
      expect(head).toBeInTheDocument();
      expect(text).toBeInTheDocument();
   });
});
