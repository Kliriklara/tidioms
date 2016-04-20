'use strict';

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
} from 'react-native';
import Info from './src/components/info';
import Cards from './src/components/cards';

const MOCKED_CARDS_DATA = [
  { text: "Bob’s your uncle (and fanny’s your aunt)", description: "This phrase means that something will be successful. It is the equivalent of ‘and there you go,’ or as the French say ‘et voilà!’ Adding the ‘and fanny’s your aunt’ makes you that much more British." },
  { text: "Cheap as chips", description: "If something is very inexpensive, it is as cheap as chips." },
  { text: "Look after the pennies and the pounds will look after themselves", description: "This is one that our grandparents have told us our whole lives. If you take care not to waste small amounts of money, then it will accumulate into something more substantial." },
  { text: "And pigs might fly", description: "This is a skeptical comment which is used to describe a lack of belief that something will happen. For example, you could comment on your brother’s intention to give up cigarettes by saying “and pigs might fly”. In other words you don’t believe that your brother will give up smoking." },
  { text: "Can't see the wood for the trees", description: "If you can't see the wood for the trees, you can't see the whole situation clearly because you're looking too closely at small details, or because you're too closely involved." },
  { text: "At a loose end", description: "If you are at a loose end, you have spare time but don't know what to do with it." },
  { text: "At the end of your tether", description: "If you are at the end of your tether, you are at the limit of your patience or endurance." },
  { text: "Break your duck", description: "If you break your duck, you do something for the first time." },
  { text: "Canary in a coal mine", description: "A canary in a coal mine is an early warning of danger." },
  { text: "Cat's arse and cabbage", description: "The idiom 'cat fur and kitty britches' reminded me of this saying that my granny used when asked what was for dinner, and was her way too of saying you get what you're given! This was in Gloucestershire, UK and in the first part of the 20th century." },
  { text: "Champagne socialist", description: "A wealthy person who has left-wing views is a champagne socialist, especially if their political beliefs are seen as shallow or hypocritical." },
  { text: "As the actress said to the bishop", description: "This idiom is used to highlight a sexual reference, deliberate or accidental." },
  { text: "Cupboard love", description: "To show love to gain something from someone" },
  { text: "Thick as mince", description: "If someone is as thick as mince, they are very stupid indeed." },
  { text: "That's the way the cookie crumbles", description: "Slang term, origin unknown from the 1920's in America. Used to underline a failure of an action, or dissapointment in reaching an undesired result, with the additional meaning that the result was not an unexpected one." },
  { text: "A piece of cake", description: "This means that some task or activity is very simple. For example, Anna said “The exam was a piece of cake.” Anna meant that she found the exam easy." },
  { text: "Hit the books", description: "This is a phrase which means to study.  So if you are in a learning environment and a student says they are “going to hit the books” it means they intend to start a period of serious study or research." },
  { text: "To let the cat out of the bag", description: "This is a very common English phrase which means to give away a secret. So, if you hear someone say this, you don’t need to rush to your nearest animal care centre to report a case of animal cruelty!" },
  { text: "You can’t judge a book by its cover", description: "How often do we make a judgment about a person based on our first impressions? Well this statement advises you not to do this, because appearances are frequently misleading." },
  { text: "Take the mickey | mick out of someone", description: "If you're taking the mickey out of someone, or taking the mick out of them, you're making fun of them or copying their behaviour for a laugh." },
  { text: "Eat humble pie", description: "If you eat humble pie, you admit that you are in the wrong and behave apologetically." },
  { text: "Nosy parker", description: "This is for all the nosy people of the world. A ‘nosy parker’ is someone who is extremely interested in other people’s lives." },
  { text: "Throw a cat among the pigeons ", description: "This metaphor paints a pretty clear picture; it means to say or do something that will cause a chaotic disturbance among a group. For example, if you were to walk into a Star Trek convention, commandeer the PA system then announce over the loudspeaker that Leonard Nimoy had canceled, you would be throwing a cat among the pigeons." },
];

class Tidioms extends Component {
  constructor() {
    super();
    this.onRightButtonPress = this.onRightButtonPress.bind(this);
  }

  onRightButtonPress() {
    this.refs.nav.push({
      title: 'Info',
      component: Info,
      passProps: { cards: MOCKED_CARDS_DATA },
    })
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        barTintColor={BAR_TINT_COLOR}
        tintColor={TINT_COLOR}
        itemWrapperStyle={{ flex:1 }}
        style={{ flex:1 }}
        initialRoute={{
          title: 'Tidioms',
          component: Cards,
          passProps: { cards: MOCKED_CARDS_DATA },
          rightButtonTitle: 'Info',
          onRightButtonPress: this.onRightButtonPress,
        }}
      />
    );
  }
}

const BAR_TINT_COLOR = '#607D8B',
  TINT_COLOR = '#ECECEC';

const NAVBAR_HEIGHT = 61;

AppRegistry.registerComponent('tidioms', () => Tidioms);
export { NAVBAR_HEIGHT };
