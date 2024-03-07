class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function levelOrderTraversal(root) {
  // type your code here
  if (!root) {
    return [];
  }

  let result = [];
  let queue = [root];
  while (queue.length > 0) {
      if (root.left) {
        queue.push(root.left);
      }
      if (root.right) {
        queue.push(root.right);
      }

      let firstNode = queue[0];
      result.push(firstNode.value);
      queue.shift();
      // console.log("QUEUE is", queue)
      root = queue[0];

  }

  return result;
}

if (require.main === module) {
  let root = new Node(1, new Node(2), new Node(3));
  // add your own tests in here
  console.log("Expecting: [[1], [2, 3]]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30));

  console.log("Expecting: [[10], [20, 30], [9, 22]]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30, null, new Node(40)));

  console.log("Expecting: [[10], [20, 30], [9, 22, 40]]");
  console.log(levelOrderTraversal(root));
}

module.exports = {
  Node,
  levelOrderTraversal
};

// Please add your pseudocode to this file
// And a written explanation of your solution
