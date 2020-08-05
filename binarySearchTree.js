class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }

    }
    find(value) {
        if (this.root === null) return false;
        var current = this.root;
        var found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS() {
        var queue = [];
        var data = [];
        var node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        var data = [];
        var current = this.root;
        traverse(node) {
            data.push(node.value);
            if (data.left) traverse(data.left);
            if (data.right) traverse(data.right);

        }
        traverse(current);
        return data;
    }
    DFSPostOrder() {
        var data = [];
        var current = this.root;
        traverse(node) {
            if (data.left) traverse(data.left);
            if (data.right) traverse(data.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
    DFSInOrder() {
        var data = [];
        var current = this.root;
        traverse(node) {
            if (data.left) traverse(data.left);
            data.push(node.value);
            if (data.right) traverse(data.right);
        }
        traverse(current);
        return data;
    }
};

var tree = new BinarySearchTree();
tree.insert(20);
tree.insert(15);
tree.insert(12);
tree.insert(19);
tree.insert(25);
tree.insert(23);
tree.insert(29);
console.log(tree);
