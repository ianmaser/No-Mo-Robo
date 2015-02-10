/*@author: Jamison Ball
@date: 2/10/15
@last update: 2/10/15
@last editor:

**************************************************************************************************************************
The basic Turret class for team review
**************************************************************************************************************************
*/

var damage;
var sprite;
var health = 100;

/**************************************************************************************************************************
 functions
 ***************************************************************************************************************************/
 function checkCollison(); // handles collison detection (on one end?)
 function attack(var target); // attacks the param target (passed by user input)
 @overload function attack(); //attack function for automatic turrets
 function getTarget(); //gets the turret for attack function (click for manual retrieve for automatic)
 
