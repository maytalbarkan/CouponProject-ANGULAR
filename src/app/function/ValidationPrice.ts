import { CustomMessage } from '../models/CustomMessage';

/**
A verification function that checks that the price of the new coupon does not exceed one of the following limitations:
1. The field is required.
2. The coupon price must not exceed $ 10,000
If the price is invalid the message will initielizes with accordenly message.
*/
export function validationPrice(price: number, message: CustomMessage): boolean {
    if (!price || price == 0) {
        message.message = "The field is required";
        return false;
    }
    if (price > 10000 || price <= 0) {
        message.message = "The coupon price must not exceed $ 10,000";
        return false;
    }
    return true;
}