/*EnemyHandler.js
 * **********************************************************************************************************************************************************************************************
 * A factory class to handle the spawning of Enemies
 * **********************************************************************************************************************************************************************************************
 * @author Jamison Ball
 * @date 2/12/15
 * @last modified 2/12/15
 * @last editor 
 */


function EnemyHandler(world)
{
  var length = 0;
  var enemyList = new DList();
  
 this.spawn = function()
  {
      var e = new Enemy(this.newID());
      enemyList.append(e);
      world.addChild(e);
      length++;
  }
  this.removeEnemey = function(id)
  {
      enemyList.moveTo(id);
      world.removeChild(enemyList.getElement())
      enemyList.remove();
      length--;
  }
  this.update = function()
  {
      for(enemyList.moveTo(0); enemyList.getIndex() >= 0; enemyList.moveNext())
      {
          enemyList.getElement().update();
      }
  }
  
  this.newID = function()
  {
      var next;
      
      if(this.next === undefined || this.next < 0)
      {
          this.next = 0;
      }
      return this.next++;
  }
  }
