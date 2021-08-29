import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import NavBar from "../../NavBar/NavBar";

import usePlayerForm from "./usePlayerForm";
const PlayerForm = () => {
  const { handleSubmit, errors, handleChange, playerCount } = usePlayerForm();
  return (
    <div>
      <NavBar showButtons={true} />
      <div className="application">
        <h2 className="text-center">Please enter the Player Names:</h2>
        <Form onSubmit={handleSubmit}>
          {[...Array(playerCount)].map((player, index) => {
            return (
              <FormGroup key={index} className="mt-3">
                <Label for={"Player" + (index + 1)} className="text-left ps-1">
                  {"Player " + (index + 1)}
                </Label>
                <Input
                  className="mt-1  text-secondary"
                  invalid={
                    errors.hasOwnProperty(["Player" + (index + 1)])
                      ? true
                      : false
                  }
                  id={"Player" + (index + 1)}
                  onChange={(e) => handleChange(e)}
                ></Input>
                {errors.hasOwnProperty(["Player" + (index + 1)]) && (
                  <FormFeedback>{errors["Player" + (index + 1)]}</FormFeedback>
                )}
              </FormGroup>
            );
          })}
          {errors.hasOwnProperty("duplicates") ? (
            <p className="text-danger">{errors.duplicates}</p>
          ) : (
            ""
          )}
          <div className="d-grid gap-2 mt-4">
            <Button className="text-center" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default PlayerForm;
