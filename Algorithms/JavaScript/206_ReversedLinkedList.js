/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head; // Initalize a new head
    let previous = null;  

    while(current) { // while there are still Linked Values 
        let tempNode = current.next; // Save the next nodes to a temp element
        current.next = previous; // Set next pointer to previous nodes
        previous = current; // Move previous pointer to current node
        current = tempNode; // Move the current pointer to the previous saved next nodes
    }
    return previous;
};