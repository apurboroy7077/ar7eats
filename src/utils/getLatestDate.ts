const getLatestDate = () => {
  // Create a new Date object which represents the current date and time
  var currentDate = new Date();

  // Get the current date components
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth() + 1; // Note: JavaScript months are zero-based, so January is 0
  var currentYear = currentDate.getFullYear();

  // Format the date with leading zeros if necessary
  var formattedDate =
    (currentDay < 10 ? "0" : "") +
    currentDay +
    "/" +
    (currentMonth < 10 ? "0" : "") +
    currentMonth +
    "/" +
    currentYear;

  return formattedDate;
};

export default getLatestDate;
