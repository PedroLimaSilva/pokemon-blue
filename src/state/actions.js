/*
 * action types
 */

export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';

export const INTERACT = 'INTERACT';


/*
 * action creators
 */

export function move(direction, text) {
    switch (direction.toUpperCase()) {
        case 'UP':
            return { type: MOVE_UP, text };
        case 'DOWN':
            return { type: MOVE_DOWN, text };
        case 'LEFT':
            return { type: MOVE_LEFT, text };
        case 'RIGHT':
            return { type: MOVE_RIGHT, text };
        default: {
            return { type: 'IDLE', text }
        }
    }
}

export function interact(text) {
    return { type: INTERACT, text }
}

