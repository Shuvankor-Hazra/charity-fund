import { motion } from "framer-motion";

const FadeAnimation = (delay) => {
    return {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};

const OurVision = () => {
    return (
        <div className="container my-16 bg-white dark:bg-gray-900 dark:text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <motion.div
                    variants={FadeAnimation(0.2)}
                    initial="initial"
                    whileInView="animate"
                    className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-t-green-600 dark:bg-slate-800">
                    <h2 className="text-xl font-semibold">Our Vision</h2>
                    <p>Seamlessly engineer cross-media ROI and covalent relationships. Holisticly exploit synergistic applications without unique outside the box thinking. Progressively synthesize proactive.</p>
                    <a href="#" className="inline-block hover:text-primary border-b-2  hover:border-primary">Learn More</a>
                </motion.div>

                <motion.div
                    variants={FadeAnimation(0.4)}
                    initial="initial"
                    whileInView="animate"
                    className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-t-yellow-500 dark:bg-slate-800">
                    <h2 className="text-xl font-semibold">Our Mission</h2>
                    <p>Efficiently initiate multimedia based quality vectors via reliable e-services. Competently integrate premier imperatives with interoperable applications. Proactively strategize compelling infomediaries.</p>
                    <a href="#" className="inline-block hover:text-primary border-b-2  hover:border-primary">Learn More</a>
                </motion.div>
            </div>
        </div>
    );
}

export default OurVision;
