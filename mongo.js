const mongoose = require("mongoose");

const URL =
  "mongodb+srv://new_user09:user09009@cluster0.yztqp.mongodb.net/test-backend/?retryWrites=true&w=majority";
const url = process.env.TEST_MONGODB_URI || URL;

mongoose.set("strictQuery", false);
mongoose
  .connect(url)
  .then(() => console.log("connection established"))
  .catch((err) => console.log(err));

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "MongoDB is cool... baby",
  important: true,
});

note.save().then((result) => {
  console.log("note saved! \n", result);
  mongoose.connection.close();
});

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
