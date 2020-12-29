var targetHitStatus;
var alienShipsDestroyed = 0;
var activeAttacker, opponent;
var retreat;
var noOfAlienShips;
var alienSpaceShips = [];
$( () => {

      //Creating an object USS Schwarzenegger and initialising it with hull, firepower and accuracy
      const USSS = new SpaceBattleShip(20, 5, 0.7, "USSS1","Humans");
      //check whether name can be same as the USSS.name
      //Creating objects Alien Space Ships and initialising them with hull, firepower and accuracy
      //hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8`

      const alienShip1 = new SpaceBattleShip(4, 3, 0.6, "spaceArmada001","Aliens");
      const alienShip2 = new SpaceBattleShip(4, 3, 0.6, "spaceArmada002","Aliens");
      const alienShip3 = new SpaceBattleShip(4, 3, 0.6, "spaceArmada003","Aliens");
      const alienShip4 = new SpaceBattleShip(4, 3, 0.6, "spaceArmada004","Aliens");
      const alienShip5 = new SpaceBattleShip(4, 3, 0.6, "spaceArmada005","Aliens");
      const alienShip6 = new SpaceBattleShip(4, 3, 0.6, "spaceArmada006","Aliens");

      alienSpaceShips = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6];
      noOfAlienShips = alienSpaceShips.length;
      activeAttacker = USSS;
      //opponent = alienShip1;
      opponent = alienSpaceShips[0];
      spaceBattleLoop:
      for(let i=0; i<noOfAlienShips; i++){
            activeAttacker = USSS;
            opponent = alienSpaceShips[i];
            while(opponent.hull>0){
                  targetHitStatus = attack(activeAttacker, opponent); /*fetching the result of the attack's status*/
                  alert(activeAttacker.name+"'s attack " + (i+1) + " is "+targetHitStatus);
                  console.log(targetHitStatus);
                  console.log(opponent.hull);
                  if(targetHitStatus == "failure"){
                      console.log(activeAttacker.name);
                      console.log(opponent.name);
                      swapFighters(activeAttacker, opponent);
                      console.log(activeAttacker.name);
                      console.log(opponent.name);
                      targetHitStatus = attack(activeAttacker, opponent);
                  }
                }//while loop

                console.log(`activeAttacker is ${activeAttacker.name} and the opponent is ${opponent.name}`);
                if(opponent.name != "USSS1"){ /*if the active fighter is USSS1 and won the attack, then alienship is destroyed */
                      alienShipsDestroyed++;
                      console.log(alienShipsDestroyed);
                      if(alienShipsDestroyed == noOfAlienShips){ /*last alien ship destroyed */
                          alert(" Battle Over!! "+activeAttacker.name+ " won the Battle!!");
                          console.log("Game over!");
                          console.log(activeAttacker.name+ "won the battle");
                      } else {
                              console.log("You want to retreat?");
                              retreat = prompt("You destroyed "+(i+1)+" alien ship! Your hull count is: "+activeAttacker.hull+" Do you want to retreat?", "yes");
                              if(retreat == "yes"){
                                    alert(" Battle Over!! "+activeAttacker.name+ " retreat the Battle!!")
                                    console.log("Game over!");
                                    console.log("USSS1 retreat the battle");
                                    break spaceBattleLoop;
                              }
                              // else {
                              //   alert("Start the Battle with the next Space Ship");
                              //   console.log("Start Over"); //write th code here
                              // }
                       }
                } else {
                  console.log("USSS1 destoyed! You lost the battle");
                  alert("USSS1 destoyed! You lost the battle!!!");
                  break spaceBattleLoop;
                }
      }//for loop
});

/*
 * Defining the class and cunstructor of USSSchwarzenegger
 */

 class SpaceBattleShip {

   constructor(hull, firepower, accuracy, name, type){
     this.hull = hull;
     this.firepower = firepower;/* This is the fire power to remove hull points from opponent */
     this.accuracy = accuracy;
     this.name = name;
     this.type = type;
     if(this.type==="Aliens"){
       this.hull = Math.floor(Math.random() * 4)+3; /* (0,1,2,3)+3 to get random nos between 3 to 6 */
       this.firepower = Math.floor(Math.random() * 3)+2; /*(0,1,2)+2 to get random nos between 2 to 4 */
       this.accuracy = (Math.floor(Math.random() * 3)+6)/10; /*  (0,1,2)+6 to get random nos between .6 to .8  */
     }
     this.damageToBeMade = 0;
     console.log(this.hull);
     console.log(this.firepower);
     console.log(this.accuracy);
     console.log(this.name);
     console.log(this.type);

   }
 }
 /*
  * This is the function attack to start attacking the opponent
  */

  const attack = (activeAttacker, opponent) => {
      /*
       * The attack needs to happen until the opponent's hull becomes
       * less than or equal to zero when the targetHit is successful.
       */
      var targetHit;
      activeAttacker.damageToBeMade = Math.random();
      console.log(activeAttacker.name+"'s hit damage is : "+activeAttacker.damageToBeMade);
      console.log(activeAttacker.name+"'s accuracy is : "+activeAttacker.accuracy);
      if(activeAttacker.damageToBeMade <= activeAttacker.accuracy){
        targetHit = "successful";
        opponent.hull = opponent.hull - activeAttacker.firepower;
        console.log(opponent.name+"'s hull count is : "+opponent.hull);
      } else {
          targetHit = "failure";

      }
      console.log(targetHit);
      return targetHit;
  }

  /*
   * This is the function to make the lost active fighter to be an opponent and the
   * won opponent to be the current active fighter- Changing the attacker
   */
  const swapFighters = (fighter1, fighter2) => {
    opponent = fighter1;
    activeAttacker = fighter2;
  }
