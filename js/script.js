const inputContent = document.querySelector(".input-container");
const btnSave = document.querySelector(".button-container");
const tasksContent = document.querySelector(".tasks");
const errorMessage = document.querySelector(".errorMessage");

btnSave.addEventListener("click", addTask);

function addTask(event) {
  const inputValue = inputContent.value;

  if (inputValue.trim() === "") {
    errorMessage.textContent = "Este campo não pode estar vazio. Digite uma tarefa.";
    inputContent.classList.add("erroTaskExist");

  } else {

    if (taskExists(inputValue.toLowerCase())) {
      errorMessage.textContent = "Essa tarefa já existe.";
      inputContent.classList.add("erroTaskExist");

    } else {

      const newContent = document.createElement("li");
      newContent.textContent = inputValue;

      tasksContent.appendChild(newContent);
    }

    inputContent.value = "";
  }
  event.preventDefault();
}

function taskExists(taskText) {
  const taskListItems = tasksContent.getElementsByTagName("li");
  for (let i = 0; i < taskListItems.length; i++) {
    if (taskListItems[i].textContent.trim().toLowerCase() === taskText) {
      return true;
    }
  }
  return false;
}

  inputContent.addEventListener('focus', removeErrorMesage);

  function removeErrorMesage() {
    errorMessage.textContent = ''
    inputContent.classList.remove('erroTaskExist')
  }
