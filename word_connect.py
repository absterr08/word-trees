from word_tree import WordTree

def prompt():
    print("\n")
    src = input("Enter a word to start from: ")
    target = input("Enter a word you'd like to find a path to: ")
    print("searching synonyms...")
    print("\n\n\n")
    WordTree.find_path(src, target)

if __name__ == "__main__":
    go = True
    while go:
        prompt()
        go = True if input("\n\n\nTry another word? (y/n)") == "y" else False
    print("\nbye!")
