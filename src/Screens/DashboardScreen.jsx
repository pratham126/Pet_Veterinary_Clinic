import React from 'react';
import Service from '../Components/Service';
const DashboardScreen = (props) => {
  if (props.userInfo && props.userInfo.email.toLowerCase() === 'admin@gmail.com')
    return (
      <div>
        <Service services={props.users} />
        <Service services={props.services} />
      </div>
    );
  else return <h1 style={{textAlign: 'center'}}>You don't have access to this webpage</h1>;
};

export default DashboardScreen;
