import { getMousePos, mouseToggle, moveMouse } from 'robotjs';

export const drawCircle = async (radius: number): Promise<string> => {
    const draw = await setTimeout(() => {
        const step = 0.01;
        let { x, y } = getMousePos();

        mouseToggle('down', 'left');

        for (let i = 0; i <= Math.PI * 2; i += step) {
            x += radius * step * Math.cos(i);
            y += radius * step * Math.sin(i);

            moveMouse(x, y);
        }

        mouseToggle('up', 'left');
    }, 1500);

    return 'draw_circle\0';
}

const drawLine = (coordinate: 'x' | 'y', direction: number, length: number): void => {
    const mouse = getMousePos();

    for (let i = 0; i < length; i++) {
        direction > 0 ? mouse[coordinate]++ : mouse[coordinate]--;

        moveMouse(mouse.x, mouse.y);
    }
};

export const drawRectangle = async (width: number, height: number = 0): Promise<string> => {
    const draw = await setTimeout(() => {
        mouseToggle('down', 'left')

        drawLine('x', 1, width);
        drawLine('y', 1, height);
        drawLine('x', -1, width);
        drawLine('y', -1, height);

        mouseToggle('up', 'left')
    }, 1500);

    return 'draw_rectangle\0';
}

export const drawSquare = async (width: number): Promise<string> => {
    const draw = await setTimeout(() => {
        mouseToggle('down', 'left');

        drawLine('x', 1, width);
        drawLine('y', 1, width);
        drawLine('x', -1, width);
        drawLine('y', -1, width);

        mouseToggle('up', 'left');
    }, 500);

    return 'draw_square\0';
}
