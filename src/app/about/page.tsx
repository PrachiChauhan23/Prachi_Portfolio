import Image from 'next/image';
import { Briefcase, Code, Coffee, Award } from 'lucide-react';

const skills = [
    { name: 'Java', icon: Code },
    { name: 'React', icon: Code },
    { name: 'Next.js', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'TypeScript', icon: Code },
    // { name: 'Node.js', icon: Code },
];

const experience = [

    {
        role: 'Software Engineer Intern',
        company: 'Unthinkable Solutions',
        duration: 'Jan 2024 - Present',
        description:
            'Developed responsive and user-friendly interfaces using React and React Native, focusing on performance and smooth user experience.Contributed to feature development and collaborated with the team to deliver high- quality web and mobile applications.',
        icon: Briefcase,
    },
    {
        role: "Open Source Contributor",
        company: "GIRLSCRIPT SUMMER OF CODE'23",
        duration: 'May 2023 - Aug 2023',
        description:
            'Contributed to front-end development by enhancing UI and implementing creative designs in open-source projects.Improved skills in version control and collaborative development practices through active participation.',
        icon: Briefcase,
    }
];

export default function AboutPage() {
    return (
        <section className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-18 [background-color:#f5f5f5]">
            <div className="flex flex-col items-center">
                {/* Profile Image */}
                <Image
                    src="/images/profile.jpg"
                    alt="Profile Picture"
                    width={150}
                    height={150}
                    className="rounded-full mb-8 shadow-xl border-4 border-indigo-500"
                />

                {/* Intro */}
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 ">
                    About Me
                </h1>
                <p className="text-lg text-gray-600  max-w-3xl text-center mb-12">
                    Hello! I&apos;m a dedicated and results-oriented software developer with a passion for
                    creating elegant and efficient solutions. .Eager to
                    contribute to innovative projects, enhance code quality, and explore emerging technologies to drive future growth. Always looking for
                    opportunities to learn and improve my skills.
                </p>

                {/* Skills & Experience */}
                <div className="grid md:grid-cols-2 gap-10 w-full ">
                    {/* Skills Card */}
                    <div className="bg-white  rounded-lg shadow-lg p-6 transition-shadow hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-600 ">
                            <Award className="h-6 w-6 mr-2" />
                            My Skills
                        </h2>
                        <ul className="space-y-3">
                            {skills.map((skill) => (
                                <li key={skill.name} className="flex items-center text-gray-800 ">
                                    <skill.icon className="mr-3 h-5 w-5 text-indigo-500" />
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Experience Card */}
                    <div className="bg-white  rounded-lg shadow-lg p-6 transition-shadow hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-600 ">
                            <Briefcase className="h-6 w-6 mr-2" />
                            Professional Experience
                        </h2>
                        <div className="space-y-6">
                            {experience.map((exp) => (
                                <div key={exp.company}>
                                    <h3 className="text-xl font-bold text-gray-900 ">{exp.role}</h3>
                                    <p className="text-sm text-gray-500 ">
                                        {exp.company} | {exp.duration}
                                    </p>
                                    <p className="mt-1 text-gray-700">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
