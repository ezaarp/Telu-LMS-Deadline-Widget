const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("teluWidget", {
  getConfig: () => ipcRenderer.invoke("config:get"),
  saveConfig: (config) => ipcRenderer.invoke("config:set", config),
  refreshCalendar: () => ipcRenderer.invoke("calendar:refresh"),
  openAuthWindow: () => ipcRenderer.invoke("auth:open"),
  minimizeWindow: () => ipcRenderer.invoke("window:minimize"),
  closeWindow: () => ipcRenderer.invoke("window:close"),
  getAppInfo: () => ipcRenderer.invoke("app:getInfo"),
  openExternalLink: (url) => ipcRenderer.invoke("link:openExternal", url),
  setTaskDoneState: (taskId, done) => ipcRenderer.invoke("task:setDone", { taskId, done }),
  getUpdateState: () => ipcRenderer.invoke("update:getState"),
  checkForUpdates: () => ipcRenderer.invoke("update:check"),
  downloadUpdate: () => ipcRenderer.invoke("update:download"),
  installUpdate: () => ipcRenderer.invoke("update:install"),
  onAuthVerified: (callback) => {
    const listener = () => callback();
    ipcRenderer.on("auth:verified", listener);
    return () => ipcRenderer.removeListener("auth:verified", listener);
  },
  onUpdateState: (callback) => {
    const listener = (_event, payload) => callback(payload);
    ipcRenderer.on("update:state", listener);
    return () => ipcRenderer.removeListener("update:state", listener);
  }
});
