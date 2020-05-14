import React from 'react';
import '../styles/MainPage.css';
import Header from './mainpage/header';
import SubHeader from './mainpage/subheader';

class MainPage extends React.Component {
  render() {
    return (
      <section>
        <header className="App-header">
          <div className="flex-column">
            <Header />
            <SubHeader />
          </div>
        </header>
      </section>
    )
  }
}

export default MainPage;
