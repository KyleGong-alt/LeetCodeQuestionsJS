/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let newArray = [];
    while (true) { 
        if (head && head.next) { // Check whether the current and next node exists
            newArray.push(head.val);
            head = head.next 
        } else { // At the last element of LL
            newArray.push(head.val); // Iterating through the LL
            head = head.next // Update head to the next elements
            break; // break out of the while loop since we're at the last element of LL
        }
    }

    let reversed = [...newArray].reverse(); // Create a reversed shallow copy of array
    for (let x = 0; x < newArray.length; x++) { // Iterate through array
        if (reversed[x] !== newArray[x]) { // Check if reversed array matches original arr
            return false;
        }
    }
    
    return true;
};