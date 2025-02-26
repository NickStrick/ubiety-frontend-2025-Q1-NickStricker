import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DefaultUser from '../../defaultUser.png';
// This file displays the Profiles as well as all of the data point on our chart

interface ProfileProps {
    profile: Interval;
    chartArray: Date[];
    }
interface Interval {
    category: string | null;
    created_at: number;
    photo_url: string | null;
    uid: number;
    name: string;
    current_status:string
    presence_intervals: Date[][]
  }
  function daysSince(date1:Date, date2:Date) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const days = (timeDiff / (1000 * 3600 * 24));
    return days;
  }
//stylings
const GridItem = styled(Paper)(() => ({
    padding: '10px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20px',
    width: '20px',
    borderRadius: '100%',
    background: 'white',
    position: 'relative',
    border: '3px solid white',
    outline: '3px solid #46a2da'
  }));
  const ChartLine = styled(Box)(() => ({
    position: 'absolute',
    zIndex:'1000',
    background: 'blue',
    width: '2px',
    boxShadow: '0px 0px 1px 1px #46a2da',

  }));
  const ProfileName = styled(Box)(() => ({
    position: 'absolute',
    zIndex:'1000',
    bottom: 'calc(100% + 8px)',
    fontSize: '10px'
  }));
const Profile: React.FC<ProfileProps> = ({profile, chartArray}) => {
    return (
        <GridItem title={profile.name} sx={{ backgroundImage: `url(${profile.photo_url === null?DefaultUser:profile.photo_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}> 
        {profile.presence_intervals.map((int)=>{
            let intStartDate = int[0]
            let intEndDate = int[1]  
            let difference: any = daysSince(intStartDate, intEndDate).toFixed(2)
            let lengthFromStart: any = daysSince(chartArray[0], intStartDate).toFixed(2)
            return (
                <ChartLine  sx={{ height: `${60 * difference}px`, bottom: `-${(60 * lengthFromStart) + 13}px`,
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "blue",
                    opacity: 1,
                    borderColor:"#46a2da"
                },
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "blue",
                    opacity: 1,
                    borderColor:"#46a2da"
                },
            }}>
                </ChartLine>
            )
        })}
        <ProfileName>{profile.name}</ProfileName>
      </GridItem>
    );
  };
  export default Profile;