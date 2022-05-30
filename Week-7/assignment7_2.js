class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
var head = null;

function rotate(k) {
  if (k == 0) {
    return;
  }

  var current = head;

  while (current.next != null) {
    current = current.next;
  }
  current.next = head;
  current = head;

  //traverse the linked list till k-1th position which will be last element for rotated array
  for (let i = 0; i < k - 1; i++) {
    current = current.next;
  }
  head = current.next;
  current.next = null;
}

/* UTILITY FUNCTIONS */
/* Function to push a node */
function push(new_data) {
  /* allocate node */
  var new_node = new Node();

  /* put in the data */
  new_node.data = new_data;

  /* link the old list off the new node */
  new_node.next = head;

  /* move the head to point to the new node */
  head = new_node;
}

/* Function to print linked list */
function printList(node) {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
}

/* Driver code */

/* Start with the empty list */

// create a list 10.20.30.40.50.60
for (i = 60; i > 0; i -= 10) push(i);

console.log("Given linked list <br/>");
printList(head);
rotate(4);

console.log("<br/>Rotated Linked list <br/>");
printList(head);
