import React, { Component } from 'react';
import VisibleExpenseList from '../containers/VisibleExpenseList';
import Footer from '../components/Footer';

// Appcontainer component
class App extends Component {
    render() {
        return (
            <div className="main-app-container">
                <div className="main-app-nav">Expenses</div>
                <VisibleExpenseList />
                <Footer />
            </div>
        );
    }
}

export default App;