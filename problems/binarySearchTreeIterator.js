/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.getLeft(root)
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {  
  const top = this.stack.pop()
  if(top.right) {
    this.getLeft(top.right)
  }
  return top.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

BSTIterator.prototype.getLeft = function(node) {
  while(node) {
    this.stack.push(node)
    node = node.left
  }
}