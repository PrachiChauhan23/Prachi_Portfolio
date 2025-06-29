import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
}

export default function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      <div className="relative aspect-video w-full border-none" >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
      </div>

      {projectUrl && (
        <div className="p-4 pt-0 mt-auto">
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full rounded border border-transparent bg-gray-100 text-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200 transform hover:scale-[1.03] font-medium py-1.5 px-3 text-sm"
          >
            View Project <ExternalLink className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
