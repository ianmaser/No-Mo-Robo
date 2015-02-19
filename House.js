function House(texture)
{
   var health = 100;
   var dead = false;
   var sprte = new Sprite();
   sprite.image = Texutes.load(texture);
   
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
