import { render, screen } from "@testing-library/react";
import PlayerCountForm from "./PlayerCountForm";
import AppWrapper from "../../TestUtility/AppWrapper";

test("renders Please select the number of players playing.", () => {
  render(
    <AppWrapper>
      <PlayerCountForm />
    </AppWrapper>
  );
  const questionText = screen.getByText(
    /Please select the number of players playing./i
  );
  expect(questionText).toBeInTheDocument();
});
