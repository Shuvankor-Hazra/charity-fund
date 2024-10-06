import Img1 from '../../assets/image1.png';

const Banner2 = () => {
    return (

        <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
            <div className="container md:h-[500px] flex items-center justify-center py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 grid-flow-row md:grid-flow-col">
                    {/* Text Container - Bottom on mobile, left on desktop */}
                    <div className='lg:max-w-[400px] space-y-6 order-2 md:order-1'>
                        <h2 className='text-2xl md:text-4xl font-semibold mb-4'>Support Those in Need</h2>
                        <ul className='flex flex-col gap-2 md:gap-4 list-inside list-disc'>
                            <li className='font-medium'>Focus on essential tasks and impactful actions rather than just the processes involved.
                            </li>
                            <li className='font-medium'>Always offer without expecting anything in return, and always accept with gratitude.
                            </li>
                            <li className='font-medium'>Generosity does not just come before receiving; it is the very purpose of it.
                            </li>
                        </ul>
                        <button className="btn-primary">Get Started</button>
                    </div>
                    {/* Img Container - Top on mobile, right on desktop */}
                    <div className='order-1 md:order-2'>
                        <img
                            src={Img1}
                            alt=""
                            className='mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner2;
