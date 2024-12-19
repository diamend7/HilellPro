//requests
const express = require("express");
const TodoModel = require("./todo.mondel");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://who1chy:kq4hzSyqyeBdxAl7@cluster0.v5xft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
connect.then(() => console.log(`Connected`));

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log(`Server Running! localhost:8080`);
});

app.post("/todos", (req, res) => {
  const todo = new TodoModel(req.body);
  todo.save().then((response) => res.send(response));
});

app.get("/todos", async (req, res) => {
  TodoModel.find().then((response) => res.send(response));
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.deleteOne({ _id: id })
    .then((response) => {
      if (response.deleteCount === 0) {
        res.status(404).send({ message: "not found" });
      } else {
        res.send({ message: "Todo deleted" });
      }
    })
    .catch((error) => {
      res.send({ message: "server error", error });
    });
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.updateOne({ _id: id }, req.body)
    .then(() => TodoModel.findById(id))
    .then((response) => res.send(response));
});
