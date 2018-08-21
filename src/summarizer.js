import {stopWords, specialWords} from './stopWords.js';

const charCount = (word, char) => {
	let count = 0;
	for (let i = 0; i < word.length; i++) {
		if (word.charAt(i) === char) {
			count++;
		}
	}
	return count;
}

const summarize = (textIn) => {
  let contents = textIn.split(' ');
  //let indivSentences = textIn.match(/[A-Z"][A-Za-z0-9\s'";:,%&@#$^*(){}[\]-]*([.?!]+)|([.!?]+")/g);
  // \s+[A-Z][A-Za-z0-9\s'";:,]*[.?!]
  // \s+[A-Za-z,;'\"\s]+[.?!]
  let indivSentences = textIn.split(/[.!?]+"?(?=\s[A-Z])/);

  const wordFreq = new Map();

  for (let i = 0; i < contents.length; i++) {
  	let word = contents[i];
  	word = word.toLowerCase();

  	//if word has 1 period and isn't in list of known words with .
  	//what this does is make sure we count words at end of sentence
  	if (charCount(word, '.') === 1 && word.endsWith('.') && !specialWords.includes(word)) {
  		word = word.substring(0, word.length-1);
  	} else if (word.endsWith(';') || word.endsWith(',') || word.endsWith(':')) {
  		word = word.substring(0, word.length-1);
  	}

  	//no word should have unnecessary trailing '.' after this point
  	if (!wordFreq.has(word) && !stopWords.includes(word)) {
  		wordFreq.set(word, 1); 
  	} else if (wordFreq.has(word)) {
  		let updatedVal = wordFreq.get(word) + 1;
        wordFreq.set(word, updatedVal);
  	}
  }

  let sortedMap = new Map([...wordFreq].sort(([k, v],[k2, v2]) => {
  	return (v > v2) ? -1 : ((v < v2) ? 1 : 0);
  }));
  console.log(sortedMap);

  let scoreMap = new Map();

  //loop through sentences
  for (let i = 0; i < indivSentences.length; i++) {
  	let score = 0;
  	let subWords = indivSentences[i].split(' ');
  	for (let j = 0; j < subWords.length; j++) {
  		if (sortedMap.get(subWords[j]) !== undefined) {
  			score += sortedMap.get(subWords[j]);
  		}
  	}
  	scoreMap.set(indivSentences[i], score);
  }

  let sortedScoreMap = new Map([...scoreMap].sort(([k, v],[k2, v2]) => {
  	return (v > v2) ? -1 : ((v < v2) ? 1 : 0);
  }));

  let topScores = Array.from(sortedScoreMap.values()).slice(0,5);

  let output = '';
  for (let i = 0; i < indivSentences.length; i++) {
    if ( topScores.includes(scoreMap.get(indivSentences[i])) ) {
      output += indivSentences[i];
    }
  }

  return output;
}

export default summarize;
