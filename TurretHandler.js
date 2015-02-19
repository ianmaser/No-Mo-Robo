/* 
 * @author Jamison Ball
 * @date 2/13/15
 * @last update 2/18/15
 * @last editor
 * *************************************************************************************************************************************************************************************************
 * A class to handle the spawning of turrets. Note to other team members: I thought it easier to include a spawn function rather than write another spawn handler specific to turrets.
 * *************************************************************************************************************************************************************************************************
 */

function TurretHandler(world)
{
    var turretList = new DList();

/*
 * @param x and @param y may be unnecesarry depending on the implementation of Turret.js.
 * Furthur this may be reworked into private function. May need x and y params
 */
    this.spawnTurret = function(type)
    {
        if(turretList.size() < MAX_TURRETS)
        {
            var turret = new Turret(type, ID());
            turretList.append(turret.getSprite());
            world.addChild(turret);
        }
    };

    this.update = function()
    {
        var deadList = new DList();
     
      for(enemyList.moveTo(0); enemyList.getIndex() >= 0; enemyList.moveNext())
      {
          var curT = turretList.getElement();
          
          if(!curT.update())
          {
            deadList.append(turretList.getIndex());
          }
      }
          
          for(deadList.moveTo(0); deadList.getIndex() >= 0; deadList.moveNext())
          {
            turretList.moveTo(deadList.getElement());
            turretList.remove();
          }
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
