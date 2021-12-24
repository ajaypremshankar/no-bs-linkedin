import { StorageService } from "../service/storage-service";

window.onload = function () {
  toggleSocialReactions();
  toggleSidebars();
};

window.onscroll = function () {
  toggleSocialReactions();
  toggleSidebars();
};

const toggleSocialReactions = () => {
  StorageService.getConfig("no-bs-li-config", function (config: any) {
    const classes = [
      "social-details-social-counts",
      "feed-shared-social-actions",
      "social-details-reactors-facepile",
    ];
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
        element.style.display = config.hideSidebar ? "none" : "flex";
      }
    });
  });
};

export {};
