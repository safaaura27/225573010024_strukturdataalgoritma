class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // Push data ke stack
    push(value) {
        this.stack.push(value);

        // Simpan nilai minimum
        if (
            this.minStack.length === 0 ||
            value <= this.getMin()
        ) {
            this.minStack.push(value);
        }

        console.log(`push(${value})`);
    }

    // Menghapus data teratas
    pop() {
        if (this.stack.length === 0) {
            return "Stack kosong";
        }

        const removed = this.stack.pop();

        // Jika data yang dihapus adalah minimum
        if (removed === this.getMin()) {
            this.minStack.pop();
        }

        console.log(`pop() = ${removed}`);
        return removed;
    }

    // Mengambil nilai minimum O(1)
    getMin() {
        if (this.minStack.length === 0) {
            return null;
        }

        return this.minStack[this.minStack.length - 1];
    }

    // Menampilkan isi stack
    display() {
        console.log("Stack:", this.stack);
    }
}

console.log("=== MIN STACK ===");

const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

console.log("getMin() =", ms.getMin());
ms.pop();
console.log("getMin() =", ms.getMin());
ms.pop();
console.log("getMin() =", ms.getMin());

