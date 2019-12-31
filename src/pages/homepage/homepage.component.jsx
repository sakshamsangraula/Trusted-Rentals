import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

// Directory component is rendered in a div and HomePage component is exported for App.js to import
const HomePage = () => (
   <div className = "homepage">
      <Directory/>
   </div>
)

export default HomePage;