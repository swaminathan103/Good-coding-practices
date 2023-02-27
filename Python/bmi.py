
height = 10
weight = 20

class BmiView:
    def __init__(self):
        self.bmiController = BmiController()
        
    def printBMI(self, bmi):
        print(bmi.value)
        
    def printAdvice(self, bmi):
        print(bmi.advice)
    
    def printCompleteDetails(self, bmi):
        print(bmi.value, bmi.advice, bmi.color)
    
    def printBMIdetails(self, option):
        bmi = self.bmiController.calculateBMI(height, weight)
        if option == 1:
            self.printBMI(bmi)
        elif option == 2:
            self.printAdvice(bmi)
        else:
            self.printCompleteDetails(bmi)

class BmiController:
    def calculateBMI(self, height, weight):
        bmi = BMI()
        bmi.value = weight / (height * height)    
        bmi.color = "red"
        if bmi.value < 18.5:
            bmi.advice = "underweight"
        elif bmi.value < 24.9:
            bmi.advice = "fit"
            bmi.color = "green"
        else:
            bmi.advice = "overweight"
        
        return bmi

class BMI:
    def init(self, value=0, advice="", color=""):
        self.value = value
        self.advice = advice
        self.color = color

bmiView = BmiView()

bmiView.printBMIdetails(2)
bmiView.printBMIdetails(1)
bmiView.printBMIdetails(3)