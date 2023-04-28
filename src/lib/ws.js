export class EzSocket {

  /**@param {string} url */
  constructor(url) {
    this.socket = new WebSocket(url);
  }
}
