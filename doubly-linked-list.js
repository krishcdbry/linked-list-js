/**
 Node (Class - In JavaScript there is no class but I have mentioned for the understanding) with two props data, link
 @param {number/string/null} data
 @param {Node/null} prev
 @param {Node/null} next
 */
function Node (data, prev, next) {
	this.data = (data) ? data : null;
	this.Prevlink = (prev) ? prev : null;
	this.Nextlink = (next) ? next : null;

	this.setData = function (data) {
		this.data = data;
	};

	this.setPrevlink = function (link) {
		this.Prevlink = link;
	};

	this.setNextlink = function (link) {
		this.Nextlink = link;
	};

	this.getData = function (data) {
		return this.data;
	};

	this.getPrevlink = function () {
		return this.Prevlink;
	};

	this.getNextlink = function () {
		return this.Nextlink;
	}
}

/**
 Linked list (Class - In JavaScript there is no class but I have mentioned for the understanding)
 which will have list of nodes and each node of type NODE (Data, prev, next)
 */
function DoublyLinkedlist() {
	this.start = null;
	this.end = null;
	this.size = 0;
}

/**
 Getting size
 @return number
 */
DoublyLinkedlist.prototype.getSize = function () {
	return this.size;
};

/**
 Checking weather linkedlist is empty or not
 @return boolean
 */
DoublyLinkedlist.prototype.isEmpty = function () {
	return this.size === 0;
};

/**
 Inserting node at the beginning
 @param {number/string/null} data
 Complexity : O(1)
 */
DoublyLinkedlist.prototype.insertNodeAtBeginning = function (data) {
	var newNode = new Node(data);
	this.size++;

	if (this.start == null) {
		newNode.setNextlink(this.start);
		this.start = newNode;
		this.end = this.start;
	}
	else {
		newNode.setNextlink(this.start);
		this.start.setPrevlink(newNode);
		this.start = newNode;
	}
};

/**
 Inserting node at the end
 @param {number/string/null} data
 Complexity : O(1)
 */
DoublyLinkedlist.prototype.insertNodeAtEnd = function (data) {
	var newNode = new Node(data);
	this.size++;

	if (this.start == null) {
		newNode.setNextlink(this.start);
		this.start = newNode;
		this.end = this.start;
	}
	else {
		newNode.setPrevlink(this.end);
		this.end.setNextlink(newNode);
		this.end = newNode;
	}
};

/**
 Inserting node at a particular position
 @param {number/string/null} data
 @param {number} pos
 Complexity : O(n)
 */
DoublyLinkedlist.prototype.insertNodeAtPos = function (data, pos) {
	var newNode = new Node(data);
	this.size++;
	var ptr = this.start;
	pos = pos-1;
	for (var i = 0; i < this.size; i++) {       // Looping the linked list until the pos found
		if (i == pos) {
			newNode.setNextlink(ptr.getNextlink());
			newNode.setPrevlink(ptr);
			ptr.setNextlink(newNode);
			break;
		}
		ptr = ptr.getNextlink();
	}
};

/**
 Deleting node at the beginning
 Complexity : O(1)
 */
DoublyLinkedlist.prototype.deleteNodeAtBeginning = function () {
	if (this.size <= 0) {
		return;
	}

	if (this.size == 1) {
		this.start = new Node();
		this.end = new Node();
		this.size--;
	}
	else {
		var tmpNode = this.start.getNextlink();
		tmpNode.setPrevlink(null);
		this.start = tmpNode;
		this.size--;
	}
};

/**
 Deleting node at the end
 Complexity : O(1)
 */
DoublyLinkedlist.prototype.deleteNodeAtEnd = function () {
	if (this.size <= 0) {
		return;
	}

	if (this.size == 1) {
		this.start = new Node();
		this.end = new Node();
		this.size--;
	}

	else {
		this.end = this.end.getPrevlink();
		this.end.setNextlink(null);
		this.size--;
	}
};

