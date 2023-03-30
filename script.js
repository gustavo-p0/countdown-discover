function Timer(days = 0, hours = 0, minutes = 0, seconds = 0) {
  this.days = days;
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;

  this.updateSeconds = function () {
    if (this.seconds > 0) {
      this.seconds -= 1;
    }
  };

  this.updateMinutes = function () {
    if (this.minutes > 0 && this.seconds == 0) {
      this.minutes -= 1;
      this.seconds = 60;
    }
  };

  this.updateHours = function () {
    if (this.hours > 0 && this.minutes == 0) {
      this.hours -= 1;
      this.minutes = 60;
    }
  };

  this.updateDays = function () {
    if (this.days > 0 && this.hours == 0) {
      this.days -= 1;
      this.hours = 24;
    }
  };

  this.validate = function () {
    if (
      this.seconds === 0 &&
      this.minutes === 0 &&
      this.hours === 0 &&
      this.days === 0
    ) {
      clearInterval(this.timerControl);
    }
  };
  this.draw = function () {
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    const dayStr = this.days.toString();
    const hourStr = this.hours.toString();
    const minuteStr = this.minutes.toString();
    const secondsStr = this.seconds.toString();

    days.innerText = dayStr.padStart(2, `0`);
    hours.innerText = hourStr.padStart(2, `0`);
    minutes.innerText = minuteStr.padStart(2, `0`);
    seconds.innerText = secondsStr.padStart(2, `0`);
  };

  this.update = function () {
    this.draw();
    this.updateDays();
    this.updateHours();
    this.updateMinutes();
    this.updateSeconds();
    this.validate();
  };

  this.timerControl = setInterval(() => {
    this.update();
  }, 1000);
}

let timer = new Timer(8, 12, 45, 0);
