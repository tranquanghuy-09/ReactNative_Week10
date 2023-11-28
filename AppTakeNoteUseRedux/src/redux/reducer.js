const initialState = {
  notes: [],
  setNotes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        notes: [...state.notes, action.note]
      };

    case "REMOVE":
      return {
        ...state,
        notes: state.notes.filter(note => note !== action.note)
      };

    default:
      return state;
  }
};
