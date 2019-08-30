import { CustomMessage } from '../models/CustomMessage';

/*
  A help function that checks whether the new password length is at least 4 characters long.
  */
 export function ValidationPassword(password: string, message:CustomMessage): boolean {
    if (!password) {
        message.message = "Password must contain at least 4 characters";
        return false;
    }
    if ((password.length < 4) || (password.length > 8)) {
        message.message = "Password must contain at least 4 characters and maximum 8 characters";
        return false;
    }
    return true;
}