function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
$(document).ready(function(){
    async function demo(){
        console.log("break");
        await sleep(200);
        console.log("Two second later");
    }
});
