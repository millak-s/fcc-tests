import copy
import random

# Consider using the modules imported above.


class Hat:
    def __init__(self, **balls):
        self.contents = []
        for color, val in balls.items():
            for n in range(val):
                self.contents.append(color)

    def draw(self, num):
        if num >= len(self.contents):
            return self.contents
        balls = random.choices(self.contents, k=num)
        for ball in balls:
            if ball in self.contents:
                self.contents.remove(ball)
        return balls


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    m = n = 0

    while n < num_experiments:
        check = checker(hat, expected_balls, num_balls_drawn)
        m += 1 if check else 0
        n += 1
    return m / num_experiments


def checker(hat, expected, num_balls):
    copy_hat = copy.deepcopy(hat)
    draw = copy_hat.draw(num_balls)
    if all([draw.count(color) >= val for color, val in expected.items()]):
        return True
    return False
