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

  getInteractiveData(){
    return PolarizationAreaInteractiveAPI.getInteractiveData();
  },

  getCurrentSelectedYear(){
    return PolarizationAreaInteractiveAPI.getCurrentSelectedYear();
  },

  getCurrentSelectedParty() {
    return PolarizationAreaInteractiveAPI.getCurrentSelectedParty();
  },

  getCurrentSelectedPopulation() {
    return PolarizationAreaInteractiveAPI.getCurrentSelectedPopulation();
  },

  /**
   * Register dispatchers
   */
  dispatcherIndex: register((action) => {
    const emitChange = () => {
      AppStore.emitChange()
    };
    switch (action.actionType) {
      case AppConstants.CHART_DATA_UPDATE:
        PolarizationAreaInteractiveAPI.updateChartData(action.data, emitChange);
        break;
      case AppConstants.CHART_SELECTED_POPULATION_UPDATE:
        PolarizationAreaInteractiveAPI.updateCurrentSelectedPopulation(action.data, emitChange);
        break;
      case AppConstants.CHART_SELECTED_PARTY_UPDATE:
        PolarizationAreaInteractiveAPI.updateCurrentSelectedPartyView(action.data, emitChange);
        break;
      case AppConstants.CHART_REFRESH:
        PolarizationAreaInteractiveAPI.performChartRefresh(action.chart);
        break;
      case AppConstants.ANIMATE_INTERACTIVE_DATA:
        PolarizationAreaInteractiveAPI.animateChartDatasets(action.data, action.chart, emitChange);
        break;
      case AppConstants.CHART_SERIES_VISIBLE_TOGGLE:
        PolarizationAreaInteractiveAPI.setSeriesVisible(action.seriesToMakeVisible, emitChange);
        break;
      default:
        return;
    }

  }),
});

export default AppStore;
