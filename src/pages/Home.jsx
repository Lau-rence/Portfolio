//Components
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <Profile />
            <Education />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </>
     );
}
 
export default Home;