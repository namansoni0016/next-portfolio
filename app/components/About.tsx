import { Section } from "./Section";
import Image from "next/image";

export function About() {
    return (
        <Section
            id="about"
            eyebrow="01 / About"
            title="Engineer by craft. Product thinker by instinct."
        >
            <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
                <div className="group relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-4xl">
                    <Image
                        src="/about.jpg"
                        alt="Naman Soni"
                        fill
                        priority
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                </div>
                <div>
                    <p className="text-sm text-zinc-300 md:text-lg">
                        I am a versatile software engineer with a strong focus on designing and developing scalable, high-performance web applications. 
                        My expertise spans across front-end technologies like React.js, Next.js & TailwindCSS, and MaterialUI combined with back-end technologies like Next.js, Node.js, MongoDB, MySQL, PostgreSQL and Laravel. 
                        I am passionate about crafting seamless user interfaces and efficient back-end architectures that not only solve real-world problems but also drive business success. 
                        By continuously refining my skills and staying updated with the latest technologies, I aim to deliver innovative, user-centric solutions that elevate the overall experience and foster business growth.
                    </p>
                    <br />
                    <p className="text-sm text-zinc-300 md:text-lg">
                        I have earned a Master of Technology (MTech) in Computer Science from the prestigious Indraprastha Institute of Information Technology (IIIT Delhi). 
                        Additionally, I hold a Bachelor of Engineering (BE) in Computer Engineering from Silver Oak College of Engineering & Technology (GTU). 
                        My academic journey has equipped me with both theoretical knowledge and practical expertise, enabling me to excel in solving complex problems and driving innovation in technology.
                    </p>
                </div>
            </div>
        </Section>
    );
}