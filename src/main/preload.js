const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // Example function exposed to the renderer
  sayHello: () => 'Hello from the main process!',
});
