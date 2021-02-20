import express from "express";

const app = express();
const port = 8080 || process.env.PORT;
const mongoPassword = process.env.MONGO_PASSWORD;

mongoose.connect(`mongodb+srv://admin:${mongoPassword}@crib-chat-backend.ey1nx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
})

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello wrld");
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
