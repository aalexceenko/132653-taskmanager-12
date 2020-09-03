import SiteMenuView from "./view/site-menu.js";
import FilterView from "./view/filter.js";
import {generateFilter} from "./mock/filter.js";
import {generateTask} from "./mock/task.js";
import {render, RenderPosition} from "./utils/render.js";
import BoardPresenter from "./presenter/board.js";

const TASK_COUNT = 9;
const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const filters = generateFilter(tasks);


const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const boardPresenter = new BoardPresenter(siteMainElement);

render(siteHeaderElement, new SiteMenuView(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterView(filters), RenderPosition.BEFOREEND);

boardPresenter.init(tasks);
