// test 



function userInput() {
    return new Promise(resolve => {
  
  
      rl.question("Enter a location to strike ", strikeLocation => {
      
  
          if (strikeLocation === 'exit') {
              return;
          }
  
  
  
  
        resolve(strikeLocation);
  
  
  
  
  
      });
    });
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  async function userLog() {
  
  
  
    const strikeLocation = await userInput();
    console.log(strikeLocation);
    userLog();
  
  
  
  
  
  
  }
  
  userLog();