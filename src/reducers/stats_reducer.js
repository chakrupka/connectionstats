/*
 * Reducer for user statistics
 * Cha Krupka, June 2024
 */

const statsReducer = (state = {}, action) => {
  switch (action.type) {
    case "CURRENT_STREAK":
      return {
        ...state,
        currentStreak: action.payload,
      };
    case "PREV_STREAK":
      return {
        ...state,
        currentStreak: action.payload,
      };
    case "LONGEST_STREAK":
      return {
        ...state,
        longestStreak: action.payload,
      };
    case "GAMES_TOTAL":
      return {
        ...state,
        totalGames: action.payload,
      };
    case "GAMES_SOLVED":
      return {
        ...state,
        solvedGames: action.payload,
      };
    case "SOLVED_PERCENT":
      return {
        ...state,
        solvePercent: action.payload,
      };
    case "UPDATE_ALL":
      return {
        currentStreak: action.payload.currentStreak,
        prevStreak: action.payload.prevStreak,
        longestStreak: action.payload.longestStreak,
        totalGames: action.payload.totalGames,
        solvedGames: action.payload.solvedGames,
        solvePercent: action.payload.solvePercent,
      };
    default:
      return state;
  }
};

export const updateAllStats = (stats) => {
  return {
    type: "UPDATE_ALL",
    payload: stats,
  };
};

export const updateCurrStreak = (streak) => {
  return {
    type: "CURRENT_STREAK",
    payload: streak,
  };
};

export const updatePrevStreak = (streak) => {
  return {
    type: "PREV_STREAK",
    payload: streak,
  };
};

export const updateLongStreak = (streak) => {
  return {
    type: "LONGEST_STREAK",
    payload: streak,
  };
};

export const updateNumGames = (numGames) => {
  return {
    type: "GAMES_TOTAL",
    payload: numGames,
  };
};

export const updateNumSolved = (numSolved) => {
  return {
    type: "GAMES_SOLVED",
    payload: numSolved,
  };
};

export const updateSolvePercent = (solvePercent) => {
  return {
    type: "SOLVED_PERCENT",
    payload: solvePercent,
  };
};

export default statsReducer;
