import { CustomMessage } from '../models/CustomMessage';

/**
 A verification function that checks that the message of the new coupon does not exceed one of the following limitations:
 1. The field is required.
 If the message is invalid the message will initielizes with accordenly message.
 */
export function validationMessage(message: string, theMessage: CustomMessage): boolean {
    if (!message || message == "") {
        theMessage.message = "The field is required";
        return false;
    }
    return true;
}