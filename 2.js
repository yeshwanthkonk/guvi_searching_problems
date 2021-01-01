// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  let n = +userInput[0];
  let arr = userInput[1].split(" ").map(x => +x);
  count_map = {};
  for(let i=0;i<n;i++){
      if(count_map[arr[i]] === undefined)
        count_map[arr[i]] = 1;
      else
        count_map[arr[i]]++;
    
      if(count_map[arr[i]] == 1)
        ans = arr[i]
  }
  console.log(ans);

  //end-here
});
