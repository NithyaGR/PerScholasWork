var targetHit;
$( () => {

      //Creating an object USS Schwarzenegger and initialising it with hull, firepower and accuracy
      const USSS = new SpaceBattleShip(20, 5, 0.7, "USSS1","Humans");//check whether name can be same as the USSS.name
      //Creating objects Alien Space Ships and initialising them with hull, firepower and accuracy
      //hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8`

      const alienShip1 = new SpaceBattleShip(4, 3, 0.6, "spaceArmada001","Aliens");
      // const alienShip2 = new AlienSpaceShip(hull, firepower, accuracy);
      // const alienShip3 = new AlienSpaceShip(hull, firepower, accuracy);
      // const alienShip4 = new AlienSpaceShip(hull, firepower, accuracy);
      // const alienShip5 = new AlienSpaceShip(hull, firepower, accuracy);
      attack(USSS, alienShip1);

});

/*
 * Defining the class and cunstructor of USSSchwarzenegger
 */

 class SpaceBattleShip {

   constructor(hull, firepower, accuracy, name, type){
     this.hull = hull;
     this.firepower = firepower;// This is the fire power to remove hull points from opponent
     this.accuracy = accuracy;
     this.name = name;
     this.type = type;
     if(this.type==="Aliens"){
       this.hull = Math.floor(Math.random() * 4)+3; //(0,1,2,3)+3 to get random nos between 3 to 6
       this.firepower = Math.floor(Math.random() * 3)+2; //(0,1,2)+2 to get random nos between 2 to 4
       this.accuracy = (Math.floor(Math.random() * 3)+6)/10; // (0,1,2)+6 to get random nos between .6 to .8
     }
     this.damageToBeMade = 0;
     console.log(this.hull);
     console.log(this.firepower);
     console.log(this.accuracy);
     console.log(this.name);
     console.log(this.type);

   }
 }
 //
 // class AlienSpaceShip {
 //
 //   constructor(hull, firepower, accuracy, name){
 //
 //   }
 // }
 /*
  * This is the function attack to start attacking the opponent
  */

  const attack = (activePlayer, opponent) => {
      activePlayer.damageToBeMade = Math.random();
      console.log("Active Player's hit damage is : "+activePlayer.damageToBeMade);
      if(activePlayer.damageToBeMade <= activePlayer.accuracy){
        targetHit = "successful";
        opponent.hull = opponent.hull - activePlayer.firepower;
        console.log("Opponent hull count is : "+opponent.hull);
      } else {
          targetHit = "failure";

      }
      console.log(targetHit);
  }
