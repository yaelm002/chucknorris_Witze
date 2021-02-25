document.getElementById("btn").addEventListener("click", getJokes);


function getJokes(e){
  var zahl = document.querySelector("#number").value;
  console.log(zahl);
  const xhr = new XMLHttpRequest;

  xhr.open("GET", `http://api.icndb.com/jokes/random/${zahl}`, true);

  xhr.onload = function(){
      if (this.status ===200){
    let erg = JSON.parse(this.responseText);
    let output ="";
    let i = 0;
    if(erg.type=== "success"){
    erg.value.forEach(function(joke){
        output += `<img src ="${++i}.jpeg" alt ="kein_bild" width ="40" height ="40"> `;
        output += `<li>${joke.id}</li>`;
        output += `<li>${joke.joke}</li>`;
    });
  } else {
    output += `somthing goes wrong`;
  }


    document.getElementById("list").innerHTML = output;
        
  }

}



  xhr.send();
  
  e.preventDefault();

}
