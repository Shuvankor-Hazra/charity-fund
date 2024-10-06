
import Img from "../../assets/image1.png";

const HeroImg = {
    backgroundImage: `url(${Img})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100%",
    width: "100%",

}

const Hero = () => {
    return (
        <div style={HeroImg}>
            <div className="min-h-[650px] md:max-h-[750px] bg-gradient-to-r from-black/80 to-primary/60 pt-3 pb-10 md:pt-48">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-white">
                        {/* Hero Text Section */}
                        <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:min-w-[450px]">
                            <h1 className="text-5xl lg:text-7xl font-bold">Join Us in Changing Lives</h1>
                            <p>Quickly conceptualize backend web services and stand-alone convergence. Continually myocardinate user-centric innovation without enabled users. Holisticly scale magnetic networks after.</p>
                            <div className="space-x-4">
                                <button className="btn-primary">Get Started</button>
                                <button className="btn-outline">Login</button>
                            </div>
                        </div>
                        {/* Hero Form Section */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
