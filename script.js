function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const del = document.createElement("span");
  del.textContent = "❌";
  del.onclick = () => li.remove();

  li.appendChild(del);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}