import { StorageService } from "../service/storage-service";
import { AppConfig } from "../types/AppConfig";

window.onload = function () {
  toggleSocialReactions();
  toggleSidebars();
  toggleMessageBubble();
  handlePosts();
  handleScaling();
  toggleFeedSource();
};

window.onscroll = function () {
  toggleSocialReactions();
  toggleSidebars();
  toggleMessageBubble();
  handlePosts();
  handleScaling();
  toggleFeedSource();
};

const toggleSocialReactions = () => {
  StorageService.getConfig("no-bs-li-config", function (config: any) {
    const classes = [
      "social-details-social-counts",
      "feed-shared-social-actions",
      "social-details-reactors-facepile",
    ];

    if (config.hideComments) {
      classes.push("social-details-social-activity");
    }

    classes.forEach((className) => {
      let elements = document.getElementsByClassName(className);
      for (let element of elements as any) {
        element.style.display = config.hideReactions ? "none" : "flex";
      }
    });
  });
};

const toggleSidebars = () => {
  StorageService.getConfig("no-bs-li-config", function (config: any) {
    const classes = ["scaffold-layout__sidebar", "scaffold-layout__aside"];

    classes.forEach((className) => {
      let elements = document.getElementsByClassName(className);
      for (let element of elements as any) {
        element.style.transition = "all 2s linear";
        element.style.display = config.hideSidebar ? "none" : "block";
      }
    });
  });
};

const toggleMessageBubble = () => {
  StorageService.getConfig("no-bs-li-config", function (config: any) {
    const classes = [
      "msg-overlay-container",
      "msg-overlay-conversation-bubble",
    ];

    classes.forEach((className) => {
      let elements = document.getElementsByClassName(className);
      for (let element of elements as any) {
        element.style.transition = "all 2s linear";
        element.style.display = config.hideMessageBubble ? "none" : "block";
      }
    });
  });
};

const toggleFeedSource = () => {
  StorageService.getConfig("no-bs-li-config", function (config: any) {
    const classes = ["feed-shared-header", "feed-shared-control-menu"];

    classes.forEach((className) => {
      let elements = document.getElementsByClassName(className);
      for (let element of elements as any) {
        element.style.display = config.hideFeedSource ? "none" : "flex";
      }
    });
  });
};

const handlePosts = () => {
  StorageService.getConfig("no-bs-li-config", function (config: any) {
    const classes = ["relative"];

    classes.forEach((className) => {
      let elements = document.getElementsByClassName(className);

      for (let element of elements as any) {
        element.style.padding = `${config.paddingOnPosts}px`;
        element.style.margin = `${config.marginOnPosts}px`;

        togglePolls(element, config);
      }
    });
  });
};

const togglePolls = (element: any, config: AppConfig) => {
  const postComponents = element.childNodes[0].childNodes;
  for (let component of postComponents as any) {
    if (
      component.classList !== undefined &&
      component.classList.contains("feed-shared-poll")
    ) {
      element.style.display = config.hidePolls ? "none" : "block";
      break;
    }
  }
};

const handleScaling = () => {
  StorageService.getConfig("no-bs-li-config", function (config: any) {
    let main = document.getElementsByClassName("scaffold-layout")[0] as any;
    main.style.transform = `scale(${config.scale})`;
  });
};

export {};
