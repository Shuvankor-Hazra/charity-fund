
import { motion } from "framer-motion";
import { useState } from "react";
import Img from "../../assets/image1.png";

const HeroImg = {
    backgroundImage: `url(${Img})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
}

const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};

const Hero = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        amount: 0,
    });

    const handleClick = (e) => {
        const name = e.target.name;
        setData((previousData) => {
            return {
                ...previousData,
                [name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        //! I will handle the data after working on backend code
    }

    return (
        <div style={HeroImg}>
            <div className="min-h-[650px] md:max-h-[750px] bg-gradient-to-r from-black/80 to-primary/60 pt-32 pb-10 md:pt-48 md:pb-32">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-white">
                        {/* Hero Text Section */}
                        <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:min-w-[450px]">
                            <motion.h1
                                variants={FadeUp(0.2)}
                                initial="initial"
                                animate="animate"
                                className="text-5xl lg:text-7xl font-bold">Join Us in Changing Lives</motion.h1>
                            <motion.p
                                variants={FadeUp(0.4)}
                                initial="initial"
                                animate="animate"
                            >Quickly conceptualize backend web services and stand-alone convergence. Continually myocardinate user-centric innovation without enabled users. Holisticly scale magnetic networks after.</motion.p>
                            <div className="space-x-4">
                                <motion.button
                                    variants={FadeUp(0.6)}
                                    initial="initial"
                                    animate="animate"
                                    className="btn-primary">Get Started</motion.button>
                                <motion.button
                                    variants={FadeUp(0.8)}
                                    initial="initial"
                                    animate="animate"
                                    className="btn-outline">Login</motion.button>
                            </div>
                        </div>
                        {/* Hero Form Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="w-[90%] md:w-[400px] mx-auto p-6 bg-white dark:bg-black text-slate-800 dark:text-white/80 rounded-2xl shadow-md">
                            <div>
                                <h2 className="text-lg text-center font-semibold">Quick Donation Form</h2>
                                <div className="flex items-center justify-center gap-8 py-4 font-bold">
                                    <button className="btn-square">$01</button>
                                    <button className="btn-square">$05</button>
                                    <button className="btn-square">$10</button>
                                    <button className="btn-square">$99</button>
                                </div>
                                {/* Input Section */}
                                <div className="space-y-6">
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        placeholder="Amount"
                                        defaultValue={1}
                                        min={1}
                                        max={100}
                                        onChange={handleClick}
                                        className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800"
                                    />
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        onChange={handleClick}
                                        className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        onChange={handleClick}
                                        className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800"
                                    />
                                    <button
                                        onClick={handleSubmit}
                                        className="btn-primary w-full">Donate Now</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
