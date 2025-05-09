// queries/getCertifications.ts
import certificationsData from '../data/certificationsData.json';
import { Certification } from '../types';

export async function getCertifications(): Promise<Certification[]> {
  return certificationsData.allCertifications;
}
