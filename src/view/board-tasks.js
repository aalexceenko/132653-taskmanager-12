import AbstractView from "./abstract.js";

const createBoardTaskTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

export default class TaskList extends AbstractView {

  getTemplate() {
    return createBoardTaskTemplate();
  }

}
