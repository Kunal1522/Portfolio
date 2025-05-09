// queries/getWorkPermit.ts
import workPermitData from '../data/workPermitData.json';
import { WorkPermit } from '../types';

export async function getWorkPermit(): Promise<WorkPermit> {
  const workPermit = workPermitData.workPermit;
  // Convert the string date to a Date object
  return {
    ...workPermit,
    expiryDate: new Date(workPermit.expiryDate)
  };
}
