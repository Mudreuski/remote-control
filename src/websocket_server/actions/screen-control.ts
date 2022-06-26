import { getMousePos, screen } from 'robotjs';
import Jimp from 'jimp';

export const printScreen = async () => {
    const { x, y } = getMousePos();
    const robotImg = screen.capture(x, y, 200, 200);

    const jimpImage = new Jimp(robotImg.width, robotImg.height);
    jimpImage.scan(0, 0, jimpImage.bitmap.width, jimpImage.bitmap.height, (x, y, idx) => {
        const color = robotImg.colorAt(x, y);
        const red = parseInt(color[0] + color[1], 16);
        const green = parseInt(color[2] + color[3], 16);
        const blue = parseInt(color[4] + color[5], 16);

        jimpImage.bitmap.data[idx] = Number(red);
        jimpImage.bitmap.data[idx + 1] = Number(green);
        jimpImage.bitmap.data[idx + 2] = Number(blue);
        jimpImage.bitmap.data[idx + 3] = 255;
    });

    const buffer = await jimpImage.getBase64Async(Jimp.MIME_PNG);

    return `prnt_scrn ${buffer.split(',')[1]}`;
}
