// hashcode 2022
function randomIntFromInterval(min, max) { // generate random number between 1 and 10 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function main() {
  // This is where we will call all other functions and use general code not in other functions.
  for (let i = 0; i < 5; i++) {
    for (let ii = 0; ii < 3; ii++) {
      var contributor = randomIntFromInterval(1, 3);

      if (ii === 0) {
        if (contributor === 1) {
          var contributorNameOne = 'Joe'; // biden
        } else if (contributor === 2) {
          var contributorNameOne = 'Thanos'; // give  me the stones
        } else if (contributor === 3) {
          var contributorNameOne = 'Deez'; //nuts
        }
      } else if (ii === 1) {
        if (contributor === 1) {
          var contributorNameTwo = 'Joe';
        } else if (contributor === 2) {
          var contributorNameTwo = 'Thanos';
        } else if (contributor === 3) {
          var contributorNameTwo = 'Deez';
        } else {
          console.error('You know the drill, dummy!');
        }
      } else if (ii === 2) {
        if (contributorNameOne === 'Joe' &&  contributorNameTwo === 'Thanos') {
          var contributorNameThree = 'Deez';
        } else if (contributorNameOne === 'Joe' &&  contributorNameTwo === 'Deez') {
          var contributorNameThree = 'Thanos';
        } else if (contributorNameOne === 'Thanos' &&  contributorNameTwo === 'Deez') {
          var contributorNameThree = 'Joe';
        } else {
          console.error('How can you not name your kids!!!!!');
        }
      }
    }

    const skills = randomIntFromInterval(1, 6); // gen a skill set for each conrtibutor

    var skillSet = [];

    var skillLevel;

    if (skills === 1) {
      skillSet = ['HTML'];
      skillLevel = randomIntFromInterval(1, 5);

      console.log(`${skillLevel} ${skillSet}`);
    } else if (skills === 2) {
      skillSet = ['CSS'];
      skillLevel = randomIntFromInterval(1, 5);

      console.log(`${skillLevel} ${skillSet}`);
    } else if (skills === 3) {
      skillSet = ['JS'];
      skillLevel = randomIntFromInterval(1, 5);
 
      console.log(`${skillLevel} ${skillSet}`);
    } else if (skills === 4) {
      skillSet = ['HTML', 'CSS'];
      for (let i =0; i < 2; i++) {
        skillLevel = randomIntFromInterval(1, 5);
      
        if (i === 0) {
          var skillLevelOne = skillLevel;
        } else if (i === 1) {
          var skillLevelTwo = skillLevel;
        } else {
          console.error('Who taught you to code? Your cat??? Your programme needs some radical makeover!'); // is directed at me or harry? NO!!!! Just how I handle my errors. ok
        }
      }

      console.log(`${skillLevel} ${skillSet}`);
    } else if (skills === 5) {
     skillSet = ['HTML', 'JS'];
 
      for (let i =0; i < 1; i++) {
        skillLevel = randomIntFromInterval(0, 5);

        if (i === 0) {
          var skillLevelOne = skillLevel;
        } else if (i === 1) {
          var skillLevelTwo = skillLevel;
        } else {
          console.error('Why are you so bad at programming? Go relearn it!!!!!!!!!!!!!!!!!');
        }
      }

      console.log(`${skillLevel} ${skillSet}`);
    } else if (skills === 6) {
      skillSet = ['HTML', 'CSS', 'JS'];

      for (let i =0; i < 2; i++) {
        skillLevel = randomIntFromInterval(0, 5);

        if (i === 0) {
          var skillLevelOne = skillLevel;
        } else if (i === 1) {
          var skillLevelTwo = skillLevel;
        } else if (i === 2) {
          var skillLevelThree = skillLevel;
        } else {
          console.error('Here is another stupid mistake, Luke. You are a true Sith sympathiser.');
        }
      }

      console.log(`${skillLevel} ${skillSet}`);
    } else {
      console.error('Your programme sucks! Fix it you moron!'); // rude
    }
  }

  var projects = [
                  'Minecraft Dynamic Map',
                  'Fortnite Sux Propaganda Site',
                  'Beyblade Web Game',
                  'Your Mom Simulator - Web Edition',
                  'Amogus - Back to the Sus (Advanced Web Edition)'
                ];

  console.log(projects[0] + `: ${contributorNameOne}`);
  console.log(projects[1] + `: ${contributorNameTwo}`);
  console.log(projects[2] + `: ${contributorNameThree}`);
  console.log(projects[3] + `: ${contributorNameTwo}`);
  console.log(projects[4] + `: ${contributorNameOne}`);
}
main();