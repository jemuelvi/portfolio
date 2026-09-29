import './skills.css'
function Skills() {
  const skills = [
  "JavaScript",
  "Git/Github",
  "HTML/CSS",
  "C++/C",
  "Java"
];
  return (
    <main>
      <h3>My Skills</h3>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li key={index} >[{skill}]</li>
        ))}
      </ul>
    </main>
  );
}

export default Skills;