import { CustomMessage } from '../models/CustomMessage';

/**
A verification function that checks that the category of the new coupon does not exceed one of the following limitations:
1. The field is required.
If the category is invalid the message will initielizes with accordenly message.
*/
export function validationCategory(category: string, message: CustomMessage): boolean {
    if (!category) {
        message.message = "The field is required";
        return false;
    }
    return true;
}