const initialState = {
  notes: ["To check email", "Learn HTML Advance", "Medical App UI"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.note] };

    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((item, index) => index !== action.index),
      };

    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map((item, index) =>
          index === action.index ? action.updatedNote : item
        ),
      };

    case 'FETCH_NOTES':
      return { ...state, notes: action.notes };

    default:
      return state;
  }
};

export default reducer;



// const initialState = {
//   notes: ["To check email", "Learn HTML Advance","Medical App UI",],
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_NOTE':
//       return { ...state, notes: [...state.notes, { id: Date.now(), text: action.note }] };

//     case 'DELETE_NOTE':
//       return {
//         ...state,
//         notes: state.notes.filter((item) => item.id !== action.id),
//       };

//     case 'UPDATE_NOTE':
//       return {
//         ...state,
//         notes: state.notes.map((item) =>
//           item.id === action.id ? { ...item, text: action.updatedNote } : item
//         ),
//       };

//     case 'FETCH_NOTES_SUCCESS':
//       return { ...state, notes: action.notes };

//     default:
//       return state;
//   }
// };

// export default reducer;
