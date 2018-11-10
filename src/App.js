import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import './App.css';
let backimage = require('./Assets/back_image.jpeg');

const square = { width: 150, height: 150 };

class App extends Component {
  render() {
    return (
      <Container
        fluid
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflowY: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), url("${backimage}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          paddingTop: '60px',
          paddingBottom: '60px'
        }}
      >
        <Container
          fluid
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Header as="h2">Repose Services</Header>
          <Container
            style={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              paddingTop: '20px'
            }}
          >
            <Segment circular style={square}>
              <Header as="h4">
                Find Services
                <Header.Subheader>Locally or Remote!</Header.Subheader>
              </Header>
            </Segment>
            <Segment circular inverted style={square}>
              <Header as="h4" inverted>
                Find Resources
                <Header.Subheader>When you need them!</Header.Subheader>
              </Header>
            </Segment>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default App;
