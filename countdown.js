const getRemainingTime = (deadline) => {
    let now = new Date(),
      remainTime = (new Date(deadline) - now + 1000) / 1000,
      remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
      remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
      remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
      remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    };
  };
  
  const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval(() => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `${t.remainDays}D:${t.remainHours}H:${t.remainMinutes}M:${t.remainSeconds}S`;
  
      if (t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
    }, 1000);
  };
  
  countdown("oct 13 2023 00:00:00 GMT-03", "clock", "se termino el tiempo espero que allas llegado");
  