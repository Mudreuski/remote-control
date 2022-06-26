import { mousePosition, moveDown, moveLeft, moveRight, moveUp } from './mouse-control';

export const actions: Record<string, Record<string, (arg1: number, arg2?: number) => Promise<string>>> = {
    mouse: {
        up: moveUp,
        down: moveDown,
        right: moveRight,
        left: moveLeft,
        position: mousePosition
    },
    wrongAction: {
        incorrectCommand: async () => 'Incorrect command',
    }
}
