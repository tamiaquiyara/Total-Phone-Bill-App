module.exports = function PhoneBill() {

    var userNames = {}

    function storingUsernames(name) {
        if (userNames[name] == undefined) {
            userNames[name] = 1
        }
        else {
            userNames[name]++
        }
    }

    function getUsers(name) {
        return userNames
    }


    function total(usage) {

        var usageString = usage.split(', ');
        var call = 0;
        var sms = 0;
        for (var i = 0; i < usageString.length; i++) {
            var bill = usageString[i];
            if (bill === 'call') {
                call += 2.75;
            } else {
                sms += 0.65;
            }
        }
        var totalBill = call + sms;
        return 'R' + totalBill.toFixed(2);

    }

    return {
        storingUsernames,
        getUsers,
        total
    }
};