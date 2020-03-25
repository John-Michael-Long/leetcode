/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let head = new ListNode(-1)
    let current = head
    let nodesRemaining = true;
    
    while(nodesRemaining) {
        let minNode;
        let minIdx;
        nodesRemaining = false;
        lists.forEach((node, idx) => {
            if(node) nodesRemaining = true
            if(node && (!minNode || node.val < minNode.val)){
                minNode = node
                minIdx = idx
            }
        })
        
        if(nodesRemaining) { 
            current.next = lists[minIdx]
            lists[minIdx] = lists[minIdx].next
            current = current.next;
        }
    }
    return head.next
};