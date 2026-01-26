//registry de proyectos

import TranslationChecker from "./translation-checker";
import HelloProject from "./hello-project";
import MCPTest from "./mcp-project";
//
export const projectsMap = {
  "translation-checker": TranslationChecker,
  "hello-project": HelloProject,
  "mcp-project": MCPTest,
};

export type ProjectSlug = keyof typeof projectsMap;
