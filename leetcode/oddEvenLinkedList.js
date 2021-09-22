// https://leetcode.com/problems/odd-even-linked-list/

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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  const oddHead = head;
  const evenHead = head.next;
  let node = head.next.next;

  let prevOdd = oddHead;
  let prevEven = evenHead;

  let i = 3;

  while (node) {
    if (isEven(i)) {
      prevEven.next = node;
      prevEven = node;
    } else {
      prevOdd.next = node;
      prevOdd = node;
    }
    i++;
    node = node.next;
  }

  // combine two lists
  prevEven.next = null;
  prevOdd.next = evenHead;

  // return new list
  return oddHead;
};

const isEven = (n) => n % 2 === 0;

/**
 * Okay first linked link problem in a while. Gotta watch out for cycles. All I
 * really missed was making sure the last even node had no next but I spend like
 * 20 mins not realizing that. Takeaway: linked lists are tricky and you gotta
 * pay attention! Just do more of these I guess.
 */
