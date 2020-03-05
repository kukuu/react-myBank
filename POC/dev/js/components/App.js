//Bundles containers
import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';


/*require('../../scss/style.scss');*/

const App = () => (
    <div>
        
    	<h1>Merchants</h1>
        <UserList />
        <h3>Transactions</h3>
        <hr />
        <UserDetails />

    </div>
);

export default App;


