import { createStore } from 'redux'
import { game } from './reducers'

export const gameState = createStore(game);