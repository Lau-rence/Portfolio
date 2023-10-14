//Components
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <Profile />
            <Education />
            <Experience />
            <Projects />
            <Contact />
        </>
     );
}
 
export default Home;