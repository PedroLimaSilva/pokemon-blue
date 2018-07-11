import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from './actions';


const initialGameState = {
    character: {
        position: {
            x: 8,
            y: 0,
            f: 'N',
            map: 'ROUTE_01'
        }
    }

}

function handleMoveUp(state) {
    if (state.character.position.f !== 'N') {
        let newState = Object.assign({}, state);
        newState.character.position.f = 'N';
        return newState;
    } else {
        let newState = Object.assign({}, state);
        newState.character.position.y = state.character.position.y + 1;
        return newState;
    }
};

function handleMoveDown(state) {
    if (state.character.position.f !== 'S') {
        let newState = Object.assign({}, state);
        newState.character.position.f = 'S';
        return newState;
    } else {
        let newState = Object.assign({}, state);
        newState.character.position.y = state.character.position.y - 1;
        return newState;
    }
};

function handleMoveLeft(state) {
    if (state.character.position.f !== 'W') {
        let newState = Object.assign({}, state);
        newState.character.position.f = 'W';
        return newState;
    } else {
        let newState = Object.assign({}, state);
        newState.character.position.x = state.character.position.x + 1;
        return newState;
    }
};

function handleMoveRight(state) {
    if (state.character.position.f !== 'E') {
        let newState = Object.assign({}, state);
        newState.character.position.f = 'E';
        return newState;
    } else {
        let newState = Object.assign({}, state);
        newState.character.position.x = state.character.position.x - 1;
        return newState;
    }
};

export function game(state = initialGameState, action) {

    switch (action.type) {
        case MOVE_UP:
            return handleMoveUp(state);
        case MOVE_DOWN:
            return handleMoveDown(state);
        case MOVE_LEFT:
            return handleMoveLeft(state);
        case MOVE_RIGHT:
            return handleMoveRight(state);
        default:
            return state;
    }
}