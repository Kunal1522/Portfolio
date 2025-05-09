// queries/getSkills.ts
import skillsData from '../data/skillsData.json';
import { Skill } from '../types';

export async function getSkills(): Promise<Skill[]> {
  return skillsData.allSkills;
}
