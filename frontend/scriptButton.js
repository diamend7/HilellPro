const postResponse = async () => {
  const todoValue = document.querySelector("#title").value;
  await fetch("http://localhost:8080/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: todoValue }),
  });
};
document.querySelector("#post").addEventListener("click", async function () {
  await postResponse();
});

const deleteResponse = async (id) => {
  await fetch(`http://localhost:8080/todos/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};
document.querySelector("#delete").addEventListener("click", async function () {
  const response = await deleteResponse(
    document.querySelector("#itemId").value
  );
});

const getResponse = async (id) => {
  await fetch(`http://localhost:8080/todos`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};
document.querySelector("#get").addEventListener("click", async function () {
  const response = await getResponse();
});

const putResponse = async (id, text) => {
  await fetch(`http://localhost:8080/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text }),
  });
};
document.querySelector("#put").addEventListener("click", async function () {
  await putResponse(
    document.querySelector("#updateId").value,
    document.querySelector("#updateText").value
  );
});
