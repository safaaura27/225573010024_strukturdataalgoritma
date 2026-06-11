// ======================================
// TUGAS 2 : SOAL KLASIK LINKED LIST
// ======================================

// Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }

    // tambah data
    append(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    // print list
    print() {
        if (this.head === null) {
            console.log("null");
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

    // ======================================
    // 1. PALINDROME
    // ======================================

    palindrome() {
        let arr = [];
        let current = this.head;

        while (current !== null) {
            arr.push(current.data);
            current = current.next;
        }

        let normal = arr.join("");
        let reverse = [...arr].reverse().join("");

        return normal === reverse;
    }

    // ======================================
    // 2. HAPUS N DARI AKHIR
    // ======================================

    hapusNDariAkhir(n) {

        let dummy = new Node(0);
        dummy.next = this.head;

        let fast = dummy;
        let slow = dummy;

        for (let i = 0; i <= n; i++) {

            if (fast === null) {
                return;
            }

            fast = fast.next;
        }

        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;

        this.head = dummy.next;
    }

    // ======================================
    // 3. NODE TENGAH
    // ======================================

    tengahLinkedList() {

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.data;
    }
}



// ======================================
// TESTING PALINDROME
// ======================================

console.log("=== palindrome ===");

// list 1
const list1 = new LinkedList();

list1.append(1);
list1.append(2);
list1.append(3);
list1.append(2);
list1.append(1);

console.log("list 1:");
list1.print();

console.log("palindrome?", list1.palindrome());


// list 2
const list2 = new LinkedList();

list2.append(1);
list2.append(2);
list2.append(2);
list2.append(1);

console.log("\nlist 2:");
list2.print();

console.log("palindrome?", list2.palindrome());


// list 3
const list3 = new LinkedList();

list3.append(1);
list3.append(2);
list3.append(3);
list3.append(4);
list3.append(5);

console.log("\nlist 3:");
list3.print();

console.log("palindrome?", list3.palindrome());


// list 4
const list4 = new LinkedList();

list4.append(1);

console.log("\nlist 4:");
list4.print();

console.log("palindrome?", list4.palindrome());



// ======================================
// TESTING HAPUS N DARI AKHIR
// ======================================

console.log("\n=== hapusNDariAkhir ===");

// case 1
const h1 = new LinkedList();

h1.append(1);
h1.append(2);
h1.append(3);
h1.append(4);
h1.append(5);

console.log("sebelum 1:");
h1.print();

h1.hapusNDariAkhir(5);

console.log("sesudah 1:");
h1.print();


// case 2
const h2 = new LinkedList();

h2.append(1);
h2.append(2);
h2.append(3);
h2.append(4);
h2.append(5);

console.log("\nsebelum 2:");
h2.print();

h2.hapusNDariAkhir(2);

console.log("sesudah 2:");
h2.print();


// case 3
const h3 = new LinkedList();

h3.append(1);
h3.append(2);
h3.append(3);

console.log("\nsebelum 3:");
h3.print();

h3.hapusNDariAkhir(1);

console.log("sesudah 3:");
h3.print();


// case 4
const h4 = new LinkedList();

h4.append(50);

console.log("\nsebelum 4:");
h4.print();

h4.hapusNDariAkhir(1);

console.log("sesudah 4:");
h4.print();



// ======================================
// TESTING TENGAH LINKED LIST
// ======================================

console.log("\n=== tengahLinkedList ===");

// list tengah 1
const t1 = new LinkedList();

t1.append(1);
t1.append(2);
t1.append(3);
t1.append(4);
t1.append(5);

console.log("list 1:");
t1.print();

console.log("tengah:", t1.tengahLinkedList());


// list tengah 2
const t2 = new LinkedList();

t2.append(1);
t2.append(2);
t2.append(3);
t2.append(4);

console.log("\nlist 2:");
t2.print();

console.log("tengah:", t2.tengahLinkedList());


// list tengah 3
const t3 = new LinkedList();

t3.append(1);

console.log("\nlist 3:");
t3.print();

console.log("tengah:", t3.tengahLinkedList());


// list tengah 4
const t4 = new LinkedList();

t4.append(33);

console.log("\nlist 4:");
t4.print();

console.log("tengah:", t4.tengahLinkedList());