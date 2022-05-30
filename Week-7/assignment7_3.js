let head; //head of list

class Node{
    constructor(d){
        this.data = d;
        this.next = null;
    }
}

function detectLoop() {
    let slowP = head, fastP = head;
    let flag = 0;
    while(slowP != null && fastP != null && fastP.next != null){
        slowP = slowP.next;
        fastP = fastP.next.next;
        if (slowP == fastP) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        console.log('Loop found')
    } else{
        console.log('No loop exists')
    }
}


/* Inserts a new Node at front of the list. */
function push(new_data)
{
     
    /* 1 & 2: Allocate the Node &
            Put in the data*/
    let new_node = new Node(new_data);
 
    /* 3. Make next of new Node as head */
    new_node.next = head;
 
    /* 4. Move the head to point to new Node */
    head = new_node;
}
 
// Driver code
push(2);
push(4);
push(15);
push(10);
 
// Create loop for testing
head.next.next.next.next = head;
 
detectLoop();
 