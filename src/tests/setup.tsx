import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeAll, vi } from "vitest";
import "@testing-library/jest-dom";
class IntersectionObserver {
   observe = vi.fn();
   disconnect = vi.fn();
   unobserve = vi.fn();
}
afterEach(() => {
   cleanup();
});
beforeAll(() => {
   Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
         matches: false,
         media: query,
         onchange: null,
         addListener: vi.fn(),
         removeListener: vi.fn(),
         addEventListener: vi.fn(),
         removeEventListener: vi.fn(),
         dispatchEvent: vi.fn(),
      })),
   });
   Object.defineProperty(window, "IntersectionObserver", {
      writable: true,
      configurable: true,
      value: IntersectionObserver,
   });
});
function customRender(ui: React.ReactElement, options = {}) {
   return render(ui, {
      wrapper: ({ children }) => children,
      ...options,
   });
}

// eslint-disable-next-line import/export
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// eslint-disable-next-line import/export
export { customRender as render };
