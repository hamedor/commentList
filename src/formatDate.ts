const formatDate = (date: string, time: string) => {
  let dateArray = date.split(".");

  let day = +dateArray[0];
  let month = +dateArray[1] - 1;
  let year = +dateArray[2];

  let timeArray = time.split(":");

  let hours = +timeArray[0];
  let minutes = +timeArray[1];
  let seconds = +timeArray[2];

  const formatted = new Date(year, month, day, hours, minutes, seconds);

  let result = new Date().getTime() - formatted.getTime();

  if (result < 86400000 && result > 0) {
    return "Сегодня в " + time;
  }

  if (result >= 86400000 && result < 172800000) {
    return "Вчера в " + time;
  }
  if (result >= 17280000) {
    return date + " в " + time;
  }
};

export default formatDate;
