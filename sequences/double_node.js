class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
      }
    
      setnextNode(node) {
        if (node instanceof Node || node === null) {
          this.next = node;
        }else{
            throw new Error("Can only be a node or null");
        }
      }
    
      getNextNode(){
        return this.next;
      }
}