const hasCycle = (head) => {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast?.next) {
    if (slow === fast) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
