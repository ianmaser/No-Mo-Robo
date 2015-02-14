/* 
 * @author Jamison Ball
 * @date 2/13/15
 * @last update 2/13/15
 * @last editor
 * *************************************************************************************************************************************************************************************************
 * A class to handle the spawning of turrets. Note to other team members: I thought it easier to include a spawn function rather than write another spawn handler specific to turrets.
 * *************************************************************************************************************************************************************************************************
 */

function TurretHandler(world)
{
    var turretList = new DList();
    var length = 0;
    var _MAX_TURRETS; //maximum turrets allowed on the field

/*
 * @param x and @param y may be unnecesarry depending on the implementation of Turret.js.
 * Furthur this may be reworked into private function.
 */
this.spawnTurret = function(x, y, type)
{
   if(length < _MAX_TURRETS)
   {
    var turret = new Turret(type, ID());
    turret.x = x;
    turret.y = y;
    turretList.append(turret);
    world.addChild(turret);
    length++;
   }
   
   else
   {
       return;
   }
};

this.update = function()
{
    for(turretList.moveTo(0); turretList.getIndex() >= 0; turretList.moveNext())
    {
          turretList.getElement().update();
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

//method may be changed based on implementation of Turret.
this.removeTurret = function()
{
  for(turretList.moveTo(0); turretList.getIndex() >= 0; turretList.moveNext())
  {
      var current = turretList.getElement();
      
      if(current.destroyed() || current.sold())
      {
          turretList.remove();
          length--;
      }
      world.removeChild(current);
  }
};

this.getLength = function()
{
    return length;
};

this.getMaxTurrets = function()
{
    return _MAX_TURRETS;
};
}
