class TimerController {
    constructor (DeviceService, TimerService) {
        "ngInject";
        this.TimerService = TimerService;
    }
    
    startAction () {        
        this.TimerService.start();
    }
    
    stopAction () {
        this.TimerService.stop();
    }
    
    resetAction () {
        this.TimerService.reset();
    }
}

export { TimerController };
