const addButton = document.querySelector("#add-button");
const clearButton = document.querySelector(".Clear");
const checked = document.querySelector(".list-item");

addButton.addEventListener("click", () => {
  const input = document.querySelector("#input");
  const text = input.value.trim(); /*trim()을 이용해 양끝 공백을 없애주기*/

  if (text !== "") {
    addToList(text);
    input.value = "";
    input.focus();
  }
});

function addToList(text) {
  const list = document.querySelector("#list");

  const newListItem = document.createElement("li");
  const checkboxContainer = document.createElement("label");
  const newCheckbox = document.createElement("input");
  const checkmark = document.createElement("span");
  const deleteButton = document.createElement("button");
  const makeDiv = document.createElement("div");

  newListItem.classList.add("list-item");
  checkboxContainer.classList.add("checkbox-container");
  newCheckbox.classList.add("check-box");
  checkmark.classList.add("checkmark");
  makeDiv.classList.add("li_div");

  newListItem.innerHTML = text;
  newCheckbox.setAttribute("type", "checkbox");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    newListItem.parentNode.removeChild(newListItem);
  });

  newCheckbox.addEventListener("click", () => {
    newListItem.classList.toggle("checked");
  });

  checkboxContainer.appendChild(newCheckbox);
  checkboxContainer.appendChild(checkmark);
  makeDiv.appendChild(checkboxContainer);
  makeDiv.appendChild(deleteButton);
  newListItem.appendChild(makeDiv);
  list.appendChild(newListItem);
}
/*일단 삭제하는거까지는 만듦 but queryselectorAll이 아니기 때문에 현재는 맨 위에 요소만 삭제 가능 */
/*querySelectorAll을 사용했는데 아직도 맨 위에 요소만 삭제(이유 모름) */
/*const는 변경이 안되는데 i를 const로 선언해서 그런거였음 현재는 해결 */

/*여기서부터 완료된 할 일 목록 함수 */
checked.addEventListener("checked", () => {});
