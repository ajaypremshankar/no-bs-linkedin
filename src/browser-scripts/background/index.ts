import "emoji-log";
import { browser } from "webextension-polyfill-ts";
import AppConfig from "../../types/app-config";

browser.runtime.onInstalled.addListener((): void => {
  chrome.storage.local.set(
    {
      "no-bs-li-config": {
        hideReactions: false,
        hideSidebar: false,
      } as AppConfig,
    },
    function () {}
  );
});
