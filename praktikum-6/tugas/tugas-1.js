class NodeDLL {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new NodeDLL(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(data) {
        const newNode = new NodeDLL(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Index tidak valid");
            return;
        }
        if (index === 0) {
            this.prepend(data);
            return;
        }
        if (index === this.size) {
            this.append(data);
            return;
        }
        const newNode = new NodeDLL(data);
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        newNode.next = current;
        newNode.prev = current.prev;

        current.prev.next = newNode;
        current.prev = newNode;

        this.size++;
    }

    delete(data) {
        if (this.head === null) {
            return false;
        }
        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head !== null) {
                        this.head.prev = null;
                    }
                }

                else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                }

                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    printForward() {
        let current = this.head;
        let result = "";

        while (current !== null) {
            result += current.data + " <-> ";
            current = current.next;
        }

        result += "null";
        console.log(result);
    }

    printBackward() {
        let current = this.tail;
        let result = "";

        while (current !== null) {
            result += current.data + " <-> ";
            current = current.prev;
        }

        result += "null";
        console.log(result);
    }
}
// TESTING 
const dll = new DoublyLinkedList();

console.log("=== APPEND ===");
dll.append(10);
dll.append(20);
dll.append(30);
dll.printForward();

console.log("\n=== PREPEND ===");
dll.prepend(5);
dll.printForward();

console.log("\n=== INSERT AT INDEX 2 ===");
dll.insertAt(15, 2);
dll.printForward();

console.log("\n=== PRINT BACKWARD ===");
dll.printBackward();

console.log("\n=== DELETE 20 ===");
dll.delete(20);
dll.printForward();

console.log("\n=== REVERSE ===");
dll.reverse();
dll.printForward();