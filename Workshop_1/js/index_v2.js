var provider = ethers.providers.getDefaultProvider();
ethers.onready = function(){
    UpdateBlocks();
};

function UpdateBlocks(){
    provider.getBlockNumber().then(function(blockNumber) {
        for(var i = 0; i < 10; i++){
            provider.getBlock(blockNumber - i).then(function(block){
                printBlock(block);
            });
        }
    });

};

function printBlock(block){
    var table = document.getElementById("blocks");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = block.blockNumber;
    cell2.innerHTML = block.hash;
    cell3.innerHTML = block.timestamp;
};