const AppAPI = {
  data: null,
  apiMethod(someData ,emitChange){
    const someCalculation = someData + ' new data';
    if (emitChange) {
      emitChange(someCalculation);
    }
  }
};

export default AppAPI;
