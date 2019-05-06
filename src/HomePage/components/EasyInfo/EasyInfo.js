import React from 'react';
import InfoCard from './InfoCard';

function EasyInfo( props) {
  return (
    <div className="center flex-l flex-m pa3 pb4 ">
      <InfoCard/>
      <InfoCard/>
      <InfoCard/>
      <InfoCard/>
    </div>
  );
}

export default EasyInfo;
