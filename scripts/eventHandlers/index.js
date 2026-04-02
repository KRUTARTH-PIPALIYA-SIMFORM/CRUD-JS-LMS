import createButton from "./createButton.js";
import filterSubmit from "./filterSubmit.js";
import locationPopEvent from "./locationPopEvent.js";
import removeRightClickEvent from "./removeRightClickEvent.js";
import rightclickEvent from "./rightClickEvent.js";
import rightClickMenuEvent from "./rightClickMenuEvent.js";
import selectSortevent from "./selectSortEvent.js";

export function starteventHandlers() {
    rightclickEvent();
    rightClickMenuEvent();
    selectSortevent();
    removeRightClickEvent();
    filterSubmit();
    createButton();
    locationPopEvent();
}
