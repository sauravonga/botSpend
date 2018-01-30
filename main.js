

var commandType = "";

function readCommand(command){
    var cmdArr = command.split(/\s+/);

    if ( cmdArr.indexOf('addt') > -1){
        commandType = "addTran";
    } else if (cmdArr.indexOf('addm') > -1) {
        commandType = "addMem";
    } else {
        commandType = null;
    }
    return transaction;
}

var transaction = {
    whoPaid, forPaid, amountPaid, timeStamp, comment };

var addMember = [];





readCommand('addm sunil');