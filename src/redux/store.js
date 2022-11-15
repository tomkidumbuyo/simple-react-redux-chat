import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './slice/messageSlice'
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync'
import {  applyMiddleware } from 'redux'


const config = {}
const middlewares = [
  createStateSyncMiddleware(config),
]

const store = configureStore({
    reducer: {
        messages: messageReducer
    },
    middleware: middlewares
})
initStateWithPrevTab(store)

export default store;