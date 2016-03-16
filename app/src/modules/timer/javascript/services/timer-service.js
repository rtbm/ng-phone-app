class TimerService {
    constructor ($timeout) {
        "ngInject";
        this.$timeout = $timeout;
        this.interval = 100;
        this.enabled = false;
        this.countedFormatted = ['00','00','00'];
    }
    
    _increment () {
        this._timeout = this.$timeout(() => {
            this._now = new Date().getTime();
            this._counted = this._now - this._startedAt;
            
            let countedRaw = [
                Math.floor((this._counted / 3600000) % 24).toString(),
                Math.floor((this._counted / 60000) % 60).toString(),
                Math.floor((this._counted / 1000) % 60).toString()
            ];
            
            for(let n = countedRaw.length-1; n>-1; n--) {
                if (countedRaw[n].length == 1) {
                    countedRaw[n] = '0' + countedRaw[n];
                }
            }
            
            this.countedFormatted = countedRaw;
                        
            if (this.enabled) {
                this._increment();
            }           
        }, this.interval);
    }
    
    start () {
        this._startedAt = new Date().getTime();
        this.enabled = true;
        this._increment();
    }
    
    stop () {
        this.enabled = false;
        this.$timeout.cancel(this._timeout);
    }
    
    reset () {
        this.stop();
        this.countedFormatted = ['00','00','00'];
    }
}

export { TimerService };
