from PyDictionary import PyDictionary
import queue
import pdb

THESAURUS = PyDictionary()

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

    def build_move_tree(self, max_depth=20):
        q = queue.Queue()
        q.put(self)
        curr_depth = 0
        self.seen_words = set()
        while ((not q.empty()) and curr_depth < max_depth):
            curr_node = q.get()
            for child in curr_node.valid_children(self.seen_words):
                curr_node.add_child(child)
                self.seen_words.add(child.word) # put this logic somewhere else
                q.put(child)
            curr_depth += 1

    def valid_children(self, seen_words):
        return filter(lambda node: node.word not in seen_words and len(node.word.split()) == 1, self.synonyms())

    def synonyms(self):
        return map(lambda word: WordNode(word), THESAURUS.synonym(self.word))

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
                print(self.trace_path_back(curr_node))
                return
            for child in curr_node.children:
                q.put(child)
        print("not found :(")

    def trace_path_back(self, node):
        path = []
        while node.parent:
            path.append(node.word)
            node = node.parent
        path.append(self.word)
        return path

    @classmethod
    def find_path(cls, source, target):
        src = WordNode(source)
        src.build_move_tree()
        src.search(target)
