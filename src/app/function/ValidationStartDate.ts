import { CustomMessage } from '../models/CustomMessage';

/**
A verification function that checks that the start date of the new coupon does not exceed one of the following limitations:
1. The coupon must have a starting date.
2. The start date must not be a date that has already passed.
3. The start date must not be more than 6 months from the date of creation of the coupon.
If the startDate is invalid the message will initielizes with accordenly message.
*/
export function validationStartDate(startDate: string, message: CustomMessage): boolean {
    let today: Date = new Date();
    let theStartDate = new Date(startDate);
    if (!startDate || startDate == null) {
        message.message = "This field is required";
        return false;
    }

    if (theStartDate.getTime() < today.getTime()) {
        message.message = "The start date must not be a date that has already passed.";
        return false;
    }
    return true;
}