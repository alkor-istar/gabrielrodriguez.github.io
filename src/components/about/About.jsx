import Reveal from "../common/Reveal";

export default function About() {

    return (
        <section id="about" className="py-20 px-6">
            <Reveal>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-heading mb-12 text-center text-white">About Me</h2>
                    <div className="gradient-border p-8">
                        <p className="text-gray-300 leading-relaxed text-lg">
                            <span className="text-2xl font-bold">R</span>esults-oriented, self-taught <span
                                className="text-accent font-semibold">Software Engineer</span> with <span
                                    className="text-primary font-semibold">{new Date().getFullYear() - 2019} years of experience </span>
                            building scalable, production-grade systems. My background spans full-stack web development, distributed
                            systems, and data pipelines, with a strong focus on backend engineering, performance, and clean system
                            design. I enjoy working close to the core of a product, where technical decisions have a direct impact
                            on reliability, scalability, and user experience.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg mt-6">
                            <span className="text-2xl font-bold">I</span>n recent years, I’ve worked primarily with
                            <span className="text-accent font-semibold"> TypeScript, Node.js, Python, React,
                                and cloud-native architectures on AWS</span>. I’ve designed public APIs, optimized
                            streaming and batch data pipelines using Kafka and Flink, and helped maintain microservice
                            platforms running on Kubernetes. I value simple, maintainable solutions, thoughtful abstractions,
                            and teams that care about code quality, testing, and long-term ownership.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg mt-6">
                            <span className="text-2xl font-bold">E</span>arlier in my carreer,
                            I worked as an electronic and control systems engineer in the nuclear industry,
                            designing <span className="text-primary font-semibold">safety-critical systems</span> and teaching
                            <span className="text-accent font-semibold"> C/C++</span> at the university level. That background
                            shaped how I approach software today: with <span className="text-primary font-semibold">attention
                                to detail, a strong sense of responsibility, and a preference for systems that are correct,
                                observable, and resilient</span>. I’m always interested in
                            challenging problems, pragmatic teams, and products that solve real-world needs.
                        </p>
                    </div>
                </div>
            </Reveal>
        </section>

    );
}
