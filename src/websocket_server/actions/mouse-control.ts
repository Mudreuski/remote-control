import { getMousePos, moveMouse } from 'robotjs';

const mouseMove = (valueX = 0, valueY = 0): void => {
    const { x, y } = getMousePos();
    const newX = x + valueX;
    const newY = y + valueY;

    moveMouse(newX, newY);
};

export const moveUp = async (offset: number): Promise<string> => {
    mouseMove(0, -offset);

    return 'move_up\0';
};

export const moveDown = async (offset: number): Promise<string> => {
    mouseMove(0, offset);

    return 'move_down\0';
};

export const moveLeft = async (offset: number): Promise<string> => {
    mouseMove(-offset, 0);

    return 'move_left\0';
};

export const moveRight = async (offset: number): Promise<string> => {
    mouseMove(offset, 0);

    return 'move_right\0';
};

export const mousePosition = async (): Promise<string> => {
    const { x, y } = getMousePos();

    return `mouse_position ${x},${y}\0`;
};
