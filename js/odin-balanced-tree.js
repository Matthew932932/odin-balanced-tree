#!/usr/bin/env node

// your code

class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class Tree {
  constructor(arrayTr){
    this.root = this.buildTree(arrayTr);
  }
  
  buildTree(array) {
    const cleanArray = [...new Set(array)].sort((a, b) => a - b); // Sort and remove duplicates
    return this.sortedArrayToBST(cleanArray, 0, cleanArray.length - 1);
  }

  sortedArrayToBST(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = this.sortedArrayToBST(array, start, mid - 1);
    node.right = this.sortedArrayToBST(array, mid + 1, end);

    return node;
  }

}


const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const bst = new Tree([1, 2, 3, 4, 12, 5, 8, 9, 6, 42, 11, 69, 80]);


console.log(bst.root);
prettyPrint(bst.root);




console.log("test running");



// // Recursive function to construct BST
// function sortedArrayToBSTRecur(arr, start, end) {
//   if (start > end) return null;

//   myTree = new Tree(arr);

  
//   // Find the middle element
//   let mid = start + Math.floor((end - start) / 2);

//   // Create root node
//   let root = new Node(arr[mid]);

//   // Create left subtree
//   root.left = sortedArrayToBSTRecur(arr, start, mid - 1);

//   // Create right subtree
//   root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

//   return root;
// }

//function sortedArrayToBST(arr) {
// return sortedArrayToBSTRecur(arr, 0, arr.length - 1);
//}

// function preOrder(root) {
//   if (root === null) return;
//   console.log(root.data);
//   preOrder(root.left);
//   preOrder(root.right);
// }



// //const btn = document.querySelector("#btn");
// //btn.onclick = () => alert("Hello World\!");




// //const link = document.querySelector(".comm");
// //link.textContent = "Mozilla Developer Network";
// /*link.href = "https://developer.mozilla.org";*/
// const sect = document.querySelector("section");
// const para = document.createElement("div");
// para.textContent = "This is the new div";

// para.setAttribute("class", "secDiv");   //auto styled in css as soon as given class, inline styles below
// sect.appendChild(para);

// const text = document.createTextNode(
//     " this is the created text node addition",
//   );
//   const linkPara = document.querySelector(".secDiv");
//   linkPara.appendChild(text);
//   sect.appendChild(linkPara);

//   const btn = document.querySelector("#btn");
//   btn.addEventListener("click", function (e) {
//     sect.removeChild(linkPara);
//     e.target.style.background = "blue";
//   });

// //sect.removeChild(linkPara);   //Removing a node is pretty simple as well, at least when you have a reference to the node to be removed and its parent. In our current case, we just use Node.removeChild(), like this
// //linkPara.remove();     //When you want to remove a node based only on a reference to itself, which is fairly common, you can use Element.remove()
// //linkPara.parentNode.removeChild(linkPara);  //older browsers

// //Inline styles
// /*para.style.color = "white";
// para.style.backgroundColor = "purple";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";*/
