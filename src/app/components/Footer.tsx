import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
                    &copy; {new Date().getFullYear()} StaticFolio. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <Github className="h-6 w-6" />
                    </Link>
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <Linkedin className="h-6 w-6" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
