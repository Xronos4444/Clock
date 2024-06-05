let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");
const createBtn = document.querySelector("#create");
const inp = document.querySelector("#timeZoneContent");

const output = document.querySelector(".digital_clock_number");

function timeZone(input, result) {
    let content = input.value
    if (content) {
      result.innerHTML = moment.tz.setDefault(content);
      console.log("right");
    } else {
      console.log("something gonna wrong");
    }
}

setInterval(() => {
    let hh = moment().hour() * 30;
    let mm = moment().minutes() * 6;
    let ss = moment().seconds() * 6;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;   

    hours.innerHTML = moment().format('hh');
    minutes.innerHTML = moment().format("mm");
    seconds.innerHTML = moment().format("ss");
    ampm.innerHTML = moment().format("a");
});

createBtn.onclick = function timeZone() {
  if (inp.value) {
    output.innerHTML = moment.tz.setDefault(inp.value);
    console.log("right");
  } else {
    console.log("something gonna wrong");
  }
};

setInterval( () => {
  output.innerHTML = moment().format("hh:mm:ss")
  document.querySelector(".a").innerHTML = moment().format("a");
}, 1000)





