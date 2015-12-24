export class HelperService {
  constructor(SH_CONSTANTS) {
    'ngInject';

    this.apiUrl = `${SH_CONSTANTS.PROTOCOL}://${SH_CONSTANTS.DOMAIN}/api/`;
  }

  getApiUrl(action) {
    return this.apiUrl + action;
  }

  isEmail(string) {
    let re = /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm;
    return re.test(string);
  }

}
