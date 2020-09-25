import CountdownTimer from './countdown-timer';
document.addEventListener('DOMContentLoaded', () => {
  const clock = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
  });

  clock.playClock();

  ///////////////////////////////////////////////////////////////////////////////////////
  // function getTimeLeft(endtime) {
  //   const total = Date.parse(endtime) - Date.parse(new Date());
  //   const days = Math.floor(total / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  //   const mins = Math.floor((total / 1000 / 60) % 60);
  //   const secs = Math.floor((total / 1000) % 60);

  //   return {
  //     total,
  //     days,
  //     hours,
  //     mins,
  //     secs,
  //   };
  // }

  // function playClock(id, endtime) {
  //   const clock = document.getElementById(id);
  //   const daysSpan = clock.querySelector('.value[data-value="days"]');
  //   const hoursSpan = clock.querySelector('.value[data-value="hours"]');
  //   const minsSpan = clock.querySelector('.value[data-value="mins"]');
  //   const secsSpan = clock.querySelector('.value[data-value="secs"]');
  //   function updateClock() {
  //     const t = getTimeLeft(endtime);
  //     daysSpan.innerHTML = t.days;
  //     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  //     minsSpan.innerHTML = ('0' + t.mins).slice(-2);
  //     secsSpan.innerHTML = ('0' + t.secs).slice(-2);
  //     if (t.total <= 0) {
  //       clearInterval(timeinterval);
  //     }
  //   }
  //   updateClock();
  //   const timeinterval = setInterval(updateClock, 1000);
  // }

  // const deadline = new Date(Date.parse(new Date()) + 5 * 24 * 60 * 60 * 1000);
  // //new Date(Date.now() + 100000000000);
  // console.log(deadline);

  // playClock('timer-1', deadline);
});
