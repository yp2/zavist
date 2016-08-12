/**
 * Created by daniel on 29.06.16.
 */
import appConfig from './appConfig'

export class DefaultConfigService {
  constructor () {
    'ngInject';
    this.config = appConfig;
  }

  getConfig () {
    return this.config.settings
  }
  getMinDataYear () {
    return this.config.minDataYear;
  }
}
