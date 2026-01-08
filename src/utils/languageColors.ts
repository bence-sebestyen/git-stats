export const languageColors: Record<string, string> = {
  TypeScript: "bg-[#3178c6]",
  JavaScript: "bg-[#f1e05a]",
  Python: "bg-[#3572A5]",
  Java: "bg-[#b07219]",
  Go: "bg-[#00ADD8]",
  Rust: "bg-[#dea584]",
  C: "bg-[#555555]",
  "C++": "bg-[#f34b7d]",
  "C#": "bg-[#178600]",
  Ruby: "bg-[#701516]",
  Vue: "bg-[#41b883]",
  Dart: "bg-[#00B4AB]",
  R: "bg-[#198CE7]",
  "Jupyter Notebook": "bg-[#DA5B0B]",
  Swift: "bg-[#F05138]",
  PHP: "bg-[#4F5D95]",
  HTML: "bg-[#e34c26]",
  CSS: "bg-[#563d7c]",
  SCSS: "bg-[#c6538c]",
  Shell: "bg-[#89e051]",
  Kotlin: "bg-[#A97BFF]",
  default: "bg-slate-500",
};

export const getLanguageColor = (language: string | null): string => {
  if (!language) return languageColors.default;
  return languageColors[language] || languageColors.default;
};
