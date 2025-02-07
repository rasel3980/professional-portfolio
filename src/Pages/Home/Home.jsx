import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import EducationalQualification from "../../Components/EducationalQualification/EducationalQualification";
import Skills from "../../Components/Skills/Skills";
import Project from "../Project/Project";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Project></Project>
            <About></About>
            <Skills></Skills>
            <EducationalQualification></EducationalQualification>
            <Contact></Contact>
        </div>
    );
};

export default Home;