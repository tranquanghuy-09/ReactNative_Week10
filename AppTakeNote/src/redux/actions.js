export const addNote = (note) => ({ type: 'ADD_NOTE', note });
export const deleteNote = (index) => ({ type: 'DELETE_NOTE', index });
export const updateNote = (index, updatedNote) => ({ type: 'UPDATE_NOTE', index, updatedNote });
export const fetchNotes = () => ({ type: 'FETCH_NOTES' }); // Updated action type

// export const ADD_ITEM = 'ADD_ITEM';
// export const UPDATE_ITEM = 'UPDATE_ITEM';
// export const DELETE_ITEM = 'DELETE_ITEM';

// export const addItem = (item) => ({
//     type: ADD_ITEM,
//     payload: item,
// });

// export const updateItem = (id, updatedItem) => ({
//     type: UPDATE_ITEM,
//     payload: { id, updatedItem },
// });

// export const deleteItem = (id) => ({
//     type: DELETE_ITEM,
//     payload: id,
// });
