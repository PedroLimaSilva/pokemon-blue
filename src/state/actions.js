/*
 * action types
 */

export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const IDLE = 'IDLE';

export const INTERACT = 'INTERACT';

/*
 * action creators
 */

export function move(direction) {
  switch (direction.toUpperCase()) {
    case 'UP':
      return { type: MOVE_UP };
    case 'DOWN':
      return { type: MOVE_DOWN };
    case 'LEFT':
      return { type: MOVE_LEFT };
    case 'RIGHT':
      return { type: MOVE_RIGHT };
    default: {
      return { type: IDLE };
    }
  }
}

export function interact() {
  return { type: INTERACT };
}
