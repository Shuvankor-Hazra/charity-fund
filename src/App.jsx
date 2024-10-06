import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurVision from "./components/OurVision/OurVision";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter";
import VideoBanner from "./components/VideoBanner/VideoBanner";


const App = () => {
  return (
    <>
      <main className="overflow-x-hidden dark:bg-gray-900 bg-white dark:text-white">
        <Navbar />
        <Hero />
        <OverviewCounter />
        <OurVision />
        <Banner />
        <Banner2 />
        <VideoBanner />
        <Blogs />
        <Footer />
      </main>
    </>
  );
}

export default App;
