import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, UserCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <section className="px-4 py-8 md:py-18 w-full mx-auto text-center flex flex-col items-center [background-color:#f5f5f5]">
      {/* Profile Image */}
      <div className="mb-8">
        <Image
          src="/images/profile.jpg"
          alt="StaticFolio Logo"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900  leading-tight">
        Hello, my name is <span className="text-indigo-600 ">Prachi Chauhan</span>
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-gray-600  max-w-2xl mb-10">
        I&apos;m a passionate developer creating modern and responsive web applications. Explore my work and learn more about my journey in the world of technology.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 transition hover:scale-105"
        >
          <Briefcase className="mr-2 h-5 w-5" />
          View Projects
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

        <Link
          href="/about"
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50  transition hover:scale-105"
        >
          <UserCircle className="mr-2 h-5 w-5" />
          About Me
        </Link>
      </div>
    </section>
  );
}
