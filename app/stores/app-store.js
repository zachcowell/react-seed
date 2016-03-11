import { register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';
import PolarizationAreaInteractiveAPI from '../api/PolarizationAreaInteractiveAPI.js';

const CHANGE_EVENT = 'change';

const AppStore = Object.assign(EventEmitter.prototype, {
  /**
   * Emit change through EventEmitter object
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * On change event, execute a callback
   * @param {Function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Remove change listener callback
   * @param  {Function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  /**
   * Register dispatchers
   */
  dispatcherIndex: register((action) => {
    const emitChange = () => {
      AppStore.emitChange()
    };
    switch (action.actionType) {
      case AppConstants.GENERIC_EVENT:
        AppAPI.apiMethod(action.data, emitChange);
        break;
      default:
        return;
    }

  }),
});

export default AppStore;
