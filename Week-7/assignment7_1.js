class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

function reverse(node){
    var prev = null;
    var current = node;
    var next = null;
    while(current != null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node
}

function printNode(node){
    while (node!=null) {
        console.log(node.data);
        node = node.next;
    }
}


var head;
head = new Node(2);
head.next = new Node(14);
head.next.next = new Node(1);
head.next.next.next = new Node(20);
 console.log('Given list');
 printNode(head);
 head = reverse(head);
 console.log('reverse list');

 printNode(head)