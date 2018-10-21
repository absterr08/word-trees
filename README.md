# Word Connect
Ever wondered if you can get from a target word to a source word via a path of synonyms? Here's a really simple way to find out :) It's not browser-ready yet, but it's simple enough to set up and use the CLI locally.


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

From the root directory, just run `python node.py`. You'll be prompted for a source and target word. Enter your words and see if they connect!
