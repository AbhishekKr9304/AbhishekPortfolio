import { skillCategories } from "@/data/skills";

const keywords = skillCategories.flatMap((category) => category.skills);

export function SkillsBanner() {
  return (
    <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
      <ul
        aria-label="Skills"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8  md:gap-x-6"
      >
        {keywords.map((keyword) => (
          <li
            key={keyword}
            className="text-lg font-bold uppercase tracking-tight text-white/20 transition-colors duration-300 hover:text-accent md:text-xl"
          >
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
}
