import moment from "moment";
import {Color} from "../const.js";
import {isDatesEqual} from "./task.js";


export const colorToHex = {
  [Color.BLACK]: `#000000`,
  [Color.BLUE]: `#0c5cdd`,
  [Color.GREEN]: `#31b55c`,
  [Color.PINK]: `#ff3cb9`,
  [Color.YELLOW]: `#ffe125`
};

export const makeItemsUniq = (items) => [...new Set(items)];

export const parseChartDate = (date) => moment(date).format(`D MMM`);

export const countTasksByColor = (tasks, color) => {
  return tasks.filter((task) => task.color === color).length;
};

export const countTasksInDateRange = (dates, tasks) => {
  return dates.map(
      (date) => tasks.filter(
          (task) => isDatesEqual(task.dueDate, date)
      ).length
  );
};

export const countCompletedTaskInDateRange = (tasks, dateFrom, dateTo) => {
  return tasks.reduce((counter, task) => {
    if (task.dueDate === null) {
      return counter;
    }

    if (moment(task.dueDate).isSame(dateFrom) || moment(task.dueDate).isBetween(dateFrom, dateTo) || moment(task.dueDate).isSame(dateTo)) {
      return counter + 1;
    }

    return counter;
  }, 0);
};

export const getDatesInRange = (dateFrom, dateTo) => {
  const dates = [];
  let stepDate = new Date(dateFrom);

  while (moment(stepDate).isSameOrBefore(dateTo)) {
    dates.push(new Date(stepDate));
    stepDate.setDate(stepDate.getDate() + 1);
  }

  return dates;
};

