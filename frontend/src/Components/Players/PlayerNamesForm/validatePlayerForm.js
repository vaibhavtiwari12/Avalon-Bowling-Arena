const validatePlayerForm = (names, playerCount) => {
  let errors = {};
  for (let playerIndex = 1; playerIndex <= playerCount; playerIndex++) {
    if (!names.hasOwnProperty(`Player${playerIndex}`)) {
      errors[`Player${playerIndex}`] = `Please enter Player${playerIndex} name`;
    }
  }
  const NameArray = Object.values(names);
  if (
    new Set(NameArray).size !== NameArray.length &&
    NameArray.length === playerCount
  ) {
    errors.duplicates = "Please enter unique name for all the Players";
  }
  return errors;
};
export default validatePlayerForm;
