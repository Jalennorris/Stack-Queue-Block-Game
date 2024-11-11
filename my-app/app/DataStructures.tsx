// DataStructures.tsx

// Generic Node class to hold data and a reference to the next node
class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

// Stack class for LIFO operations
export class Stack<T> {
    private top: Node<T> | null = null;

    // Pushes a new element onto the stack
    push(data: T): void {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    // Pops the top element off the stack and returns its data
    pop(): T | null {
        if (this.isEmpty()) {
            console.warn('Stack is empty');
            return null;
        }
        const poppedNode = this.top as Node<T>;
        this.top = poppedNode.next;
        return poppedNode.data;
    }

    // Returns the data at the top of the stack without removing it
    peek(): T | null {
        if (this.isEmpty()) {
            console.warn('Stack is empty');
            return null;
        }
        return this.top?.data || null;
    }

    // Checks if the stack is empty
    isEmpty(): boolean {
        return this.top === null;
    }
}

// Queue class for FIFO operations
export class Queue<T> {
    private front: Node<T> | null = null;
    private rear: Node<T> | null = null;

    // Adds a new element to the end of the queue
    enqueue(data: T): void {
        const newNode = new Node(data);
        if (this.rear === null) {
            this.front = this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }

    // Removes and returns the front element from the queue
    dequeue(): T | null {
        if (this.isEmpty()) {
            console.warn('Queue is empty');
            return null;
        }
        const dequeuedNode = this.front as Node<T>;
        this.front = dequeuedNode.next;
        if (this.front === null) {
            this.rear = null;
        }
        return dequeuedNode.data;
    }

    // Returns the data at the front of the queue without removing it
    frontValue(): T | null {
        if (this.isEmpty()) {
            console.warn('Queue is empty');
            return null;
        }
        return this.front?.data || null;
    }

    // Checks if the queue is empty
    isEmpty(): boolean {
        return this.front === null;
    }
}
