class Node{
	constructor(value){
		this.value=value;
		this.left=null;
		this.right=null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root=null;
	}
	insert(value){
		var newNode=new Node(value);
		if(this.root===null){
			this.root=newNode;
			return this;
		}
		var current=this.root;
		while(true){
			if(value===current.value) return undefined;
			if(value<current.value){
				if(current.left===null){
					current.left=newNode;
					return this;
				}else{
					current=current.left;
				}
			}else{
				if(current.right===null){
					current.right=newNode;
					return this;
				}else{
					current=current.right;
				}
			}				
		}
		
	}
	find(value){
		if(this.root===null) return false;
		var current=this.root;
		var found=false;
		while(current &&!found){
			if(value<current.value){
				current=current.left;
			}else if(value>current.value){
				current=current.right;
			}else{
				return true;
			}
		}
		return false;
	}
};
 
var tree=new BinarySearchTree();
tree.insert(20);
tree.insert(15);
tree.insert(12);
tree.insert(19);
tree.insert(25);
tree.insert(23);
tree.insert(29);
console.log(tree);