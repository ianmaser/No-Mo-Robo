/* QuadTree.js
 * @author Jamison Ball
 * @date 2/22/15
 * @last modified 2/22/15
 * @last editor
  minimum width: 100 max width: canvas.width minumum height: 3 * canvas.height/5 max height canvas.height
 * ************************************************************************************************************************************************************************************************
 * A quad tree data structure to help with collisons
 * ************************************************************************************************************************************************************************************************
 */



function QuadTree()
{
    var _root = null;
    
    function Node(parent)
    {
        var children = new DList();
        var elems = new DList();
		var x_GRID_TOP_LEFT = 100;
		var y_TOP_LEFT = (3 * canvas.width) / 5;
		
		var x_TOP_RIGHT = canvas.width;
		var y_GRID_TOP_RIGHT = (3 * canvas.width) / 5;
		
		var x_BOTTOM_LEFT = 100;
		var y_BOTTOM_LEFT = canvas.height;
		
		var x_BOTTOM_RIGHT = canvas.width;
		var y_BOTTOM_RIGHT = canvas.height;
		
        var parent = parent;
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
        
        
   }
   
    var _root = new Node();
    
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
    
    
    function split(node)
    {
        if(node instanceof Node)
        {
            for(var i = 0; i < 4; i++)
            {
                node.addChildren(new Node()); // add children
            }
            
            for(var j = 0; j < 4; j++)
            {
				//set up the children sizes
                node.getChildren().moveTo(j);
                node.getChildren().getElement().width = node.width / 2;
                node.getChildren().getElement().height = node.height / 2;
            }
			
			for(var k = 0; k < 4; k++) // note I know this for loop is incorrect for right now to be corrected at next team meeting.
			{
				//set up children positions
				node.getChilden().moveTo(k);
				node.getChildren().getElement().x = ((node.getChildren.getParent().x) / 4);
				node.getChildren().getElement().y = ((node.getChildren.getParent().y) / 4);
			}
			
			node.getDataList().moveTo(0);//start at the beginning
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
					
					if(node.getChildren().getIndex() !== -1) // if we haven't run off the end of the list...
					{
						continue; // because we need to run another check on a different child
					}
					
					else //if we have run off the end of the list...
					{
						node.getChildren.moveTo(node.getChildren.length() - 1); // move to the last child
						this.split(node.getChildren.getElement()); //split it
					}
				}
			}
				
        }
    };
}
