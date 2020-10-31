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

const insertAtTail = (list, element) => {
  if (list == null) {
    return new ListNode(element, null);
  }

  var tem = list;
  while (tem.next) {
    tem = tem.next;
  }
  tem.next = new ListNode(element, null);
  return list;
};

var mergeTwoLists = function(l1, l2) {
  var l11 = l1;
  var l22 = l2;
  var newList = null;

  while (l11 && l22) {
    if (l11.val < l22.val) {
      newList = insertAtTail(newList, l11.val);
      l11 = l11.next;
    } else {
      newList = insertAtTail(newList, l22.val);
      l22 = l22.next;
    }
  }

  var remain = l11 ? l11 : l22;

  while (remain) {
    newList = insertAtTail(newList, remain.val);
    remain = remain.next;
  }
  return newList;
};
