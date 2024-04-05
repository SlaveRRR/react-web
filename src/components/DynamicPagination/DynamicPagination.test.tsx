import { describe } from "vitest";
import { render, screen, waitFor } from "@/tests/setup";
import DymanicPagination from ".";

describe("Films", () => {
   test("отображение карточек с фильмами", async () => {
      render(<DymanicPagination />);

      await waitFor(async () => {
         expect((await screen.findAllByTestId("movies")).length).toEqual(12);
      });
   });
});
