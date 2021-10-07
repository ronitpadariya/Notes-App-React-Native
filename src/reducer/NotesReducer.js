export const initialState = [];

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return [
        ...state,
        { id: Math.random(), title: payload.title, content: payload.content },
      ];
    case "REMOVE":
      return state.filter((notes) => payload !== notes.id);
    case "UPDATE":
      return state.map((record) => {
        if (payload.id === record.id) {
          return payload;
        } else {
          return record;
        }
      });
    default:
      return state;
  }
};
