import Image from "next/image";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
}

export const ProjectCard = ({ src, title, description }: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image className="w-full object-contain" src={src} alt={title} width={1000} height={1000} />
      <div className="relative p-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};
