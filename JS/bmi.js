height = 10
weight = 20


class BmiView {
    bmiController = new BmiController()

    printBMI(bmi) {
        console.log(bmi.value);
    }

    printAdvice(bmi) {
        console.log(bmi.advice);
    }

    printCompleteDetails(bmi) {
        console.log(bmi.value, bmi.advice, bmi.color);
    }

    printBMIdetails(option) {
        let bmi = this.bmiController.calculateBMI(height, weight)
        if (option == 1) {
            this.printBMI(bmi)
        } else if (option == 2) {
            this.printAdvice(bmi)
        } else {
            this.printCompleteDetails(bmi)
        }
    }
}

class BmiController {
    calculateBMI (height, weight) {
        let bmi = new BMI()
        bmi.value =  weight / (height * height)

        bmi.color = "red"
        if (bmi.value < 18.5) {
            bmi.advice = "underweight"
        } else if (bmi.value < 24.9) {
            bmi.advice = "fit"
            bmi.color = "green"
        } else {
            bmi.advice = "overweight"
        }

        return bmi
    }
}

class BMI {
    value;
    advice;
    color;

    constructor (value, advice, color) {
        this.value = value
        this.advice = advice
        this.color = color
    }
}

bmiView = new BmiView()

bmiView.printBMIdetails(2)
bmiView.printBMIdetails(1)
bmiView.printBMIdetails(3)