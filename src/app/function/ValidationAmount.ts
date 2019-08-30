import { CustomMessage } from '../models/CustomMessage';

/**
 A verification function that checks that the amount of the new coupon does not exceed one of the following limitations:
 1. The field is required.
 2. The minimum quantity of the coupon is 10 and the maximum is 999.
 If the amount is invalid the message will initielizes with accordenly message.
 */
export function validationAmount(amount: number, message: CustomMessage): boolean {
    if (!amount) {
        message.message = "The field is required";
        return false;
    }
    if (amount > 1000 || amount < 5) {
        message.message = "The minimum quantity of the coupon is 5 and the maximum is 1000";
        return false;
    }
    return true;
}