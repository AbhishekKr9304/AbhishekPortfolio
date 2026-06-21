type ProjectDetails = {
  title: string;
  technology: string;
  description: string;
};

export default function ProjectCard({
  title,
  technology,
  description,
}: ProjectDetails) {
  return (
    <div className= "border rounded-xl p-6 m-4 shadow-md">
        <h2 className= "text-2xl font-bold">
            {title}
        </h2>
        <p className= "text-sm mt-2">
            {technology}
        </p>
        <p className= "mt-4">
            {description}
        </p>
    </div>
  );
}