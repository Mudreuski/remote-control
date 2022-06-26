import { DecodedInput } from './helpers';
import { actions } from './actions/factory';

export const router = async ( data: DecodedInput ): Promise<string> => {
    const isValidAction = actions.hasOwnProperty(data.action);
    if (!isValidAction) return await actions.wrongAction.incorrectCommand(data.offset);

    return await actions[data.action][data.subAction](data.offset, data.figureLength);
};
