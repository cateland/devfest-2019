/* eslint-disable import/no-webpack-loader-syntax */
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Null, undefined and maybe,
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            a tale of uncertainty
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>What is uncertainty ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>What is uncertainty ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>Which is not of a fixed nature.</Heading>
        </Slide>
        <Slide>
        <List ordered>
            <ListItem>Javascript</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>PHP</ListItem>
            <ListItem>C++</ListItem>
            <ListItem>C</ListItem>
            <ListItem>Ruby</ListItem>
            <ListItem>Go</ListItem>
            <ListItem>Swift</ListItem>
            <ListItem>Kotlin</ListItem>
          </List>
          <Link target="_blank" href="https://insights.stackoverflow.com/survey/2019#most-popular-technologies">stackoverflow - 2019#most-popular-technologies</Link>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>There is one common point between this languages</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <List>
            <ListItem>null</ListItem>
            <ListItem>nil</ListItem>
            <ListItem>None</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>Java</Heading>
          <CodePane src={require('!raw-loader!./assets/ok.java')}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>Java</Heading>
          <CodePane src={require('!raw-loader!./assets/null.java')}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/cranky-solomon-n79iy?fontsize=14&previewwindow=tests"
            title="cranky-solomon-n79iy"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{width: '1000px', height: '700px', border: 0, borderRadius: '4px', overflow: 'hidden'}}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
      </Deck>
    );
  }
}
