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

const displayList = l => {
  if (l == null) {
    return;
  }

  var n = l;
  str = "";
  while (n) {
    str = str + `${n.val} `;
    n = n.next;
  }
};

const addNodeToHead = (list, value) => new ListNode(value, list);

const reverseList = l => {
  var c = l;
  var p = null;
  var n = null;
  while (c != null) {
    n = c.next;
    c.next = p;
    p = c;
    c = n;
  }
  l = p;
  return l;
};

var addTwoNumbers = function(l1, l2) {
  var list1 = l1;
  var list2 = l2;
  var carry = 0;
  var sumList = null;
  while (list1 !== null && list2 !== null) {
    console.log(`${list1.val} + ${list2.val} = #{}`);
    elementSum = list1.val + list2.val;
    sum = (elementSum % 10) + carry;
    if (sum === 10) {
      elementSum = sum;
      sum = 0;
    }
    console.log(
      `${list1.val} + ${list2.val} = ${elementSum}  carry ---> ${carry}`
    );
    carry = elementSum < 10 ? 0 : 1;
    list1 = list1.next;
    list2 = list2.next;
    sumList = addNodeToHead(sumList, sum);
  }
  if (list1 == null && list2 == null) {
    if (carry == 1) {
      sumList = addNodeToHead(sumList, carry);
    }

    return reverseList(sumList);
  }
  var remaining = list1 === null ? list2 : list1;
  while (remaining != null) {
    var remainSum = carry + remaining.val;
    carry = remainSum < 10 ? 0 : 1;
    sumList = addNodeToHead(sumList, remainSum % 10);
    remaining = remaining.next;
  }
  if (carry == 1) {
    sumList = addNodeToHead(sumList, carry);
  }
  console.log(sumList);
  return reverseList(sumList);
};
