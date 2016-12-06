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
DoublyLinkedlist.prototype.insertNodeAtBegining = function (data) {
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
DoublyLinkedlist.prototype.deleteNodeAtBegining = function () {
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
 Complexity : O(n)
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
		var ptr = this.start;
		var tmpNode = null;
		for (var i = 0; i < this.size-1; i++) {    // Looping all the linked list to last but one
			tmpNode = ptr;
			ptr = ptr.getNextlink();
		}
		tmpNode.setNextlink(null);
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
 Printing data as per the request
 @param {number} isNode [1/none]
 */
DoublyLinkedlist.prototype.printData = function (isNode) {
	var ptr = this.start;
	while(this.size > 0) {
		console.log((isNode) ? ptr : ptr.getData());
		ptr = ptr.getNextlink();
		if (ptr === null) {
			break;
		}
		this.size--;
	}
};

var krish = new DoublyLinkedlist();

krish.insertNodeAtBegining(9);
krish.insertNodeAtBegining(5);
krish.insertNodeAtBegining(6);
krish.insertNodeAtBegining(7);

krish.insertNodeAtEnd(100);      // Inserting 100 at the end

krish.insertNodeAtBeginning(101);  // Inserting 101 at the beginning

krish.insertNodeAtPos(333, 3);   // Inserting a node at particular position 3

krish.deleteNodeAtPos(4);        // Delete a node at positon 4

krish.deleteNodeAtBeginning();    // Delete a node at beginning

krish.deleteNodeAtEnd();    // Delete a node at beginning

krish.makeCircular();            // Making linkedlist to circular

krish.printData(1);               // Prints all nodes one by one

krish.printData();               // Prints all values one by one

console.log(krish);              // Prints the linkedlist class


//JSBin : https://jsbin.com/gakuduw/edit?js,output
