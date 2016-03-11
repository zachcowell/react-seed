import AppConstants from '../constants/app-constants';
import { dispatch } from '../dispatchers/app-dispatcher';

export default {
  updateInteractiveData(data) {
    dispatch({
      actionType: AppConstants.CHART_DATA_UPDATE,
      data
    });
  },
  animateInteractiveData(data, chart) {
    dispatch({
      actionType: AppConstants.ANIMATE_INTERACTIVE_DATA,
      data,
      chart
    });
  },
  setSeriesVisible(seriesToMakeVisible) {
    dispatch({
      actionType: AppConstants.CHART_SERIES_VISIBLE_TOGGLE,
      seriesToMakeVisible
    });
  },
  updateCurrentSelectedPopulation(data) {
    dispatch({
      actionType : AppConstants.CHART_SELECTED_POPULATION_UPDATE,
      data
    })
  },
  updateCurrentSelectedPartyView(data) {
    dispatch({
      actionType : AppConstants.CHART_SELECTED_PARTY_UPDATE,
      data
    })
  },
  triggerChartRefresh(chart) {
    dispatch({
      actionType : AppConstants.CHART_REFRESH,
      chart
    })
  },
};
