import propTypes from 'prop-types';
function SkillTag(skill) {
    return (
        <main>
        <p>{skill.name}</p>
        <p>{skill.type}</p>
        </main>
    );
}



export default SkillTag;