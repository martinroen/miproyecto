const getremaintime = deadline =>{
let now = new Date(),
remaintime = (new date(deadline) - now + 1000)/ 1000,
remainseconds = ('0' + Math.floor( remaintime % 60)).slice(-2),
remainminutes = ('0' + Math.floor( remaintime /60 % 60)).slice(-2),
remainhours = ('0' + Math.floor( remaintime /3600 % 24)).slice(-2),
remaindays = Math.floor( remaintime /(3600% 24));
return{
    remaintime,
    remainseconds,
    remainminutes,
    remainhours,
    remaindays
}
};
const countdown = (deadline, elem, fialmessage) => {
    const el =document.getElementById(elem)
    const timerupdate = setInterval(()=>{
        let tiempo = getremaintime(deadline);
        el.innerHTML = '${time.remaindays}d:${time.remainhours}h:${remainminutes}m:${time.remainseconds}s';
        if (timerupdate.remaintime <= 1)
    {
        clearInterval(timerupdate);
        el.innerHTML= finalmessage;
    }
    },1000)
}
countdown('oct 13 2023 00:00:00 GMT-3','clock','espero que allas llegado y estes feliz')