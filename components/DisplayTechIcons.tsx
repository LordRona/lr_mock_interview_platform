import Image from "next/image";
import { cn, getTechLogos } from "@/lib/utils";

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack);

  // Add debug logging to verify data
  console.log("TechIcons data:", techIcons);

  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => {
        // Create a completely unique key
        const uniqueKey = `${tech}-${url}-${index}-${Math.random().toString(36).substring(2, 9)}`;
        console.log(`Rendering tech icon with key: ${uniqueKey}`);
        
        return (
          <div
            key={uniqueKey}
            className={cn(
              "relative group bg-dark-300 rounded-full p-2 flex flex-center",
              index >= 1 && "-ml-3"
            )}
          >
            <span className="tech-tooltip">{tech}</span>
            <Image
              src={url}
              alt={tech}
              width={100}
              height={100}
              className="size-5"
            />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTechIcons;