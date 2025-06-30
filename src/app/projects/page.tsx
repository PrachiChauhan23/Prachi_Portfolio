import ProjectCard from "../components/ProjectCard";
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Code Editor',
    description:
      'Web Code Editor is a simple online tool to write and preview HTML, CSS, and JavaScript in real time. It also features sorting visualizations like Bubble Sort, Quick Sort, and Merge Sort. The editor is designed with a clean interface to make coding and learning easier.',
    imageUrl: '/images/codeEditor.jpeg',
    projectUrl: '#',
  },
  {
    id: '2',
    title: 'Flappy Bird App',
    description:
      'Flappy Bird game built using Java Swing, showcasing Java proficiency and GUI development skills. Implemented game mechanics, collision detection, scoring, demonstrating problem-solving abilities in game development.',
    imageUrl: '/images/flappyBird.png',
    projectUrl: '#',
  },
  {
    id: '3',
    title: 'Chat Application',
    description:
      'A real-time chat application using React for the frontend and Firebase for the backend. The app supports user authentication, instant messaging, and live updates using Firebase Firestore.',
    imageUrl: '/images/chatApp.jpg',
    projectUrl: 'https://github.com/PrachiChauhan23/chat-app',
  },
  {
    id: '4',
    title: 'Arrivio',
    description:
      'An  application that allows users to store and manage their digital memories, including images, videos, and personal messages. The platform offers subscription-based storage plans and ensures that users can preserve their digital content securely for future access.',
    imageUrl: '/images/placeholder.jpg',
    projectUrl: 'https://app.arrivio.net/login',
  },
 
];
export default function ProjectsPage() {
  return (
    <section className="w-full bg-[#f5f5f5] py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 ">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>

  );
}

