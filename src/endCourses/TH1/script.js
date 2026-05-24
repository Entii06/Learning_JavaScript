const addTodoBtn = document.getElementById("addTodoBtn");
const name = document.getElementById("todo");

if (addTodoBtn) {
  addTodoBtn.addEventListener("click", () => {
    console.log(name.value);

    const randomId = Math.floor(Math.random() * 100000000);

    const myTodo = {
      id: randomId,
      name: name.value,
    };
    //check xem có tồn tại chưa tránh ghi đè
    const currentTodoStr = localStorage.getItem("todo");
    if (currentTodoStr) {
      //check xem có chưa
      //có rồi thì lấy ra thành mảng để push
      const currentTodo = JSON.parse(currentTodoStr);
      //push vô
      currentTodo.push(myTodo);
      //push rồi chuyển sang string nhét vô lại :))
      localStorage.setItem("todo", JSON.stringify(currentTodo));
    } else {
      localStorage.setItem("todo", JSON.stringify([myTodo]));
    }

    window.location.href = "home.html";
  });
}

const generateTodoTable = () => {
  const todoListStr = localStorage.getItem("todo");
  if (todoListStr) {
    const todoList = JSON.parse(todoListStr);
    console.log(todoList);

    const tbody = document.querySelector("#todoList tbody");
    todoList.forEach((value, index) => {
      tbody.innerHTML += `
         <tr>
          <td>${value.id}</td>
          <td>${value.name}</td>
          <td>
            <button 
              data-id = ${value.id} 
              class="btn-delete">Delete
            </button>
          </td>
        </tr>
        `;
    });
  }
};
generateTodoTable();

const deleteBtns = document.querySelectorAll(".btn-delete");
if (deleteBtns) {
  deleteBtns.forEach((btn, index) => {
    console.log(btn);
    //lấy từng nút gắn event vô cho nó rồi mới làm hàm xóa
    btn.addEventListener("click", () => {
      //tạo thuộc tính cho dễ lấy
      const id = btn.getAttribute("data-id");
      handleDeleteTodo(id);
    });
  });
}

const handleDeleteTodo = (id) => {
  const todoListStr = localStorage.getItem("todo");
  if (todoListStr) {
    const todoList = JSON.parse(todoListStr);

    //data id dưới dạng string
    // trick lỏ + ""
    const newTodo = todoList.filter((value, index) => {
      return value.id + "" !== id;
    });
    console.log(newTodo);
    localStorage.setItem("todo", JSON.stringify(newTodo));
    window.location.reload();
    //reload lại trang
  }
};
