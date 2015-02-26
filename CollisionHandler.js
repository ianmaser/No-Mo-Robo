/* 
   CollisonHandler.js
 * @authors Graham Culver, Jamison Ball
 * @date 2/22/15
 * @last modified 2/22/15
 * *************************************************************************************************************************************************************************************************
 * A class to handle collisions
 * *************************************************************************************************************************************************************************************************
 */

function CollsionHandler(qt)
{
    var curretTurrets = new DList();
    var currentEnemies = new DList();
    var currentProjectiles = new DList();
    
    function checkCollison(obj1, obj2)
    {
       if(obj1.getSprite().x + obj1.getSprite().width >= obj2.getSprite().x)
       {
          if(obj1.getSprtie().y + obj1.getSprite().height <= obj2.getSprite().y && 
          obj1.getSprite().y + obj1.getSprite().height >= obj2.getSprite().y)
          {
            damageStep(obj1, obj2)
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
          obj1.damage();
       }
       
       if(obj1 instanceof Projectile && obj2 instaceof Enemy)
       {
          Projectile.damage();
       }
    }
}


