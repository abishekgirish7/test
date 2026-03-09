import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Error fetching portfolio data:", err));
  }, []);

  if (!data) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <header className="hero">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <p>{data.about}</p>
      </header>

      <section>
        <h3>Skills</h3>
        <div className="skills">
          {data.skills.map((skill, index) => (
            <span key={index} className="badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h3>Projects</h3>
        <div className="projects">
          {data.projects.map((project) => (
            <div className="card" key={project.id}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Contact</h3>
        <p>Email: {data.contact.email}</p>
        <p>
          LinkedIn:{" "}
          <a href={data.contact.linkedin} target="_blank" rel="noreferrer">
            Profile
          </a>
        </p>
      </section>
    </div>
  );
}