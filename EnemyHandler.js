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
  var spawnHandle = new SpawnHandler();
  

 function removeEnemey()
  {
    for(enemyList.moveTo(0); enemyList.getIndex() >= 0; enemyList.moveNext())
    {
      if(enemyList.getElement() === null)
      {
      world.removeChild(enemyList.getElement())
      enemyList.remove();
      length--;
      }
    }
  }
  this.update = function()
  {
      for(enemyList.moveTo(0); enemyList.getIndex() >= 0; enemyList.moveNext())
      {
          enemyList.getElement().update();
      }
  }
  
  function SpawnHandler(world)
{
  var enemyList = new DList();
  
  
  function spawn(type, id)
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
  }
 
  }
