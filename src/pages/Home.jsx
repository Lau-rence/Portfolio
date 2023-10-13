//Components
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Projects from "../components/Projects";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <Profile />
            <Education />
            <Projects />
        </>
     );
}
 
export default Home;