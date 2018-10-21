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

    def synonyms(self):
        syns = set()
        for syn in wordnet.synsets(self.word):
            for l in syn.lemmas():
                syns.add(WordNode(l.name()))
        return syns

class WordTree:

    def __init__(self, word_node):
        self.root = word_node
        self.build_word_tree()

    def build_word_tree(self, max_depth=100):
        q = queue.Queue()
        q.put(self.root)
        curr_depth = 0
        self.seen_words = set()
        while ((not q.empty()) and curr_depth < max_depth):
            curr_node = q.get()
            for child in self.valid_children(curr_node, self.seen_words):
                curr_node.add_child(child)
                self.seen_words.add(child.word)
                q.put(child)
            curr_depth += 1

    def valid_children(self, word_node, seen_words):
        return filter(lambda node: node.word not in seen_words and len(node.word.split()) == 1, word_node.synonyms())

    def search(self, target):
        q = queue.Queue()
        q.put(self.root)

        while not q.empty():
            curr_node = q.get()
            if curr_node.word == target:
                self.display_results(curr_node)
                return
            for child in curr_node.children:
                q.put(child)
        self.display_unfound()

    def trace_words_back(self, node):
        path = []
        while node.parent:
            path.insert(0, node.word)
            node = node.parent
        path.insert(0, self.root.word)
        return path

    def display_results(self, curr_node):
        print("found!\nhere's the full path:")
        print(self.trace_words_back(curr_node))
        self.prompt_for_seen_words()

    def display_unfound(self):
        print("not found :(")
        self.prompt_for_seen_words()

    def prompt_for_seen_words(self):
        show_words = input("\n\n\nsee all visited words? (y/n)")
        if show_words == "y":
            print("\nok, here are all of the visited words:")
            print(self.seen_words)


    @classmethod
    def find_path(cls, source, target):
        root = WordNode(source)
        src = WordTree(root)
        src.search(target)
