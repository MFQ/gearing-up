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
var deleteDuplicates = function(head) {
  var p = head;
  if (p === null || p.next === null) {
    return head;
  }
  var n = head.next;
  var e = {
    ["v--" + p.val]: true
  };

  while (n) {
    if (e["v--" + n.val]) {
      var temp = n;
      while (temp && temp.val === n.val) {
        temp = temp.next;
      }
      p.next = temp;
      n = temp;
      if (n === null) {
        return head;
      }
      e["v--" + n.val] = true;
    } else {
      e["v--" + n.val] = true;
    }
    p = n;
    n = n.next;
  }
  return head;
};
