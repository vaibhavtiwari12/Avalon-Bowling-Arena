const initial_state = {
  playerCount: null,
  playerNames: {},
  game: {},
  matchID: null,
};

const bowlingReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "PLAYER_COUNT":
      return {
        ...state,
        playerCount: action.data,
      };
    case "PLAYER_NAMES":
      return {
        ...state,
        playerNames: action.data,
      };
    case "SAVE_MATCH_ID":
      return {
        ...state,
        matchID: action.data,
      };
    case "SAVE_INITAL_GAME":
      return {
        ...state,
        game: action.data,
      };
    case "ADD_FRAME_TO_GAME":
      return {
        ...state,
        game: {
          ...state.game,
          [action.data.matchID]: {
            ...state.game[[action.data.matchID]],
            [action.data.name]: {
              ...state.game[action.data.matchID][action.data.name],
              frame: action.data.frame,
            },
          },
        },
      };
    case "SAVE_FRAME_COMPLETED":
      return {
        ...state,
        game: {
          ...state.game,
          [action.data.matchID]: {
            ...state.game[[action.data.matchID]],
            [action.data.name]: {
              ...state.game[action.data.matchID][action.data.name],
              frameCompleted: action.data.frameCompleted,
            },
          },
        },
      };
    case "SAVE_SCORE":
      return {
        ...state,
        game: {
          ...state.game,
          [action.data.matchID]: {
            ...state.game[[action.data.matchID]],
            [action.data.name]: {
              ...state.game[action.data.matchID][action.data.name],
              score: action.data.score,
            },
          },
        },
      };
    case "SAVE_WINNER":
      return {
        ...state,
        game: {
          ...state.game,
          [action.data.matchID]: {
            ...state.game[action.data.matchID],
            winner: action.data.name,
          },
        },
      };
    default:
      return state;
  }
};

export default bowlingReducer;
