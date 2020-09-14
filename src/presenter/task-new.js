import TaskEditView from "../view/task-edit.js";
import {generateId} from "../mock/task.js";
import {remove, render, RenderPosition} from "../utils/render.js";
import {UserAction, UpdateType} from "../const.js";

export default class TaskNew {
  constructor(taskListContainer, changeData) {
    this._taskListContainer = taskListContainer;
    this._changeData = changeData;

    this._taskEditComponent = null;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init() {
    if (this._taskEditComponent !== null) {
      return;
    }

    this._taskEditComponent = new TaskEditView();
    this._taskEditComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._taskEditComponent.setDeleteClickHandler(this._handleDeleteClick);

    render(this._taskListContainer, this._taskEditComponent, RenderPosition.AFTERBEGIN);

    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  destroy() {
    if (this._taskEditComponent === null) {
      return;
    }

    remove(this._taskEditComponent);
    this._taskEditComponent = null;

    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _handleFormSubmit(task) {
    this._changeData(
        UserAction.ADD_TASK,
        UpdateType.MINOR,
        Object.assign({id: generateId()}, task)
    );
    this.destroy();
  }

  _handleDeleteClick() {
    this.destroy();
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.destroy();
    }
  }
}