/**
 Deleting node at a particular position
 @param {number} pos
 Complexity : O(n)
 */
DoublyLinkedlist.prototype.deleteNodeAtPos = function (pos) {
	if (pos >= this.size) {
		return;
	}

	if (pos === 0) {              // First position
		this.start = this.start.getNextlink();
		this.size--;
	}
	else {
		var ptr = this.start;
		pos = pos-1;
		for (var i = 0; i < this.size; i++) {      // Looping through the linked list until position found
			if (i === pos) {
				var tmpNode = ptr.getNextlink().getNextlink();
				tmpNode.setPrevlink(ptr);
				ptr.setNextlink(tmpNode);
				this.size--;
				break;
			}
			ptr = ptr.getNextlink();
		}
	}
};

/**
 Getting item of linked list at a particular position
 @param {number} pos
 Complexity : O(n)
 */
DoublyLinkedlist.prototype.getItem = function (pos) {
	if (pos >= this.size) {
		return;
	}

	if (pos === 0) {             				 // First position
		return this.start.getData();
	}
	else {
		var ptr = this.start;
		for (var i = 0; i < this.size; i++) {      // Looping through the linked list until position found
			if (i === pos) {
				return ptr.getData();
			}
			ptr = ptr.getNextlink();
		}
	}
};

/**
 Getting index of linked list item
 @param {number} item
 Complexity : O(n)
 */
DoublyLinkedlist.prototype.getIndex = function (item) {
	if (item === this.start.getData()) {             				 // First position
		return 0;
	}
	else {
		var ptr = this.start;
		for (var i = 0; i < this.size; i++) {      // Looping through the linked list until item found
			if (ptr.getData() === item) {
				return i;
			}
			ptr = ptr.getNextlink();
		}
	}
	return 'Item not found';
};

/**
 Making linked list circular (Temporary)
 */
DoublyLinkedlist.prototype.makeCircular = function () {
	var ptr = this.start;
	var head = this.start;
	var i = 0;
	while (i < this.size) {
		if (i == this.size-1) {
			ptr.setNextlink(head);
		}
		ptr = ptr.getNextlink();
		i++;
	}
};

/**
 Printing nodes
 */
DoublyLinkedlist.prototype.printNodes = function () {
	var ptr = this.start;
	var i = this.size;
	while(i > 0) {
		console.log(ptr);
		ptr = ptr.getNextlink();
		if (ptr === null) {
			break;
		}
		i--
	}
};

/**
 Printing list as a string
 */
DoublyLinkedlist.prototype.printList = function () {
	var res = '';
	var ptr = this.start;
	var i = this.size;
	while(i > 0) {
		res = res + ptr.getData();
		if (i > 1) {
			res = res + ",";
		}
		ptr = ptr.getNextlink();
		if (ptr === null) {
			break;
		}
		i--;
	}
	console.log(res);
};

var krish = new DoublyLinkedlist();

krish.insertNodeAtBeginning(9);
krish.insertNodeAtBeginning(5);
krish.insertNodeAtBeginning(6);
krish.insertNodeAtBeginning(7);

krish.insertNodeAtEnd(100);      // Inserting 100 at the end

krish.insertNodeAtBeginning(101);  // Inserting 101 at the beginning

krish.insertNodeAtPos(333, 3);   // Inserting a node at particular position 3

krish.deleteNodeAtPos(4);        // Delete a node at positon 4

krish.deleteNodeAtBeginning();    // Delete a node at beginning

krish.deleteNodeAtEnd();    // Delete a node at beginning

krish.makeCircular();            // Making linkedlist to circular

krish.getSize();				 // Printing size of linked list

krish.getItem(3);				 // Prints the item at position 3

krish.getIndex(7);				 // Prints the index of item - 7

krish.printNodes();              // Prints all nodes one by one

krish.printList();               // Prints linked list one by one

console.log(krish);              // Prints the linkedlist class


//JSBin : https://jsbin.com/gakuduw/edit?js,output
