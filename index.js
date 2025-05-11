document.getElementById("scoreForm").addEventListener("submit",function(e){
  e.preventDefault(); // Prevent the default form
  // console.log("Da submit roi nha");
  
  const toan = document.getElementById("toan").value;
  const ly = document.getElementById("ly").value;
  const hoa = document.getElementById("hoa").value;
 
  let avg = (parseFloat(toan) + parseFloat(ly) + parseFloat(hoa))/3
  
  document.getElementById("resultValue").textContent = avg.toFixed(2);
  
  let message = "";
  if(avg>=8){
    message="Giỏi";
  } else if (avg>=6.5){
    message= "Cơ bản";
  }else if(avg >=4){
    message="Trung Bình";
  }else {
    message="Hết cứu 🥲";
  }

  document.getElementById("resultMessage").textContent = message;
  document.getElementById("toanDisplay").textContent = toan;
  document.getElementById("lyDisplay").textContent = ly;
  document.getElementById("hoaDisplay").textContent = hoa;

  document.getElementById("resultSection").style.display= "block";
  document.getElementById("placeholder").style.display= "none";

})
