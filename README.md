# Word Connect
A CLI tool to find out if two words are connected via their synonyms. This is a fun and simple way to explore the relationship between two words :) 

A tree of synonyms is built out from the source word. That tree is then traveresed using breadth-first-search to see if there's a path of synonyms to the target word.

A word's synonyms are found using [wordnet](http://www.nltk.org/howto/wordnet.html)'s `synsets`

```
def synonyms(self):
    syns = set()
    for syn in wordnet.synsets(self.word):
        for l in syn.lemmas():
            syns.add(WordNode(l.name()))
    return syns
```



## requirements
#### python >= 3.6.0

## dependencies
#### nltk
`pip install nltk`

From the root directory, just run `python word_connect.py`. You'll be prompted for a source and target word. Enter your words and see if they connect!
