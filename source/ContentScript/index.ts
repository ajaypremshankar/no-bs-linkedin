window.onload = function () {
  logic();
  whenScrolled();
};

window.onscroll = function () {
  logic();
  whenScrolled();
};

function logic() {
  let main = document.getElementsByClassName("scaffold-layout__main")[0] as any;
  main.style.transform = "scale(1.3)";

  let posts = document.getElementsByClassName("relative");
  for (let element of posts as any) {
    element.style.margin = "5px";
    element.style.padding = "5px";

    const postComponents = element.childNodes[0].childNodes;
    for (let component of postComponents as any) {
      if (
        component.classList !== undefined &&
        component.classList.contains("feed-shared-poll")
      ) {
        element.style.display = "none";
        console.log("removed");
        break;
      }
    }
  }

  let postTexts = document.getElementsByClassName("feed-shared-text");
  for (let element of postTexts as any) {
    element.style.paddingTop = "-5px";
    element.style.paddingLeft = "5px";
    element.style.paddingRight = "5px";
    element.style.paddingBottom = "10px";
  }

  const classes = [
    "msg-overlay-container",
    "social-details-social-activity",
    "feed-shared-header",
  ];

  classes.forEach((className) => {
    let elements = document.getElementsByClassName(className);
    for (let element of elements as any) {
      element.style.transition = "all 2s linear";
      element.style.display = "none";
    }
  });
}

function whenScrolled() {
  const classes = ["scaffold-layout__sidebar", "scaffold-layout__aside"];

  classes.forEach((className) => {
    let elements = document.getElementsByClassName(className);
    for (let element of elements as any) {
      element.style.transition = "all 2s linear";
      element.style.display = "none";
    }
  });
}

export {};
