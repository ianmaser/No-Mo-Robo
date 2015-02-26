/* 
 * @author Jamison Ball
 * @date 2/22/15
 * @last update 2/22/15
 * @last editor
 * ************************************************************************************************************************************************************************************************
 * The basic projectile class. It might possibly go unused but it's a decent test class for collison detection
 * ************************************************************************************************************************************************************************************************
 */
function Projectile(x, y)// Note to self and other team members look up function overloading in javascript. May come in handy if different projectiles have different speeds
{
    var sprite = new Sprite();
    var speed = 10;
    var damage = 1;
    sprite.x = x;
    sprite.y = y;
    
    this.draw = function()
    {
        world.addChild(getSprite());
    };
    
    this.getSprite = function()
    {
        return this.sprite;
    };
    
    
    this.damage = function(damage, enemy) 
    {
        enemy.modifyConditon(-damage);
    };
    
    //@override note to team members: take your pick. Which damage function is better?
   // this.damage = function(damage)
    //{
        //to be impemented
   // };
    
    this.removeSelf = function()
    {
        world.removeChild(this);
    };
};


