import { addZero } from './AddZero';

  /**
   * The function recevied date and return string that displays the hours on the date in a more friendly way.
   * @param date must be date.
   */
  export function displayHour(date:Date):string {
    var d = new Date(date);
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return h + ":" + m + ":" + s;
  }