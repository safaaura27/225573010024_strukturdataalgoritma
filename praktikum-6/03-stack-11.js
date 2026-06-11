class NodeStack {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        const newNode = new NodeStack(data);

        newNode.next = this.head;
        this.head = newNode;

        this.size++;
    }

    removeFirst() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head.data;
        this.head = this.head.next;
        this.size--;
        return removed;
    }

    getFirst() {
        if (this.head === null) {
            return null;
        }

        return this.head.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        if (this.head === null) {
            console.log("Stack kosong");
            return;
        }

        let current = this.head;
        let result = "";

        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }

        result += "null";

        console.log(result);
    }
}

// STACK
class Stack {
    constructor() {
        this.list = new LinkedListStack();
    }

    push(data) {
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeFirst();
    }

    peek() {
        return this.list.getFirst();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.size;
    }

    print() {
        this.list.print();
    }
}

// TESTING STACK
const stack = new Stack();

console.log("=== PUSH ===");
stack.push("Aksi 1");
stack.push("Aksi 2");
stack.push("Aksi 3");
stack.print();

console.log("\n=== PEEK ===");
console.log(stack.peek());

console.log("\n=== POP ===");
console.log("Data dihapus:", stack.pop());
stack.print();

console.log("\n=== SIZE ===");
console.log(stack.size());

console.log("\n=== ISEMPTY ===");
console.log(stack.isEmpty());

// SIMULASI UNDO / REDO
console.log("\n=== SIMULASI UNDO ===");

const undoStack = new Stack();
// simpan aksi
undoStack.push("Menulis huruf A");
undoStack.push("Menulis huruf B");
undoStack.push("Menulis huruf C");

console.log("Data stack:");
undoStack.print();

// undo 2 kali
console.log("\nUndo:", undoStack.pop());
console.log("Undo:", undoStack.pop());

console.log("\nSisa stack:");
undoStack.print();