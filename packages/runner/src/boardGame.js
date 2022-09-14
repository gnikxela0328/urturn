export const CREATOR_EDITABLE_FIELDS = ['joinable', 'finished', 'state'];
export const CREATOR_VIEWABLE_FIELDS = [...CREATOR_EDITABLE_FIELDS, 'version', 'players'];

const FIELD_TYPES = {
  joinable: (x) => typeof x === 'boolean',
  finished: (x) => typeof x === 'boolean',
  state: (x) => typeof x === 'object',
  version: (x) => typeof x === 'number',
  players: (x) => Array.isArray(x)
   && x.every(
     (player) => typeof player.id === 'string'
      && typeof player.username === 'string',
   ),
};

export function filterBoardGame(state) {
  return CREATOR_VIEWABLE_FIELDS.reduce(
    (newState, key) => ({
      ...newState,
      [key]: state[key],
    }),
    {},
  );
}

export function validateBoardGame(state) {
  const filteredState = filterBoardGame(state);

  Object.keys(state).forEach((key) => {
    if (!CREATOR_VIEWABLE_FIELDS.includes(key)) throw Error(`Invalid key: ${key} - maybe move into the 'state' field?`);
  });

  Object.keys(filteredState).forEach((key) => {
    if (state[key] === undefined) throw Error(`Missing key: ${key}`);
  });

  Object.keys(filteredState).forEach((key) => {
    // eslint-disable-next-line valid-typeof
    if (!(FIELD_TYPES[key](filteredState[key]))) {
      throw Error(`Typeof ${key} is incorrect.`);
    }
  });
}

export function applyBoardGameResult(state, result) {
  return Object.keys(result).reduce((newState, key) => {
    if (CREATOR_EDITABLE_FIELDS.includes(key)) {
      return { ...newState, [key]: result[key] };
    }
    throw new Error(`key "${key}" is not editable`);
  }, { ...state, version: state.version + 1 });
}

export function newBoardGame(backendModule) {
  const boardGame = {
    joinable: true,
    finished: false,
    players: [],
    version: -1,
    // Used to generate unique user ids with a simple counter. No new user will have the same id
    playerIdCounter: 0,
  };
  return applyBoardGameResult(boardGame, backendModule.onRoomStart());
}

export function getPlayerById(id, boardGame) {
  // Use a new object value so developers do not try to do plr === boardGame.players[x]
  // Rather developers should be comparing the player ids instead
  return { ...boardGame.players.find((plr) => plr.id === id) };
}

export function removePlayerById(id, boardGame) {
  return { ...boardGame, players: boardGame.players.filter((p) => p.id !== id) };
}