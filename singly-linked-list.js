/**
 Node (Class - In JavaScript there is no class but I have mentioned for the understanding) with two props data, link
 @param {number/string/null} data
 @param {Node/null} link
 */
function Node(data, link) {
	this.data = (data) ? data : null;
	this.link = (link) ? link : null;
}

Node.prototype.setData = function(data) {
	this.data = data;
};

Node.prototype.setLink = function(link) {
	this.link = link;
};

Node.prototype.getData = function(data) {
	return this.data;
};

Node.prototype.getLink = function() {
	return this.link;
};

/**
 Linked list (Class - In JavaScript there is no class but I have mentioned for the understanding)
 */
function Linkedlist() {
	this.start = null;   // Tracking starting point
	this.end = null;     // Tracking ending point
	this.size = 0;       // Tracking size
	this.isCircular = false;
}

/**
 Getting size
 @return number
 */
Linkedlist.prototype.getSize = function() {
	return this.size;
};

/**
 Checking weather linkedlist is empty or not
 @return boolean
 */
Linkedlist.prototype.isEmpty = function() {
	return this.size === 0;
};

/**
 Inserting node at the beginning
 @param {number/string/null} data
 Complexity : O(1)
 */
Linkedlist.prototype.insertNodeAtBeginning = function(data) {
	var newNode = new Node(data);
	this.size++;

	if (this.start == null) {      // If empty
		newNode.setLink(this.start);
		this.start = newNode;
		this.end = this.start;
	}
	else {
		newNode.setLink(this.start);
		this.start = newNode;
	}
};

/**
 Inserting node at the end
 @param {number/string/null} data
 Complexity : O(1)
 */
Linkedlist.prototype.insertNodeAtEnd = function(data) {
	var newNode = new Node(data);
	this.size++;

	if (this.start == null) {   // If empty
		newNode.setLink(this.start);
		this.start = newNode;
		this.end = this.start;
	}
	else {
		this.end.setLink(newNode);
		this.end = newNode;
	}
};

/**
 Inserting node at a particular position
 @param {number/string/null} data
 @param {number} pos
 Complexity : O(n)
 */
Linkedlist.prototype.insertNodeAtPos = function(data, pos) {
	var newNode = new Node(data);
	this.size++;
	var ptr = this.start;
	pos = pos - 1;
	for (var i = 0; i < this.size; i++) {   // Looping through the linked list
		if (i == pos) {                      // Found the before pos node
			newNode.setLink(ptr.getLink());
			ptr.setLink(newNode);
			break;
		}
		ptr = ptr.getLink();
	}
};

/**
 Deleting node at the beginning
 Complexity : O(1)
 */
Linkedlist.prototype.deleteNodeAtBeginning = function() {
	if (this.size <= 0) {
		return;
	}

	if (this.size == 1) {         // If Single item
		this.start = new Node();
		this.end = new Node();
		this.size--;
	}
	else {
		var tmpNode = this.start.getLink();
		this.start = tmpNode;
		this.size--;
	}
};

/**
 Deleting node at the end
 Complexity : O(n)
 */
Linkedlist.prototype.deleteNodeAtEnd = function() {
	if (this.size <= 0) {
		return;
	}

	if (this.size == 1) {          // If Single item
		this.start = new Node();
		this.end = new Node();
		this.size--;
	}

	else {
		var ptr = this.start;
		var tmpNode = null;
		for (var i = 0; i < this.size - 1; i++) {  // Looping through the linked list
			tmpNode = ptr;
			ptr = ptr.getLink();
		}
		tmpNode.setLink(null);
		this.size--;
	}
};

/**
 Deleting node at a particular position
 @param {number} pos
 Complexity : O(n)
 */
Linkedlist.prototype.deleteNodeAtPos = function(pos) {
	if (pos >= this.size) {
		return;
	}

	if (pos === 0) {                           // First position
		this.start = this.start.getLink();
		this.size--;
	}
	else {
		var ptr = this.start;
		pos = pos - 1;
		for (var i = 0; i < this.size; i++) {       // Looping through the linked list until position found
			if (i === pos) {
				var tmpNode = ptr.getLink().getLink();
				ptr.setLink(tmpNode);
				this.size--;
				break;
			}
			ptr = ptr.getLink();
		}
	}
};

/**
 Getting item of linked list at a particular position
 @param {number} pos
 Complexity : O(n)
 */
DoublyLinkedlist.prototype.getItem = function(pos) {
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
			ptr = ptr.getLink();
		}
	}
};

/**
 Getting index of linked list item
 @param {number} item
 Complexity : O(n)
 */
DoublyLinkedlist.prototype.getIndex = function(item) {
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
Linkedlist.prototype.makeCircular = function() {
	var ptr = this.start;
	var head = this.start;
	var i = 0;
	while (i < this.size) {
		if (i == this.size - 1) {
			ptr.setLink(head);
		}
		ptr = ptr.getLink();
		i++;
	}
	this.isCircular = true;
};

/**
 Printing data as per the request
 @param {number} isNode [1/none]
 */
Linkedlist.prototype.printData = function(isNode) {
	var ptr = this.start;
	while (this.size > 0) {
		console.log((isNode) ? ptr : ptr.getData());
		ptr = ptr.getLink();
		if (ptr === null) {
			break;
		}
		this.size--;
	}
};

var krish = new Linkedlist();

krish.insertNodeAtBeginning(9);   // Inserting data from begining
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

krish.getItem(3);				 //

krish.printNodes();              // Prints all nodes one by one

krish.printList();               // Prints all values one by one

console.log(krish);              // Prints the linkedlist class

// JsBin : https://jsbin.com/jebibe/edit?js,console
