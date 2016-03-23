import { Lexer, Tagger } from 'pos';
import { includes } from 'lodash';

const NOUN = ['NN', 'NNP', 'NNPS', 'NNS'],
  VERB = ['VB', 'VBD', 'VBG', 'VBN', 'VBP', 'VBZ'];

function getNounOrVerb(text) {
  const words = new Lexer().lex(text),
    tagger = new Tagger(),
    taggedWords = tagger
      .tag(words)
      .reverse(); // reverse so that nouns at the end are chosen first

  for (let i in taggedWords) {
    const [ word, tag ] = taggedWords[i];

    if (includes(NOUN, tag) && word.length > 2) {
      return word;
    }
  }

  return null;
}

export { getNounOrVerb };
