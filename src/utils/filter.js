import {FilterType} from "../const";
import {isExpired, isExpireToday, isRepeate} from "./task";

export const filter = {
  [FilterType.ALL]: (tasks) => tasks.filter((task) => !task.isArchive),
  [FilterType.OVERDUE]: (tasks) => tasks.filter((task) => isExpired(task.dueDate)),
  [FilterType.TODAY]: (tasks) => tasks.filter((task) => isExpireToday(task.dueDate)),
  [FilterType.FAVORITES]: (tasks) => tasks.filter((task) => task.isFavorite),
  [FilterType.REPEATING]: (tasks) => tasks.filter((task) => isRepeate(task.repeating)),
  [FilterType.ARCHIVE]: (tasks) => tasks.filter((task) => task.isArchive)
};
