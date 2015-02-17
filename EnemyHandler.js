/*EnemyHandler.js
 * **********************************************************************************************************************************************************************************************
 * A factory class to handle the spawning of Enemies
 * **********************************************************************************************************************************************************************************************
 * @author Jamison Ball
 * @date 2/12/15
 * @last modified 2/14/15
 * @last editor 
 */
 
function EnemyHandler(world)
{
  var length = 0;
  var enemyList = new DList();
  var spwnHndlr = new SpawnHandler(world);
  
  
  this.addEnemy = function(type)
  {
    Enemy e = spwnHndlr.spawn(type)); //make Enemy to be added
    enemyList.append(e); //append it to the Enemy list
    world.addChild(e);
  };
  
  this.update = function()
  {
      for(enemyList.moveTo(0); enemyList.getIndex() >= 0; enemyList.moveNext())
      {
          enemyList.getElement().update();
          
          if(enemyList.getElement().isDead())
          {
            enemyList.getElement().removeSelf();
            enemyList.remove(enemyList.getElement());
            continue;
          }
      }
  };
  
  function SpawnHandler(world)
  {
  var enemyList = new DList();
  
  function spawn(type)
  {
      var e = new Enemy(type, ID());
      return e;
  };
  
  function ID()
  {
       var next;
      
      if(this.next === undefined || this.next < 0)
      {
          this.next = 0;
      }
      return this.next++;
  };
  }
