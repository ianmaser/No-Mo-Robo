/* QuadTree.js
 * @author Jamison Ball
 * @date 2/22/15
 * @last modified 2/25/15
 * @last editor
  minimum width: 100 max width: canvas.width minumum height: 3 * canvas.height/5 max height canvas.height
 * ************************************************************************************************************************************************************************************************
 * A quad tree data structure to help with collisons
 * ************************************************************************************************************************************************************************************************
 Methods:
 Node: 
 getParent()-get a node's parent
 getDataList()-get a nodes elements (ememies, projectiles, ect.)
 getChildren()-get a node's children (quadrent's of a client)
 getMaxChildren()- returns the maximum number of children may seem unnecissary but you never know
 isFull()-returns whether or not the size of the child list is equal to the max children
 -----------------------------------------------------------------------------------------
 Quad Tree:
 Node()-private inner class
 getRoot()-returns the root
 addChildren(node)- appends to the child list of the param node
 split(node)- splits the param node and appends data to it's children
 */



function QuadTree()
{
    var _root = null;
    
    function Node(parent)
    {
        var children = new DList();
        var elems = new DList();
        //Grid boundries- didn't know where to put it so I put it here.
		var x_GRID_TOP_LEFT = 100;
		var y_TOP_LEFT = (3 * canvas.width) / 5;
		
		var x_TOP_RIGHT = canvas.width;
		var y_GRID_TOP_RIGHT = (3 * canvas.width) / 5;
		
		var x_BOTTOM_LEFT = 100;
		var y_BOTTOM_LEFT = canvas.height;
		
		var x_BOTTOM_RIGHT = canvas.width;
		var y_BOTTOM_RIGHT = canvas.height;
		
        	var nodeParent = parent;
        	
        	this.width = canvas.width;
        	this.height = canvas.height;
		
		
    
    
        this.getParent = function()
        {
            return parent;
        };
    
        this.getDataList = function()
        {
            return elems;
        };
   
        this.getChildren = function()
        {
            return children;
        };
   
        this.getMaxChildren = function()
        {
            return _MAX_CHILDREN;  
        };
        
        function isFull()
        {
        	return(this.children.size() == getMaxChildren());
        }
        
        
   };
   
    var _root = new Node(null); // root has no parent
    
    this.getRoot = function()
    {
        return _root;
    };
    
    this.addChildren = function(node)
    {
       if(node instanceof Node)
       {
          if(Node.getChildren().size() < getMaxChildren())
          {
              node.getChildren().append(node);
          }
          
          else
          {
              split(node);
          }
       }
    };
    
    this.addData(data)
    {
    	getChildren().append(data);
    }
    
    function split(node)
    {
        if(node instanceof Node)
        {
            for(var i = 0; i < 4; i++)
            {
                node.addChildren(new Node(node)); // add children
            }
            
            for(var j = 0; j < 4; j++)
            {
		//set up the children sizes
                node.getChildren().moveTo(j);
                node.getChildren().getElement().width = node.width / 2;
                node.getChildren().getElement().height = node.height / 2;
            }
		//first child position	
	        node.getChildren().moveTo(0); //0
	        node.getChildren().getElement().x = node.x;
	        node.getChildren().getElement().y = 0;
	        //second child position
	        node.getChildren().moveNext(); // 1
	        node.getChildren().getElement().x = node.width / 2;
	        node.getChildren().getElement().y = 0;
	        //third child position
	        node.getChildren().moveNext(); // 2
	        node.getChildren().getElement().x = node.x;
	        node.getChildren().getElement().y = -node.height / 2; //remember down is up and up is down (-y is the upper screen)
	        //fourth child position
	        node.getChildren().moveNext(); // 3
	        node.getChildren().getElement().x = -node.width / 2; // x direction is normal
	        node.getChildren().getElement().y = node.height / 2; //smae invert situation as with child 2
			
			node.getDataList().moveTo(0);//start at the beginning of the data list
			node.getChildren.moveTo(0); // also start at beginning of child list
			
			for(var m = 0; m < 4; m++)
			{
				// move the elements from parent to child
				
				if(node.getDataList().getElement().x > node.x && node.getDataList().getElement().x < node.width &&
				node.getDataList().getElement().y >= node.y && node.getDataList().getElement().y >= node.height) // if the data element is within the juristiction of this child
				{
					node.getChildren().getElement().getDataList().append(node.getDataList().getElement()); //append the data element to the childs data array
					node.getDataList().moveNext(); // move to the next element
				}
				
				else // if not
				{
					if(node.getDataList().getIndex() !== -1) //if we haven't appended the last data element
					{
						node.getChildren().moveNext(); //move to the next child
					}
					
					else // if we have appended the last data element
					{
						node.getDataList.clear();
						return; //we're done
					}
					
					if(node.getChildren.getIndex() !== -1) // if we haven't run off the end of the list...
					{
						continue; // because we need to run another check with a different child
					}
					
					else //if we have run off the end of the list...
					{
						node.getChildren.moveTo(node.getChildren.size() - 1); // move to the last child
						split(node.getChildren.getElement()); //split it
					}
				}
			}
        }
    };
}
