/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Curr = l1;
    let l2Curr = l2;
    let l1Array = [];
    let l2Array = [];

    while(true) {
        if(l1Curr && l1Curr.next) {
            l1Array.push(l1Curr.val);
            l1Curr = l1Curr.next;
        } else {
            l1Array.push(l1Curr.val);
            l1Curr = l1Curr.next;
            break;
        }
    }

    while(true) {
        if(l2Curr && l2Curr.next) {
            l2Array.push(l2Curr.val);
            l2Curr = l2Curr.next;
        } else {
            l2Array.push(l2Curr.val);
            l2Curr = l2Curr.next;
            break;
        }
    }

    let reversel1 = l1Array.reverse().join("");
    let reversel2 = l2Array.reverse().join("");
    let l1Int = BigInt(reversel1);
    let l2Int = BigInt(reversel2);
    let sum = l1Int + l2Int;
    let stringSum = sum.toString();
    let reverseStringSum = stringSum.split("").reverse().join("");
    let splitString = reverseStringSum.split("");
    const newArray = splitString.map(x => parseInt(x));

    let head = new ListNode(newArray[0]);
    let current = head;
    
    for (let x = 1; x < newArray.length; x++) {
        current.next = new ListNode(newArray[x]);
        current = current.next; 
    }

    return head
};