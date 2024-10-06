

const VideoBanner = () => {
    return (
        <div className="bg-primary">
            <div className="container py-8 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
                    {/* Video Section */}
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/j6Jop6K5ag8?si=bLow4qHxC-m41XYo" title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            className="w-full aspect-video"
                        ></iframe>
                    </div>
                    {/* Text Section */}
                    <div className="space-y-4 text-center md:text-left text-white">
                        <h2 className="text-4xl font-bold">Watch Our Video</h2>
                        <p>Interactively integrate distinctive technologies vis-a-vis enabled technology. Synergistically simplify cooperative web-readiness with interactive markets. Competently evolve cost effective paradigms through worldwide information. Continually engage multidisciplinary channels rather than functional users.</p>
                        <button className="btn-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoBanner;
