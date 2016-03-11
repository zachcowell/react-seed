const Filters = {
    getDate(dateString){
        const str = new Date(dateString);
        let dd = str.getDate();
        let mm = str.getMonth() + 1;
        let yyyy = str.getFullYear();

        if (dd < 10){
            dd = '0' + dd;
        }
        if (mm < 10){
            mm = '0' + mm;
        }
        return mm + '-' + dd + '-' + yyyy;
    },
    getDaysAgo(dateString){
        const now = new Date();
        const then = new Date(dateString);
        const diff = now - then;
        return parseInt(diff/(24*3600*1000));
    },
    getDateFromUTCSeconds(utcSeconds){
        return new Date(utcSeconds * 1000);
    }
}

export default Filters;