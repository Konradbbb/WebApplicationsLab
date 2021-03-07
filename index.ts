
class CalculateApp{

    number1Input: HTMLInputElement;
    number2Input: HTMLInputElement;
    number3Input: HTMLInputElement;
    number4Input: HTMLInputElement;
    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;




 getProvideInput() {
    this.number1Input = document.querySelector('#number1');
    this.number1Input = document.querySelector('#number2');
    this.number1Input = document.querySelector('#number3');
    this.number1Input = document.querySelector('#number4');

    this.sumInput = document.querySelector('#sum');
    this.avgInput = document.querySelector('#avg');
    this.minInput = document.querySelector('#min');
    this.minInput = document.querySelector('#max');
}

inputsValues(){
    this.number1Input.addEventListener('input', () => this.calculate);
    this.number2Input.addEventListener('input', this.calculate);
    this.number3Input.addEventListener('input', this.calculate);
    this.number4Input.addEventListener('input', this.calculate);
}


calculate() {
    const data1 = parseInt(this.number1Input.value);
    const data2 = parseInt(this.number2Input.value);
    const data3 = parseInt(this.number3Input.value);
    const data4 = parseInt(this.number4Input.value);

    const sum = data1 + data2 + data3 + data4;
    const avg = sum / 4;

    const min = Math.min(data1, data2, data3, data4);
    const max = Math.max(data1, data2, data3, data4);
}




// function addNumbers() {
//    const sum = data1 + data2 + data3 + data4;
//    this.showValues(sum);
// }

// // function avgValue() {
// //     const avg = sum / 4;
// //     this.showValues(min);
// // }

// function showMinAndMax() {
//     const min = Math.min(data1, data2, data3, data4);
//     const max = Math.max(data1, data2, data3, data4);
//     this.showValues(min, max);
// }

showValues(sum: number, avg: number, min: number, max: number){
    this.sumInput.value = sum.toString();
    this.avgInput.value = avg.toString();
    this.minInput.value = min.toString();
    this.maxInput.value = max.toString();
}



}



