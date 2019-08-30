  /**
   * The function recevied date and return string that dispalays the date on the date in friendly way.
   * @param date must be date.
   */
  export function displayDate(date:Date):string{
    var d = new Date(date);
    var day = d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    return day + "." + month + "." + year;
  }