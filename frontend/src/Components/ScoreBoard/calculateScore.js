const calculateScore = (frames) => {
  const throws = processThrows(frames);
  let tInx = 0;
  let score = 0;
  if (throws.length > 0) {
    for (let i = 0; i < 10; i++) {
      if (throws[tInx] === 10) {
        if (throws[tInx + 1] && throws[tInx + 2]) {
          score += 10 + throws[tInx + 1] + throws[tInx + 2];
          tInx++;
          continue;
        }
      } else {
        if (throws[tInx] + throws[tInx + 1] === 10) {
          if (throws[tInx] && throws[tInx + 1] && throws[tInx + 2]) {
            score += throws[tInx] + throws[tInx + 1] + throws[tInx + 2];
            tInx += 2;
          }
        } else {
          if (throws[tInx + 1]) {
            score += throws[tInx] + throws[tInx + 1];
            tInx += 2;
          }
        }
      }
    }
    return score;
  }
};

/* Delete all the 0s that come in Strike's frame. 
   i.e. delete 0 immediately after 10, if not last frame.
*/
const processThrows = (frames) => {
  let data = [...frames];
  for (let throws = 0; throws < data.length; throws++) {
    if (data[throws] == 10 && data[throws + 1] == 0) {
      data[throws + 1] = "x";
    }
  }
  data = data.filter((data) => {
    return data != "x";
  });
  return data;
};
export default calculateScore;
