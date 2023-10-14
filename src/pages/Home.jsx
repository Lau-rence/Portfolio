//Components
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <Profile />
            <Education />
            <Experience />
            <Projects />
        </>
     );
}
 
export default Home;