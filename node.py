from nltk.corpus import wordnet
import queue

class WordNode:
    def __init__(self, word):
        self.word = word
        self.children = []
        self.parent = None

    def add_parent(self, parentNode):
        if (self not in parentNode.children):
            parentNode.children.append(self)
        self.parent = parentNode

    def add_child(self, childNode):
        childNode.add_parent(self)

    def build_word_tree(self, max_depth=100):
        q = queue.Queue()
        q.put(self)
        curr_depth = 0
        self.seen_words = set()
        while ((not q.empty()) and curr_depth < max_depth):
            curr_node = q.get()
            for child in curr_node.valid_children(self.seen_words):
                curr_node.add_child(child)
                self.seen_words.add(child.word)
                q.put(child)
            curr_depth += 1

    def valid_children(self, seen_words):
        return filter(lambda node: node.word not in seen_words and len(node.word.split()) == 1, self.synonyms())


    def synonyms(self):
        syns = set()
        for syn in wordnet.synsets(self.word):
            for l in syn.lemmas():
                syns.add(WordNode(l.name()))
        return syns

    def search(self, target):
        q = queue.Queue()
        q.put(self)
        print("here's all of the visited words:")
        print(self.seen_words)
        print("\n\n\n")
        while not q.empty():
            curr_node = q.get()
            if curr_node.word == target:
                print("found!")
                print("here's the full path:")
                print(self.trace_words_back(curr_node))
                return
            for child in curr_node.children:
                q.put(child)
        print("not found :(")

    def trace_words_back(self, node):
        path = []
        while node.parent:
            path.insert(0, node.word)
            node = node.parent
        path.insert(0, self.word)
        return path

    @classmethod
    def find_path(cls, source, target):
        src = WordNode(source)
        src.build_word_tree()
        src.search(target)


def prompt():
    src = input("Enter a word to start from: ")
    target = input("Enter a word you'd like to find a path to: ")
    print("searching synonyms...")
    print("\n\n\n")
    WordNode.find_path(src, target)

go = True

while go:
    prompt()
    go = True if input("Try another word? (y/n)") == "y" else False
