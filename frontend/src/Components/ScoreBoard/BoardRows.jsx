const BoardRows = ({ frames }) => {
  const getThrowValue = (throwIndex) => {
    return frames[throwIndex] !== null || frames[throwIndex] !== undefined
      ? frames[throwIndex]
      : "";
  };
  return (
    <tbody className="text-center">
      <tr>
        <th scope="row">1</th>
        <td>{getThrowValue(0)}</td>
        <td>{getThrowValue(1)}</td>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>{getThrowValue(2)}</td>
        <td>{getThrowValue(3)}</td>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>{getThrowValue(4)}</td>
        <td>{getThrowValue(5)}</td>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>{getThrowValue(6)}</td>
        <td>{getThrowValue(7)}</td>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>{getThrowValue(8)}</td>
        <td>{getThrowValue(9)}</td>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>{getThrowValue(10)}</td>
        <td>{getThrowValue(11)}</td>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row">7</th>
        <td>{getThrowValue(12)}</td>
        <td>{getThrowValue(13)}</td>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>{getThrowValue(14)}</td>
        <td>{getThrowValue(15)}</td>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row">9</th>
        <td>{getThrowValue(16)}</td>
        <td>{getThrowValue(17)}</td>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row">10</th>
        <td>{getThrowValue(18)}</td>
        <td>{getThrowValue(19)}</td>
        <td>{getThrowValue(20)}</td>
      </tr>
    </tbody>
  );
};
export default BoardRows;
