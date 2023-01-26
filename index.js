// Daily Challenge : Stars

//With one loop

for (let i = 1; i <= 6; i++){
    let stars = "*".repeat(i)
    console.log(stars)
  }
  
  //With nested loops
  for (let i = 1; i <= 6; i++){
      let char = ""
      for (let b = 0; b < i; b++){
        char += '*';
      }
      console.log(char);
  }
  
  // OR
  
  let x,y,z;
  for(x=0; x <= 6; x++){
    for (y=0; y < x; y++){ 
        z=z+"*";
    } 
    console.log(z);
    z="";
  }