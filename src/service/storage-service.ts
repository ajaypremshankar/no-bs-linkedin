export class StorageService {
  public static getConfig(key: string, callback: (config: any) => void) {
    chrome.storage.local.get(key, function (result: any) {
      console.log(result[key]);
      callback(result[key]);
    });
  }

  public static setConfig(key: string, value: any, callback: () => void) {
    chrome.storage.local.set(
      {
        [key]: value,
      },
      callback
    );
  }
}
