var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function logout() {
        document.querySelector('.first-body').scrollIntoView({ 
            behavior: 'smooth' 
          });
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 10000)
        // 1000 milliseconds = 1 second
    }
};

window.onload = function() {
    inactivityTime();
  }