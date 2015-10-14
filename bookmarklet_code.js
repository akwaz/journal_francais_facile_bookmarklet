javascript:(function(){var date, day, month, year;date = new Date();day = date.getDate() - 1;half_month =  date.getMonth() + 1;
    month = (half_month < 10) ? '0' + half_month : half_month;
    year = date.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    open('http://www.rfi.fr/emission/' + year + month + day +'-journal-francais-facile-' + day + month + year + '-20h00-20h10-tu/', '_self')
})();
