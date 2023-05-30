const createDATE = () => {
  const dateobj = new Date();
  const month = dateobj.getMonth();
  let monthNum;
  switch (month) {
    case 0:
      monthNum = "jan";
      break;
    case 1:
      monthNum = "Feb";
      break;
    case 2:
      monthNum = "March";
      break;
    case 3:
      monthNum = "April";
      break;
    case 4:
      monthNum = "May";
      break;
    case 5:
      monthNum = "Jun";
      break;
    case 6:
      monthNum = "July";
      break;
    case 7:
      monthNum = "Aug";
      break;
    case 8:
      monthNum = "Sept";
      break;
    case 9:
      monthNum = "Oct";
      break;
    case 10:
      monthNum = "Nav";
      break;
    case 11:
      monthNum = "Dec";
      break;
    default:
  }
  const date = `${dateobj.getDate()} ${monthNum} ${dateobj.getFullYear()} [${dateobj.getHours()}:${dateobj.getMinutes()}:${dateobj.getSeconds()}]`;
  return date;
};
export default createDATE
