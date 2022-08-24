// Trie Implementation
// Trees

// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.
// There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:
// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

class TrieNode {
	children: Map<string, TrieNode> = new Map();
	isEndOfWord: boolean = false;
}

export class Trie {
	root: TrieNode = new TrieNode();

	insert(word: string): void {
		let current = this.root;

		for (const char of word) {
			if (!current.children.has(char)) {
				current.children.set(char, new TrieNode());
			}

			current = current.children.get(char)!;
		}

		// current is the last character at this point
		current.isEndOfWord = true;
	}

	search(word: string): boolean {
		let current = this.root;
		for (const char of word) {
			if (!current.children.has(char)) {
				return false;
			}

			current = current.children.get(char)!;
		}

		return current.isEndOfWord;
	}

	startsWith(prefix: string): boolean {
		let current = this.root;
		for (const char of prefix) {
			if (!current.children.has(char)) {
				return false;
			}

			current = current.children.get(char)!;
		}

		return true;
	}
}
