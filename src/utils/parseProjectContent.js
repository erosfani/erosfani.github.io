const contentFields = ['title', 'subtitle', 'summary', 'details'];

export default function parseProjectContent(markdown) {
  const projects = Object.create(null);
  let projectId = null;
  let field = null;
  let lines = [];
  let fence = null;

  const saveField = () => {
    if (!projectId || !field) return;
    if (Object.hasOwn(projects[projectId], field)) {
      throw new Error(`Duplicate ${field} field for project "${projectId}".`);
    }
    projects[projectId][field] = lines.join('\n').trim();
  };

  for (const line of markdown.replace(/\r\n?/g, '\n').split('\n')) {
    const fenceMarker = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (fence || fenceMarker) {
      if (!fence) {
        fence = fenceMarker[1];
      } else if (fenceMarker && fenceMarker[1][0] === fence[0]
        && fenceMarker[1].length >= fence.length && !fenceMarker[2].trim()) {
        fence = null;
      }
      if (projectId && field) lines.push(line);
      continue;
    }

    const projectHeading = line.match(/^#\s+([a-z0-9]+(?:-[a-z0-9]+)*)\s*$/);
    const fieldHeading = line.match(/^##\s+(title|subtitle|summary|details)\s*$/i);

    if (projectHeading) {
      saveField();
      projectId = projectHeading[1];
      if (Object.hasOwn(projects, projectId)) {
        throw new Error(`Duplicate project ID "${projectId}" in projects.md.`);
      }
      projects[projectId] = {};
      field = null;
      lines = [];
    } else if (fieldHeading) {
      if (!projectId) throw new Error('Project fields must follow a # project-id heading.');
      saveField();
      field = fieldHeading[1].toLowerCase();
      lines = [];
    } else if (projectId && field) {
      lines.push(line);
    }
  }

  if (fence) throw new Error('Unclosed code fence in projects.md.');
  saveField();

  for (const [id, content] of Object.entries(projects)) {
    for (const name of contentFields) {
      if (!content[name]) throw new Error(`Missing ${name} field for project "${id}".`);
    }
  }

  return projects;
}
