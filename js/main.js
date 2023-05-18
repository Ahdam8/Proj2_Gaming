let datet=new Date("fri dec,2023,23:59:59").getTime();

let counter=setInterval(() => {
    
    let dat = new Date().getTime();

    let datdif = datet - dat;

    let days=Math.floor((datdif / 1000*60* 60* 24))
    let hours = Math.floor((datdif % (1000* 60* 60* 24))/(1000* 60* 60))
    let minuts =Math.floor((datdif % (1000* 60* 60))/(1000* 60))
    let second = Math.floor((datdif % (1000* 60))/(1000))

},1000)