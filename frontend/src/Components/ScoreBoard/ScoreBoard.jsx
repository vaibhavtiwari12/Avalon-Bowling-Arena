import { Table } from "reactstrap";
import TableRows from "./BoardRows";

const ScoreBoard = ({ frames }) => {
  return (
    <div>
      {frames && frames.length > 0 && (
        <Table data-testid="scoreboard">
          <thead className="text-center">
            <tr>
              <th>Frames</th>
              <th>Throw 1</th>
              <th>Throw 2</th>
              <th>Throw 3</th>
            </tr>
          </thead>
          <TableRows frames={frames}></TableRows>
        </Table>
      )}
    </div>
  );
};
export default ScoreBoard;
