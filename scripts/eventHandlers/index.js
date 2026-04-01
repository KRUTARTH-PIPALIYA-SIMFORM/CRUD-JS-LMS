import createButton from "./createButton.js";
import filterSubmit from "./filterSubmit.js";
import removeRightClickEvent from "./removeRightClickEvent.js";
import rightclickEvent from "./rightClickEvent.js";
import selectSortevent from "./selectSortEvent.js";

export function starteventHandlers() {
    rightclickEvent();
    selectSortevent();
    removeRightClickEvent();
    filterSubmit();
    createButton();
}
