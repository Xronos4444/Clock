let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");
const createBtn = document.querySelector("#create");
const selectedOption = document.querySelector("#time_zones");
const output = document.querySelector(".digital_clock_number");
let optionsIndex = selectedOption.selectedIndex;
selectedOption[optionsIndex].text = "Asia/Samarkand";

setInterval(() => {
  let hh = moment().hour() * 30;
  let mm = moment().minutes() * 6;
  let ss = moment().seconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  document.querySelector("#hours").innerHTML = moment().format("hh");
  document.querySelector("#minutes").innerHTML = moment().format("mm");
  document.querySelector("#seconds").innerHTML = moment().format("ss");
  document.querySelector("#ampm").innerHTML = moment().format("a");
  output.innerHTML = moment()
    .tz(selectedOption[optionsIndex].text)
    .format("hh:mm:ss");
  document.querySelector(".a").innerHTML = moment()
    .tz(selectedOption[optionsIndex].text)
    .format("a");
}, 1000);
  
createBtn.onclick = function addClockWithTimeZone() {
  // document.querySelector(".time_piece").innerHTML = `
  //   <div class ="container">
  //     <div class ="clock">

  //       <div class="circle" id="sc" style="--clr:#04fc43;"><i></i></div>
  //       <div class="circle circle2" id="mn" style="--clr:#fee800;"><i></i></div>
  //       <div class="circle circle3" id="hr" style="--clr:#ff2972;"><i></i></div>

  //       <span style = "--i:1;"><b>1</b></span>
  //       <span style = "--i:2;"><b>2</b></span>
  //       <span style = "--i:3;"><b>3</b></span>
  //       <span style = "--i:4;"><b>4</b></span>
  //       <span style = "--i:5;"><b>5</b></span>
  //       <span style = "--i:6;"><b>6</b></span>
  //       <span style = "--i:7;"><b>7</b></span>
  //       <span style = "--i:8;"><b>8</b></span>
  //       <span style = "--i:9;"><b>9</b></span>
  //       <span style = "--i:10;"><b>10</b></span>
  //       <span style = "--i:11;"><b>11</b></span>
  //       <span style = "--i:12;"><b>12</b></span>
  //     </div>
  //     <div  id = "time">
  //       <div id = "hours" style="--clr:#ff2972;">00</div>
  //       <div id = "minutes" style="--clr:#fee800;">00</div>
  //       <div id = "seconds" style="--clr:#04fc43;">00</div>
  //       <div id = "ampm">AM</div>
  //     </div>
  //   </div>`;
  
    output.innerHTML = moment
      .tz(selectedOption[optionsIndex].text)
      .format("hh:mm:ss");
  

  
};
