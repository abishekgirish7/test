import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const portfolioData = {
  name: "Your Name",
  title: "Engineer | MBA Candidate | Builder",
  about:
    "I enjoy building products, solving operational problems, and working at the intersection of engineering, business, and design.",
  skills: ["Python", "Excel", "React", "Node.js", "SQL"],
  projects: [
    {
      id: 1,
      title: "Project One",
      description: "A short description of your project.",
      link: "https://github.com/yourusername/project-one"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Another project with measurable impact.",
      link: "https://github.com/yourusername/project-two"
    }
  ],
  contact: {
    email: "youremail@example.com",
    linkedin: "https://www.linkedin.com/in/yourprofile"
  }
};

app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});

app.get("/api/portfolio", (req, res) => {
  res.json(portfolioData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});