import { RawData } from 'ws';

export interface DecodedInput {
    action: string;
    subAction: string;
    offset: number;
    figureLength: number;
}

export const decodeInput = (data: RawData): any => {
    const input = data.toString();

    const [target, argument1, argument2] = input.split(' ');
    const [action, subAction] = target.split('_');
    const offset = parseInt(argument1);
    const figureLength = parseInt(argument2) || 0;

    return { action, subAction, offset, figureLength };
};
