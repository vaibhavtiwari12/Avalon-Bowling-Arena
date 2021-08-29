import React from "react";
import { Button } from "reactstrap";
import "../../css/landing.css";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const Landing = () => {
  const history = useHistory();
  const handleRedirect = (event) => {
    if (event.target.id === "play") {
      history.push("/PlayerCountSelector");
    } else {
      history.push("/history");
    }
  };
  return (
    <div>
      <NavBar showButtons={false} />
      <div className="application">
        <div className="text-center">
          <h1>Welcome to Bowling Arena</h1>
          <div className="d-grid gap-2 mt-5">
            <Button
              size="lg"
              id="play"
              onClick={handleRedirect}
              color="primary"
            >
              Let's Play!
            </Button>
          </div>
          <div>or</div>
          <div className="d-grid gap-2 mt-2">
            <Button
              size="lg"
              id="history"
              onClick={handleRedirect}
              color="primary"
            >
              Check History
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
