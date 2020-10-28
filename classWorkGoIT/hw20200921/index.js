document.addEventListener("DOMContentLoaded", () => {
  // new CountdownTimer({
  //   selector: '#timer-1',
  //   targetDate: new Date('Jul 17, 2019'),
  // });
  function getTimeLeft(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return {
      total,
      days,
      hours,
      mins,
      secs,
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.value[data-value="days"]');
    const hoursSpan = clock.querySelector('.value[data-value="hours"]');
    const minsSpan = clock.querySelector('.value[data-value="mins"]');
    const secsSpan = clock.querySelector('.value[data-value="secs"]');
    function updateClock() {
      const t = getTimeLeft(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minsSpan.innerHTML = ("0" + t.mins).slice(-2);
      secsSpan.innerHTML = ("0" + t.secs).slice(-2);
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = new Date(Date.parset(new Date()) + 15 * 24 * 60 * 1000);
  initializeClock("timer", deadline);
});
