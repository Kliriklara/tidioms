import { includes } from 'lodash';
import nlp from 'compromise';

const NOUN = ['NN', 'NNP', 'NNPS', 'NNS'],
  VERB = ['VB', 'VBD', 'VBG', 'VBN', 'VBP', 'VBZ'];

function getNounOrVerb(text) {
  const r = nlp(text);
  const nouns = r.nouns();

  const arr = nouns.out('array');
  if (arr.length) {
    return arr[arr.length-1];
  }

  const verbs = r.match('#Verb')
  const verbsArr = verbs.out('array');
  if (verbsArr.length) {
    return verbsArr[verbsArr.length-1];
  }

  return '';
}

export { getNounOrVerb };
