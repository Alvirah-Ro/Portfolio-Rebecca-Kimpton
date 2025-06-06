import TechnicalSkills from './TechnicalSkills';
import Certifications from './Certifications';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Summary from './Summary';

export default function Resume() {
    return (
        <div>
            <Summary />
            <TechnicalSkills />
            <Certifications />
            <WorkExperience />
            <Education />
        </div>
    )
}