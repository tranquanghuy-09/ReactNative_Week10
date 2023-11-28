import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
    name: 'notes',
    initialState: ["To check email", "Learn HTML Advance", "Medical App UI"],
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        },
        deleteNote: (state, action) => {
            state.splice(action.payload, 1);
        },
        updateNote: (state, action) => {
            state[action.payload.index] = action.payload.updatedNote;
        },
    },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
