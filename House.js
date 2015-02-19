/*
 House.js
 *****************************************************************************************************************************
the House for the tower defense
*****************************************************************************************************************************

@author Jamison Ball
@date 2/18/15
@last edited 2/18/15
@last editor
*/

function House(texture, x, y)
{
   var health = 100;
   var sprte = new Sprite();
   sprite.image = Texutes.load(texture);
   sprite.x = x;
   sprite.y = y;
   
   this.update = function()
   {
     if(dead())
     {
        return 0;
     }
     return 1;
   }
   
   this.draw = function()
   {
      world.addChild(this.sprite);
   }
   
   this.dead = function()
   {
      return getHealth() == 0;
   }
   
   this. getHealth = function()
   {
     return health;
   }
      
}
