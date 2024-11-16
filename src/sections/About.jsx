import { aboutFeaturs } from "../constants";
import { about } from "../constants/images";
const About = () => {
    return <section id="about">
        <div className="container">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

                <div className="flex flex-col gap-y-8 lg:w-[53%] w-auto flex-shrink -0 text-center lg:text-start">
                    <div className="flex flex-col gap-y-4">
                        <h2 className="relative section-title-after text-h2 text-gray-10">
                            Your Focus Journey Starts Here
                        </h2>
                        <p className="text-base font-medium text-gray-60">
                            Stay on track, level up, and unlock rewards as you complete your tasks and challenges.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {aboutFeaturs.map((feature) => (
                            <div key={feature.title} className="group flex flex-col basis-[240px] flex-grow border border-solid border-gray-10 rounded-3xl p-4 text-start hover:bg-gray-10 transition-colors duration-300"> 
                                <p className="text-xl font-semibold text-gray-10 !leading-[normal] group-hover:text-white">
                                    {feature.title}
                                </p>
                                <p className="text-base font-medium text-gray-60 !leading-[normal] group-hover:text-gray-90">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex lg:w-[47%] w-full">
                <div className="lg:max-w-[500px] max-w-none max-h-[450px] w-full rounded-4xl overflow-hidden">
                    <img src={about} alt="focusimage" />
                </div>
            </div>
            </div>

            
        </div>
    </section>;
};

export default About;
