import { CustomMessage } from '../models/CustomMessage';

/**
A verification function that checks that the end date of the new coupon does not exceed one of the following limitations:
1. The coupon must have an end date.
2. The end date must not be before the start date.
3. The difference between the start date and the end date must be a minimum of one month and a maximum of one year.
If the endDate is invalid the message will initielizes with accordenly message.
*/
export function validationEndDate(endDate: string, startDate: string, message: CustomMessage): boolean {
    let theStartDate = new Date(startDate);
    let theEndDate = new Date(endDate);
    if (!endDate || endDate == null) {

        message.message = "This field is required";
        return false;
    }
    if (theEndDate.getTime() < theStartDate.getTime()) {
        message.message = "The end date must not be before the start date";
        return false;
    }
    return true;
}