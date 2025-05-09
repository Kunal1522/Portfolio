// queries/getContactMe.ts
import contactMeData from '../data/contactMeData.json';
import { ContactMe } from '../types';

export async function getContactMe(): Promise<ContactMe> {
  return contactMeData.contactMe;
}
