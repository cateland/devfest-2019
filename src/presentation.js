/* eslint-disable import/no-webpack-loader-syntax */
// Import React
import React from 'react';
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';

import CodeSlide from 'spectacle-code-slide';

// Require CSS
require('normalize.css');

const images = {
  chatSchrodinger: require('./assets/chat-schrodinger.jpg'),
  chatSchrodingerExplanation: require('./assets/cat-schrodinger-explanation.gif'),
  doubtfull: require('./assets/doubtfull.png'),
  blueScreen: require('./assets/bluescreen.png'),
};

preloader(images);

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

const RedListItem = styled(ListItem)`
  color: red;
`;

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
            Null, undefined and maybe,
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            a tale of uncertainty
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>What is uncertainty ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Which is not of a fixed nature.</Heading>
          <Heading fit>Ce qui n'est pas d'une nature bien arrêté.</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src={images.chatSchrodinger.replace('/', '')} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src={images.chatSchrodingerExplanation.replace('/', '')} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Most popular languages 2019</Heading>
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
          <Link
            target="_blank"
            href="https://insights.stackoverflow.com/survey/2019#most-popular-technologies"
          >
            stackoverflow - 2019#most-popular-technologies
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>There is one similarity between these languages</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>null</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>nill</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>None</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading>
            What is the problem with{' '}
            <strong style={{ color: 'red' }}>null</strong> ?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Typescript</Heading>
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/ok.ts')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Typescript</Heading>
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/null.ts')}
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>Every time you use a value, it may not exist</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>For the 10 most popular languages</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>What does it mean for an application?</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Image src={images.blueScreen.replace('/', '')} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List ordered>
            <ListItem>Crashes</ListItem>
            <ListItem>Inconsistent behaviors</ListItem>
            <ListItem>Application stuck in a specific state</ListItem>
            <ListItem>...</ListItem>
          </List>
          <Text textColor="tertiary">
            All these issues are more or less hard to debug and fix.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>
            How do these <strong style={{ color: 'red' }}>errors</strong>{' '}
            appear?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>
            How do <strong style={{ color: 'red' }}>null</strong> values appear?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List ordered>
            <RedListItem>Javascript</RedListItem>
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
          <Link
            target="_blank"
            href="https://insights.stackoverflow.com/survey/2019#most-popular-technologies"
          >
            stackoverflow - 2019#most-popular-technologies
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Let's focus on Javascript!</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>Why ?</Heading>
          <List>
            <ListItem>I am a Javascript developer</ListItem>
            <ListItem>The language has a NULL</ListItem>
            <ListItem>And also UNDEFINED</ListItem>
          </List>
          <Text textColor="tertiary">We are so lucky</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>How do null values appear?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Typos</Heading>
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/typo.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>A linter or a compiler should save you</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>It should not happen</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/find.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>It should not happen</Heading>
          <List>
            <ListItem>Should have been loaded already</ListItem>
            <ListItem>Loading should not fail</ListItem>
            <ListItem>There is no way to have inconsistent data</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Image src={images.doubtfull.replace('/', '')} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>
            A program <strong style={{ color: 'red' }}>consumes</strong> many
            values that may exist or not
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>
            A program <strong style={{ color: 'red' }}>produces</strong> many
            values that may exist or not
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List>
            <ListItem>Because of non-existent input values</ListItem>
            <ListItem>Wrongly shaped values</ListItem>
            <ListItem>Mistakes</ListItem>
            <ListItem>Or impossible calculations</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>How to deal with it?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>For each function, check the parameters</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/check.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>It is unsustainable</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading>Each time you check for a value existance</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading>You should make a decision</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/checkplus.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List>
            <ListItem>return undefined or null</ListItem>
            <ListItem>throw an error</ListItem>
            <ListItem>return an error</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Tip number 1</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Consider that your functions</Heading>
          <Heading fit>should not consume nullable</Heading>
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/nocheck.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>
            Consider that your functions may produce nullable values
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List>
            <ListItem>Array.find => nullable</ListItem>
            <ListItem>Map.get => nullable</ListItem>
            <ListItem>42 ➗ 0 => nullable</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>How is this supposed to help?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Deal with dangerous nullable values</Heading>
          <Heading fit>in a few known places</Heading>
          <List>
            <ListItem>In order to make less decisions</ListItem>
            <ListItem>
              if an error happens, you will know where to look
            </ListItem>
            <ListItem>The rest of your code can be simple</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Tip number 2</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Switch to a non-top ten language,</Heading>
          <Heading fit>that does not allow the null concept</Heading>
          <List>
            <ListItem>Purescript</ListItem>
            <ListItem>Elm</ListItem>
            <ListItem>ReasonML</ListItem>
          </List>
          <Text>No Null == Less Problems</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Easier said than done.</Heading>
          <Heading>OK</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Check these languages and how</Heading>
          <Heading fit>they deal with non-existent values</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>And translate it to Javascript</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/simple-before-8lo6b?fontsize=14"
            title="Creation"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>Remember our famous cat ?</Heading>
          <Image src={images.chatSchrodinger.replace('/', '')} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Let's build a smart cardboard box</Heading>
          <List>
            <ListItem>Should be easy to use</ListItem>
            <ListItem>Clear distinction between value and no value</ListItem>
            <ListItem>
              Forces us to handle the case where the value does not exist
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Maybe</Heading>
          <CodePane
            className="code__big"
            lang="javascript"
            theme="external"
            source={require('!raw-loader!./assets/maybe.text')}
          />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('!raw-loader!./assets/example1/maybe.js')}
          ranges={[
            { loc: [0, 25], note: 'Maybe' },
            { loc: [0, 1], note: 'Maybe' },
            { loc: [13, 14], note: 'Maybe = Nothing' },
            { loc: [19, 20], note: 'Maybe = Nothing | Just' },
            { loc: [0, 4], note: 'Maybe = Nothing | Just' },
            { loc: [5, 11], note: 'Maybe = Nothing | Just value' },
            { loc: [13, 18] },
            { loc: [19, 24] },
          ]}
        />
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <Heading>Creation</Heading>
          <CodePane
            className="code__big"
            lang="javascript"
            theme="external"
            source={require('!raw-loader!./assets/example-simple.text')}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <Heading>Release</Heading>
          <CodePane
            className="code__big"
            lang="javascript"
            theme="external"
            source={require('!raw-loader!./assets/example-simple2.text')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/simple-after-hpcys?fontsize=14"
            title="Creation after"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/map-before-qtjyo?fontsize=14"
            title="Map"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Let's enhance this Maybe</Heading>
          <List>
            <ListItem>Transforming a maybe value should be simple</ListItem>
            <ListItem>Without having to fold so early</ListItem>
            <ListItem>Without losing safety</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/map.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Let's call it map</Heading>
          <List>
            <ListItem>
              Apply a <strong style={{ color: 'red' }}>function</strong> safely{' '}
            </ListItem>
            <ListItem>
              to a Maybe <strong style={{ color: 'red' }}>value</strong>
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/example-map.text')}
          />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('!raw-loader!./assets/example2/maybe.js')}
          ranges={[
            { loc: [0, 33] },
            { loc: [0, 12] },
            { loc: [13, 14] },
            { loc: [18, 21] },
            { loc: [23, 24] },
            { loc: [28, 31] },
          ]}
        />
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/map-after-8eigw?fontsize=14"
            title="Map After"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/apply-before-yycuc?fontsize=14"
            title="Application"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/apply-after-jb6ub?fontsize=14"
            title="Application - after"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Handling multiple Maybe values</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Apply</Heading>
          <List>
            <ListItem>
              Apply a <strong style={{ color: 'red' }}>function</strong> from
              inside a Maybe
            </ListItem>
            <ListItem>
              To a <strong style={{ color: 'red' }}>value</strong> inside
              another Maybe
            </ListItem>
            <ListItem>To produce a new Maybe</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/example-ap.text')}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/example-ap2.text')}
          />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('!raw-loader!./assets/example3/maybe.js')}
          ranges={[
            { loc: [0, 41] },
            { loc: [0, 12] },
            { loc: [13, 14] },
            { loc: [22, 25] },
            { loc: [27, 28] },
            { loc: [36, 39] },
          ]}
        />
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/complete-after-qrl1c?fontsize=14"
            title="Chain after"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>
            From a <strong style={{ color: 'red' }}>Just</strong> producing a{' '}
            <strong style={{ color: 'red' }}>Nothing</strong>
          </Heading>
          <Heading fit>Example : Data validation</Heading>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <CodePane
            theme="external"
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/example-chain.text')}
          />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('!raw-loader!./assets/example4/maybe.js')}
          ranges={[
            { loc: [0, 49] },
            { loc: [0, 12] },
            { loc: [13, 14] },
            { loc: [26, 29] },
            { loc: [31, 32] },
            { loc: [44, 47] },
          ]}
        />
        <Slide transition={['fade']} bgColor="primary">
          <Heading>We have pretty much covered our bases</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>A few libs that provide</Heading>
          <Heading fit>Maybe, Option and more...</Heading>
          <List>
            <ListItem>https://monet.github.io/monet.js/</ListItem>
            <ListItem>https://folktale.origamitower.com/</ListItem>
            <ListItem>https://gcanti.github.io/fp-ts/</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Reading</Heading>
          <Text>https://mostly-adequate.gitbooks.io/</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Handling async resources</Heading>
          <Heading>Dataway</Heading>
          <List>
            <ListItem>Modeled with 4 state</ListItem>
            <ListItem>NotAsked, Loading, Failure, Success</ListItem>
            <ListItem>Written in typescript with solid type def</ListItem>
            <ListItem>https://github.com/iadvize/dataway</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3}>Axel CATELAND</Heading>
          <Heading>
            <Link target="_blank" href="https://twitter.com/catelandaxel">
              @catelandaxel
            </Link>
          </Heading>
          <Heading size={3}>Working at iAdvize</Heading>
          <Heading>
            <Link target="_blank" href="https://twitter.com/iadvize/">
              @iadvize
            </Link>
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Thanks</Heading>
          <List>
            <ListItem>Guillaume CLOCHARD</ListItem>
            <ListItem>Victor GRAFFARD</ListItem>
            <ListItem>Nicolas DECLERCQ</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading fit>Questions</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>value?.anotherOne?.more</Heading>
        </Slide>
      </Deck>
    );
  }
}
