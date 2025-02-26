// In this file we process all the data and render the chart and profiles after processing the data
import React from 'react';
import Box from '@mui/material/Box'; 
import Chart from '../Chart/Chart'
import ProfileElem from '../Profile/Profile'
import { TimelineProps, PresenceDictionary, Profile, Presence, Interval } from '../../testing/interfaces';

let chartStartEnd: Date[] = []

function daysSince(date1:Date, date2:Date) {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const days = (timeDiff / (1000 * 3600 * 24));
  return days;
}
// Process the incoming data into usable data
// this function will take in the presence data and profiles data and return a new array of processed data
const processTimelineData = (presence: PresenceDictionary, profiles:Profile[]): Interval[]=> {
  
  let now = new Date();
  return profiles.reduce((filteredList:Interval[]=[], profile: Profile) => {
    let presenceData:Presence = presence[profile.uid]?presence[profile.uid]:{current_status:'',presence_intervals:[]}
    let newPresenceArray = presenceData.presence_intervals.map((intArray)=>{
      let intStartDate = new Date(intArray[0])
      let intEndDate = new Date(intArray[1])
      let start = daysSince(now, intStartDate)
      let end = daysSince(now, intEndDate)
      // sets the inital start/end of chart values
      if(!chartStartEnd[0]) chartStartEnd[0] =  intStartDate
      if(!chartStartEnd[1]) chartStartEnd[1] =  intEndDate
      // updates the start/end of chart values
      if(start > daysSince( now, chartStartEnd[0])) chartStartEnd[0] =  intStartDate
        if(end < daysSince( now, chartStartEnd[1])) chartStartEnd[1] = intEndDate
        return [intStartDate, intEndDate]
      })
    // return a proccessed profile that includes status and presence intervals
    let newProfile: Interval = {
      category: profile.category,
      created_at: profile.created_at,
      photo_url: profile.photo_url,
      uid: profile.uid,
      name: profile.name,
      current_status: presenceData.current_status,
      presence_intervals: newPresenceArray
      }

    if(presenceData.presence_intervals.length) filteredList = [...filteredList, newProfile]
    return filteredList
  }, []);
};


const Timeline: React.FC<TimelineProps> = ({ presence, profiles }) => {

  const processedData = processTimelineData(presence, profiles);

  let now = new Date();
  let chartStart = daysSince(now, chartStartEnd[0])
  let chartEnd = daysSince(now, chartStartEnd[1])
  let chartLength = chartStart - chartEnd;
  let chartArray = [chartStartEnd[1]];
  for (let i = 0; i < chartLength; i++) {
    var date = new Date(chartArray[i]);
    // add a day
    date.setDate(date.getDate() - 1);
    chartArray.push(date)
  }
  const renderProfile = (profile: Interval) => (<ProfileElem key={profile.uid} profile={profile} chartArray={chartArray}/>);

  return (
    <Box sx={{ background: 'whitesmoke', position: 'relative', width: '100%', minWidth: '920px', overflow: 'auto', height: '100vh', paddingTop:'70px', margin: '0 auto'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap:'20px', justifyContent: 'center', position: 'relative', width: '100%'}}>
        {processedData.map(renderProfile)}
      </Box>
      <Chart chartArray={chartArray}/>
    </Box>
  );
};

export default Timeline; 