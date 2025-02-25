import React from 'react';
import Timeline from './components/Timeline/Timeline';
// import or data
import presence from './data/presence.json'
import profiles from './data/profiles.json'


const App: React.FC = () => {
  return (
    <div style={{width:'100vw', height: '100vh'}}>
      <Timeline presence={presence} profiles={profiles}/>
    </div>
  );
};

export default App;