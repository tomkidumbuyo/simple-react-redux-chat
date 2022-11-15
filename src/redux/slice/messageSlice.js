import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
import { withReduxStateSync } from 'redux-state-sync'

const messageSlice = createSlice({
    name: "message",
    initialState: [
    ],
    reducers: {
        addMessage: (state, action) => {
            const newMessage = {
                id: uuidv4(),
                date: Date.now(),
                message: action.payload.message,
                userId: action.payload.userId
            }
            state.push(newMessage)
        }
    }
})

export const  { addMessage } = messageSlice.actions
export default messageSlice.reducer;
