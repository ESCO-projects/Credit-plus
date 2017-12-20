function sayHello() {
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c Made with ❤️ by ESCO TEAM %c http://www.esco.ws/ %c %c \n\n', 'border: 1px solid #000;color: #000; background: red; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];
        window.console.log.apply(console, args);
    } else if (window.console) {
        window.console.log('Made with love ❤️ ESCO TEAM - http://www.esco.ws/  ❤️');
    }
}
module.exports = sayHello;