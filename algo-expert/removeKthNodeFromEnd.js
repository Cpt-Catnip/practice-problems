// https://www.algoexpert.io/questions/Remove%20Kth%20Node%20From%20End

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // remove node before this one
  let node = null;

  /**
   * search through linked list and set (k + 1)th node
   */
  const getKthNodeFromEnd = (head) => {
    let d;

    // base case
    if (!head.next) d = 1;
    else d = getKthNodeFromEnd(head.next) + 1;

    // set (k+1)th node
    if (d === k + 1) node = head;

    // return distance from tail
    return d;
  };

  getKthNodeFromEnd(head);

  if (!node) {
    // remove head
    head.value = head.next.value;
    head.next = head.next.next;
  } else {
    // remove kth node from tail
    node.next = node.next.next;
  }
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;

/**
 * I was actually pretty close on this one despite attacking the problem from
 * a much different angle. This is proof of there never being one way to solve
 * a problem. Admittedly Clement's solution was a bit more clever, but it wasn't
 * really any more performant than mine.
 *
 * I struggled with the edge-case of the kth node from the end being the head,
 * but I understand what I was doing wrong now.
 *
 * Not bad, not bad.
 */
