import { render, screen } from "@testing-library/react";
import App from "./App";

test("debug the structured", () => {
  render(<App />);
  // screen.debug()
  const title = screen.getByText(/ form!/i);
  expect(title).toBeInTheDocument();
});
