/* 
   CollisonHandler.js
 * @authors Graham Culver, Jamison Ball
 * @date 2/22/15
 * @last modified 2/22/15
 * *************************************************************************************************************************************************************************************************
 * A class to handle collisions
 * *************************************************************************************************************************************************************************************************
 */

function CollsionHandler(world)
{
    var curretTurrets = new DList();
    var currentEnemies = new DList();
    var currentProjectiles = new DList();
    
    function checkCollison(obj1, obj2)
    {
       if(obj1.getSprite().x === obj2.getSprite().x && obj1.getSprite().y === obj2.getSprite().y)
       {
          return 1;
       }
       
       else
       {
          return 2;
       }
    }
}


