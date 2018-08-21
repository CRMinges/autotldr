# autoTLDR
The autoTLDR web application was inspired by the [text summarizer](https://www.reddit.com/r/dailyprogrammer/comments/683w4s/20170428_challenge_312_hard_text_summarizer/) challenge over at the r/dailyprogrammer, Reddit's autoTLDR bot, and [SMMRY](https://smmry.com/).

## Algorithm
First, barring a selection of unimportant words (see stopWords.js), we calculate the frequency of all other words across the original text. This becomes the words score. Next, we calculate a score for each sentence, based on the sum of the score of words in the sentence. Lastly, given a particular threshold, we return the most important sentences, or the ones with the highest score.

## Usage
First, download the project to your local machine. Then, if necessary `npm install`. Finally, to run `npm run`.

## Known bugs, upcoming fixes/additions
- Some abbreviations (i.e., Mr., Mrs., etc...) can give the algorithm a hard time when it comes to designating and splitting the original text in to individual sentences.
- The next addition is that ability to pass the program your favorite news website, and it can generate a summary of the headlining articles.
