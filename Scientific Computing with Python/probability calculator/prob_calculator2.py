import copy
import random
# Consider using the modules imported above.

class Hat:
  def __init__(self,**all_item):
    self.contents=[]
    for key,value in all_item.items():
        for itr in range(value):
          self.contents.append(key)
  
  # Function to get random n number of hats from contents
  def draw(self,amount):
      draw_list = []
      if amount >= len(self.contents):
          return self.contents
      for i in range(amount):
          name=self.contents.pop(random.randrange(len(self.contents)))
          draw_list.append(name)
      return draw_list


  
  # Function to get the probability
def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    final_count=0
    for _ in range(num_experiments):
      copyhat = copy.deepcopy(hat)
      temp_list = copyhat.draw(num_balls_drawn)
      success=True
      for key,value in expected_balls.items():
        if temp_list.count(key) < value:
          success=False
          break
      if success:
        final_count+=1
    return final_count/num_experiments


if __name__ == "__main__":
  hat = Hat(blue=3, red=2, green=6)
  probability = experiment(hat=hat,
                            expected_balls={
                                "blue": 2,
                                "green": 1
                            },
                            num_balls_drawn=4,
                            num_experiments=1000)
  print("Probability:", probability)
  hat = Hat(yellow=5, red=1, green=3, blue=9, test=1)
  probability = experiment(hat=hat,
                            expected_balls={
                                "yellow": 2,
                                "blue": 3,
                                "test": 1
                            },
                            num_balls_drawn=20,
                            num_experiments=100)
  print("Probability:", probability)