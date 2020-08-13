import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer,Content } from 'react-mdl';
import Main from './components/main';
import {link} from 'react-router-dom';


class App extends Component {
  
  render() {
      return (
        <div className="demo-big-content">
        <Layout>
            <Header title="Title" scroll>
                <Navigation>
                    <Link href="/resume">Resume</Link>
                    <Link href="/contacts">Contact</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/aboutme">AboutMe</Link>
                    <Link href="/technology">Technology</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                <Link href="/resume">Resume</Link>
                    <Link href="/contacts">Contact</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/aboutme">AboutMe</Link>
                    <Link href="/technology">Technology</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <main/>
            </Content>
        </Layout>
    </div>
      );
  }
}




export default App;
