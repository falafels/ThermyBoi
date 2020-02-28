from ..tools.calculator import Calculator

class Engine:
    __tempList = []
    __setTemp = 23

    def add_temp(self,temp):
        Engine.__tempList.append(int(temp))

    def get_temp(self):
        return Engine.__setTemp

    @staticmethod
    def execute_calculation():
        if not Engine.__tempList:
            pass
        else:
            Engine.__setTemp = Calculator.calculate(Engine.__tempList)
            Engine.__tempList = []
        