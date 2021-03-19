var CalculateApp = /** @class */ (function () {
    function CalculateApp() {
        this.provideInput();
        this.inputsValues();
    }
    CalculateApp.prototype.provideInput = function () {
        this.data1Input = document.querySelector('#data1');
        this.data2Input = document.querySelector('#data2');
        this.data3Input = document.querySelector('#data3');
        this.data4Input = document.querySelector('#data4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    CalculateApp.prototype.inputsValues = function () {
        var _this = this;
        this.data1Input.addEventListener('input', function () { return _this.calculate(); });
        this.data2Input.addEventListener('input', function () { return _this.calculate(); });
        this.data3Input.addEventListener('input', function () { return _this.calculate(); });
        this.data4Input.addEventListener('input', function () { return _this.calculate(); });
    };
    CalculateApp.prototype.calculate = function () {
        var data1 = +this.data1Input.value;
        var data2 = +this.data2Input.value;
        var data3 = +this.data3Input.value;
        var data4 = +this.data4Input.value;
        var sum = data1 + data2 + data3 + data4;
        var avg = sum / 4;
        var min = Math.min(data1, data2, data3, data4);
        var max = Math.max(data1, data2, data3, data4);
        this.showValues(sum, avg, min, max);
    };
    CalculateApp.prototype.showValues = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return CalculateApp;
}());
var calculateApp = new CalculateApp();
