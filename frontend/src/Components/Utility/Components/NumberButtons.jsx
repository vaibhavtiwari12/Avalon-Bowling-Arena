import { Button } from "reactstrap";
import "../../../css/numberButton.css";
const NumberButtons = ({ activeButtons, handleThrow, playerName }) => {
  const handleClick = (event) => {
    handleThrow(parseInt(event.target.id));
  };
  return (
    <div>
      {activeButtons > 0 &&
        [...Array(activeButtons)].map((x, index) => {
          return (
            <Button
              className="numberButton"
              color="secondary"
              key={index}
              data-testid={playerName + index}
              id={index}
              onClick={handleClick}
            >
              {index}
            </Button>
          );
        })}
    </div>
  );
};
export default NumberButtons;
