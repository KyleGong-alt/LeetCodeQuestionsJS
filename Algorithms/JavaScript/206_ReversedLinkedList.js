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
    let newArray = [];

    // Create an array from Linked List
    if (head) {
        while(true) {
            if(head.next !== null) {
                newArray.push(head.val);
                head = head.next;
            } else {
                newArray.push(head.val);
                break;
            }
        }
    } else { 
        return head; //return [] if head is empty
    }

    newArray.reverse(); // Reverse the Array

    let newHead = new ListNode(newArray[0]); // Create a new head
    let current = newHead; // Lets you track of the last node
    for (let x = 1; x < newArray.length; x++) { // Head is already initalized so 1st index
        current.next = new ListNode(newArray[x]) // Creates next iteration to append to
        current = current.next; // Update current so it can push
    }
    return newHead;
};