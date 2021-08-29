import { render, screen } from "@testing-library/react";
import Landing from "./Landing";

test("renders Let's Play button", () => {
  render(<Landing />);
  const welcomeText = screen.getByText(/Let's Play!/i);
  expect(welcomeText).toBeInTheDocument();
});
