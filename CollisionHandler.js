/* 
   CollisonHandler.js
 * @authors Graham Culver, Jamison Ball
 * @date 2/22/15
 * @last modified 2/22/15
 * *************************************************************************************************************************************************************************************************
 * A class to handle collisions
 * *************************************************************************************************************************************************************************************************
 */

function CollsionHandler()
{
    var qt = new QuadTree();

    function checkCollison(obj1, obj2)
    {
       if(obj1.getSprite().x + obj1.getSprite().width >= obj2.getSprite().x)
       {
          if(obj1.getSprtie().y + obj1.getSprite().height >= obj2.getSprite().y && 
          obj1.getSprite().y <= obj2.getSprite().y + obj2.getSprite().height)
          {
            damageStep(obj1, obj2);
            return true;
          }
       }
       
       else
       {
          return false;
       }
    };
    
    function damageStep(obj1, obj2)
    {
       if(obj1 instanceof Enemey && obj2 instanceof House)
       {
         obj2.mondifyHealth(obj1.damage);
       }
       
       if(obj1 instanceof Projectile && obj2 instanceof Enemy)
       {
          obj2.modifyCondition(obj1.damage());
          obj1._collision = true;
       }
    }
    
    function clear(node)
    {
       if(node instanceof Node)
       {
          for(node.getChildren().moveTo(0); node.getChildren.getIndex() >= 0; node.getChildren.moveNext())
          {
             if(node.getChildren.getElement() instanceof Enemy)
             {
                if(node.getChildren().condition() <= 0)
                {
                   node.getChildren().remove();
                }
                
                else if(node.getChildren.getElement() instanceof Projectile)
                {
                   if(node.getChildren().hasCollided())
                   {
                      node.getChildren().remove();
                      
                   }
                }
             }
          }
       }
    };
    
    this.collision(ref)
    {
      for(this.elist.moveTo(0); this.elist.getIndex() >= 0; this.elist.moveNext())
      {
         ref.moveTo(0);
         if(checkCollison(ref.getElement(), ref.getElement()))
         {
            return true;
         }
      }
       
       
    };
    
    this.update = function(elist,plist, tlist)
    {
       
      for(elist.moveTo(0); elist.getIndex() >= 0; elist.moveNext())
      {
         ref.moveTo(0);
         if(checkCollison(plist.getElement(), elist.getElement()))
         {
            ;
         }
      }
       collision(tlist);
    }
}


