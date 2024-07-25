const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `try it now, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    let cont = `Mozilla is cool,` + storedName;
    myHeading.textContent = cont;
    myHeading.onclick = () => {
        myHeading.textContent = "Spicy delicious chicken wings special for you, " + storedName;
    }
  }
  myButton.onclick = () => {
    setUserName();
  };
