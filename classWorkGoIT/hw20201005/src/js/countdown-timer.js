export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this._selector = selector;
    this._targetDate = targetDate;
  }

  getTimeLeft() {
    const total = Date.parse(this._targetDate) - Date.parse(new Date());
    return {
      total: total,
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      mins: Math.floor((total / 1000 / 60) % 60),
      secs: Math.floor((total / 1000) % 60),
    };
  }

  playClock() {
    const clock = document.querySelector(this._selector);
    const daysSpan = clock.querySelector('.value[data-value="days"]');
    const hoursSpan = clock.querySelector('.value[data-value="hours"]');
    const minsSpan = clock.querySelector('.value[data-value="mins"]');
    const secsSpan = clock.querySelector('.value[data-value="secs"]');
    const updateClock = () => {
      const t = this.getTimeLeft(this._targetDate);
      if (t.total < 0) {
        clearInterval(timeinterval);
        return;
      }
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minsSpan.innerHTML = ('0' + t.mins).slice(-2);
      secsSpan.innerHTML = ('0' + t.secs).slice(-2);
    };

    const timeinterval = setInterval(updateClock, 1000);
  }
}
