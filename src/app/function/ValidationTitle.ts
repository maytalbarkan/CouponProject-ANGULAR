import { CustomMessage } from '../models/CustomMessage';

/**
A verification function that checks that the title of the new coupon does not exceed one of the following limitations:
1. The coupon must have a title.
2. The title length must be longer than two characters.
If the title invalid the message will initialize with accordanly message.
*/
export function validationTitle(title: string, message: CustomMessage): boolean {
    if (!title || title == "") {
        message.message = "This field is required";
        return false;
    }
    if (title.length < 2) {
        message.message = "Title must contain more than 2 characters";
        return false;
    }
    return true;
}