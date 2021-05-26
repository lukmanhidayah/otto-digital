const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const FormatDate = (date: Date) => {
  let dd: number | string = date.getDate();
  let mm: number | string = date.getMonth();
  let yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  return `${dd} ${monthNames[mm]} ${yyyy}`;
};

export default FormatDate;
