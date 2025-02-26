// Interfaces built for data testing
export interface TimelineProps {
  profiles: Profile[];
  presence: PresenceDictionary
}
// properties for the profile component
export interface ProfileProps {
    profile: Interval;
    chartArray: Date[];
}
// properties for the Chart component
export interface ChartProps {
    chartArray: Date[];
}
// Presence data in dictionary form
export interface PresenceDictionary {
[key: string]: {
    presence_intervals: number[][];
    current_status: string;
};
}
  // Profile interval - profile data after manipulation
export interface Interval {
  category: string | null;
  created_at: number;
  photo_url: string | null;
  uid: number;
  name: string;
  current_status:string
  presence_intervals: Date[][]
}
// profile data before manipulation
export interface Profile {
  category: string | null;
  created_at: number;
  photo_url: string | null;
  uid: number;
  name: string;
}
//presence data before manipulation
export interface Presence {
  current_status:string;
  presence_intervals:number[][];
}
