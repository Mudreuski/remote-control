import { mousePosition, moveDown, moveLeft, moveRight, moveUp } from './mouse-control';
import { drawCircle, drawRectangle, drawSquare } from './draw-control';
import { printScreen } from './screen-control';

export const actions: Record<string, Record<string, (arg1: number, arg2?: number) => Promise<string>>> = {
    mouse: {
        up: moveUp,
        down: moveDown,
        right: moveRight,
        left: moveLeft,
        position: mousePosition,
    },
    draw: {
        circle: drawCircle,
        rectangle: drawRectangle,
        square: drawSquare,
    },
    prnt: {
        scrn: printScreen,
    },
    wrongAction: {
        incorrectCommand: async () => 'Incorrect command',
    }
}
