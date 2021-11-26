////link para post
export const API_URLP = "https://backagora.herokuapp.com/api/agora/new-project";
////link para get
const API_URL = "https://backagora.herokuapp.com/api/agora/get-projects";

export const listProjects = async () => {
  return await fetch(API_URL);
};

export const registerProject = async (newProject) => {
  return await fetch(API_URLP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(newProject.name).trim(),
      context: String(newProject.context).trim(),
      date: String(newProject.date).trim(),
      deliverables: String(newProject.deliverables).trim(),
      description: String(newProject.description).trim(),
      evaluationModality: String(newProject.evaluationModality).trim(),
      pedagogyModality: String(newProject.pedagogyModality).trim(),
      performance: String(newProject.performance).trim(),
      picture: String(newProject.picture).trim(),
      resources: Array(newProject.resources),
      tags: Array(newProject.tags),
      competencies: Array(newProject.competencies),
      competenceFramework: String(newProject.competenceFramework).trim(),
    }),
  });
};
