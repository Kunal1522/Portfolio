// queries/getProfileBanner.ts
import profileBannerData from '../data/profileBannerData.json';
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return profileBannerData.profilebanner;
}
