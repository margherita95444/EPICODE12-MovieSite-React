export class Call {
  constructor(status, success, messageStatus, results) {
    this.status = status;
    this.success = success;
    this.messageStatus = messageStatus;
    this.results = results;
  }
}
