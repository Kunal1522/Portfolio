// queries/getProjects.ts
import projectsData from '../data/projectsData.json';
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  return projectsData.projects;
}
