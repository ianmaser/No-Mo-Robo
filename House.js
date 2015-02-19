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
   var sprite = new Sprite();
   sprite.image = Textures.load(texture);
   sprite.x = x;
   sprite.y = y;
   
   
   this.draw = function()
   {
      world.addChild(this.sprite);
   }
   
   this.dead = function()
   {
      return getHealth() <= 0;
   }
   
   this. getHealth = function()
   {
     return health;
   }
      
}
