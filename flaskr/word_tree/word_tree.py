import queue
from . import WordNode

class WordTree:
    def __init__(self, word_node):
        self.root = word_node
        self._build_word_tree()

    def _build_word_tree(self, max_depth=100):
        q = queue.Queue()
        q.put(self.root)
        curr_depth = 0
        self.seen_words = set()
        while ((not q.empty()) and curr_depth < max_depth):
            curr_node = q.get()
            for child in self._valid_children(curr_node, self.seen_words):
                curr_node.add_child(child)
                self.seen_words.add(child.word)
                q.put(child)
            curr_depth += 1

    def _valid_children(self, word_node, seen_words):
        return filter(lambda node: node.word not in seen_words and len(node.word.split()) == 1, word_node.synonyms())

    def search(self, target):
        q = queue.Queue()
        q.put(self.root)

        while not q.empty():
            curr_node = q.get()
            if curr_node.word == target:
                return
            for child in curr_node.children:
                q.put(child)

    def to_dict(self):
        return {
            'word': 'word1',
            'children': [
                {'word': 'word2'}
            ]
        }


    @classmethod
    def find_path(cls, source, target):
        root = WordNode(source)
        src = WordTree(root)
        src.search(target)

    @classmethod
    def build_tree(cls, word):
        tree = WordTree(WordNode(word))
        return tree.to_dict()

    @classmethod
    def show_syns(cls, word):
        return [node.word for node in WordNode(word).synonyms()]
