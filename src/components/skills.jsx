import './skills.css'
import SkillTag from './SkillTag.jsx'
function Skills() {
  const skills = [
  { type: "Known", name: "JavaScript" },
  { type: "Known", name: "Git/Github" },
  { type: "Known", name: "HTML/CSS" },
  { type: "Known", name: "C++/C" },
  { type: "Known", name: "Java" },
  { type: "Learning", name: "React" },
  {type: "Learning", name: "Node.js"},
  {type:"Learning", name: "Godot Engine"},
];
  return (
    <>
      <h3>My Skills</h3>
      <h4 className="skill-known"> Known</h4>
      <ul className="skill-known">
        {skills.map((skill, index) => (
          skill.type==="Known" ? (
            <li key={index} ><SkillTag name={skill.name} type={skill.type}/></li>
          ) : null
          
        ))}
      </ul>
      <h4 className="skill-learning"> Learning</h4>
      <ul className="skill-learning">
        {skills.map((skill, index) => (
          skill.type==="Learning" ? (
            <li key={index} ><SkillTag name={skill.name} type={skill.type}/></li>
          ) : null
          
        ))} 
      </ul>
    </>  
  );
}

export default Skills;