// queries/getTimeline.ts
import timelineData from '../data/timelineData.json';
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  // Map over the data to ensure correct typing of timelineType property
  return timelineData.allTimelines.map(item => ({
    ...item,
    timelineType: item.timelineType as 'work' | 'education'
  }));
}
