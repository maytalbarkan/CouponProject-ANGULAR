import { CustomMessage } from '../models/CustomMessage';

/**
 A verification function that checks that the image of the new coupon does not exceed one of the following limitations:
 1. The field is required.
 2. The URL must to be proper.
 If the image is invalid the message will initielizes with accordenly message.
 */
export function validationImage(image: string, message: CustomMessage) {
    if (!image || image == "") {
        message.message = "The field is required";
        return false;
    }
    let reg = /(https?:\/\/.*\.(?:png|jpg|gif))/i;
    if (!reg.test(image)) {
        message.message = "URL is invalid";
        return false;
    }
    return true;
}