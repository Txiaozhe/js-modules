/**
 * Definition for a binary tree node.
 **/

class TreeNode {
  constructor() {
    this.left = null
    this.right = null
  }

  TreeNode(x) {
    this.val = x;
  }
}

class ResultType {
  ResultType(found, val) {
      this.found = found;
      this.val = val;
  }
}

class Solution {
  kthSmallest(root, k) {
      return this.kthSmallestHelper(root, k).val;
  }

  kthSmallestHelper(root, k) {
      if (root == null) {
          return new ResultType(false, 0);
      }

      var left = this.kthSmallestHelper(root.left, k);

      // 左子树找到，直接返回
      if (left.found) {
          return new ResultType(true, left.val);
      }

      // 左子树的节点数目 = K-1，结果为 root 的值
      if (k - left.val == 1) {
          return new ResultType(true, root.val);
      }

      // 右子树寻找
      var right = this.kthSmallestHelper(root.right, k - left.val - 1);
      if (right.found) {
          return new ResultType(true, right.val);
      }

      // 没找到，返回节点总数
      return new ResultType(false, left.val + 1 + right.val);
  }
}

var sol = new Solution()
console.log(sol.kthSmallest(2))
