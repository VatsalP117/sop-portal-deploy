const express = require("express");

require("dotenv").config();
require("./controllers/db");
const Project = require("./models/Project");
const User = require("./models/User");
const ProjectStudent = require("./models/ProjectStudent");
const AuthRouter = require("./routes/auth");
const studentRouter = require("./routes/student");
const facultyRouter = require("./routes/faculty");
const {
  studentMiddleware,
  facultyMiddleware,
} = require("./controllers/middleware");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

const app = express();

app.use(express.static("public"));

const allowedOrigin = "https://sop-portal-rose.vercel.app";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the base path for all routes
app.use("/projectalloc", (req, res, next) => {
  console.log(req.path);
  next();
});

// Now, all paths are under the /projectalloc base path
app.get("/projectalloc/student", (req, res) => {
  res.sendFile(__dirname + "/public/student.html");
});

app.get("/projectalloc/faculty", (req, res) => {
  res.sendFile(__dirname + "/public/faculty.html");
});

app.get("/projectalloc/applications", (req, res) => {
  res.sendFile(__dirname + "/public/applications.html");
});

app.get("/projectalloc/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/projectalloc/404", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.get("/projectalloc/project", (req, res) => {
  console.log("requested project");
  res.sendFile(__dirname + "/public/project.html");
});

app.get("/projectalloc/student-project", (req, res) => {
  res.sendFile(__dirname + "/public/student-project.html");
});

app.get("/projectalloc/csv", (req, res) => {
  res.sendFile(__dirname + "/public/csv.html");
});

app.get("/projectalloc/admin", (req, res) => {
  res.sendFile(__dirname + "/public/admin.html");
});
app.use("/api/auth/*", (req, res, next) => {
  const newPath = req.originalUrl.replace(
    "/api/auth",
    "/projectalloc/api/auth"
  );
  res.redirect(newPath);
});
app.use("/api/student/*", (req, res, next) => {
  const newPath = req.originalUrl.replace(
    "/api/student",
    "/projectalloc/api/student"
  );
  res.redirect(newPath);
});
app.use("/api/faculty/*", (req, res, next) => {
  const newPath = req.originalUrl.replace(
    "/api/faculty",
    "/projectalloc/api/faculty"
  );
  res.redirect(newPath);
});
app.use("/student", (req, res, next) => {
  const newPath = req.originalUrl.replace("/student", "/projectalloc/student");
  res.redirect(newPath);
});
app.use("/faculty", (req, res, next) => {
  const newPath = req.originalUrl.replace("/faculty", "/projectalloc/faculty");
  res.redirect(newPath);
});
// app.use("/project", (req, res, next) => {
//   const newPath = req.originalUrl.replace("/project", "/projectalloc/project");
//   res.redirect(newPath);
// });
app.use((req, res, next) => {
  // Check if the request path matches "/project" and contains a query parameter "projectId"
  console.log(req.path);
  next();
});
app.use("/student-project", (req, res, next) => {
  const newPath = req.originalUrl.replace(
    "/student-project",
    "/projectalloc/student-project"
  );
  res.redirect(newPath);
});
app.use("/projectalloc/api/auth", AuthRouter);
app.use("/projectalloc/api/student", studentMiddleware, studentRouter);
app.use("/projectalloc/api/faculty", facultyMiddleware, facultyRouter);

app.get("/projectalloc/api/hello", async (req, res) => {
  const entries = await ProjectStudent.findAll({
    where: { status: "Accepted" },
  });
  let csvContent = "data:text/csv;charset=utf-8,";
  const columns = [
    "project_id",
    "title",
    "faculty_name",
    "student_id",
    "student_name",
    "category",
  ];
  csvContent += columns.join(",") + "\r\n";
  for (let i = 0; i < entries.length; i++) {
    const student = await User.findByPk(entries[i].users_id);
    const project = await Project.findByPk(entries[i].project_id);
    const faculty = await User.findByPk(project.facultyId);
    if (entries[i].status == "Accepted") {
      let rowArr = [
        project.project_id,
        project.title,
        faculty.users_name,
        student.users_id,
        student.users_name,
        entries[i].category,
      ];
      let row = rowArr.join(",");
      csvContent += row + "\r\n";
    }
  }
  res.send(csvContent);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
