import React, { Component } from 'react-native';
import { getPicture } from '../services/flickr';
import { getNounOrVerb } from '../services/tagger';

const LOADING_URL = 'http://jimpunk.com/Loading/loading46.gif';

// A higher order component to determine a picture dependent on the text
const CardWrapper = ComposedComponent => class extends Component {
  constructor() {
    super();
    this.state = { imageUrl: LOADING_URL };
  }

  componentDidMount() {
    this.getPicture(this.props.text);
  }

  componentWillReceiveProps(nextProps) {
    const { text } = nextProps;

    if (this.props.text !== text) {
      this.getPicture(text);
    }
  }

  getPicture(text) {
    const word = getNounOrVerb(text);
    this.setState({ imageUrl: LOADING_URL });

    getPicture(word).then(imageUrl => {
      this.setState({ imageUrl });
    });
  }

  render() {
    const { imageUrl } = this.state;

    return <ComposedComponent {...this.props} imageUrl={imageUrl} />;
  }
};

export default CardWrapper;
