from ..tools.calculator import Calculator

class Engine:
    __tempList = []
    __nextTemp = 23
    __currentTemp = 23

    def set_current_temp(self,temp):
        Engine.__currentTemp = int(float(temp))
    
    def get_current_temp(self):
        return Engine.__currentTemp

    def add_temp(self,temp):
        Engine.__tempList.append(int(temp))

    def get_temp(self):
        return Engine.__nextTemp

    @staticmethod
    def execute_calculation():
        if not Engine.__tempList:
            pass
        else:
            Engine.__nextTemp = Calculator.calculate(Engine.__tempList)
            print(Engine.__nextTemp)
            Engine.__tempList = []
        