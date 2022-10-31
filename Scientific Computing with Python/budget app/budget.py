class Category():

    def __init__(self, name):
        self.name, self.ledger = name, []

    def __str__(self):
        cat_print = f"{self.name:*^30}\n"
        for transaction in self.ledger:
            description = transaction['description'][0:23]
            amount = "%.2f" % transaction['amount']
            cat_print += f"{description}{amount:>{30 - len(description)}}\n"

        return cat_print + f"Total: {self.get_balance()}"

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        return False

    def get_balance(self):
        balance = 0
        for transaction in self.ledger:
            balance += transaction["amount"]
        return balance

    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount):
        balance = self.get_balance()
        return False if amount > balance else True


def create_spend_chart(categories):
    title = "Percentage spent by category\n"
    bars = dash = lbl = ""
    total = n = i = 0
    cats = {}

    for category in categories:
        cat_total = 0
        for transaction in category.ledger:
            if transaction["amount"] < 0:
                cat_total += transaction["amount"] / -1
        cats[category.name] = cat_total
        total += cat_total

    for j, key in enumerate(cats):
        cats[key] = round((cats[key] / total) * 100, 2)
        n = max(n, len(key))
        dash += "    ----" if j == 0 else '---'

    for num in range(100, -1, -10):
        bars += f"{num:>3}| "
        for val in cats.values():
            bars += "o  " if val >= num else "   "
        bars += "\n"

    while i < n:
        temp_lbl = ""
        for key in cats.keys():
            temp_lbl += f"{key[i]}  " if i < len(key) else "   "
        i += 1
        lbl += f"     {temp_lbl}" if i == n else f"     {temp_lbl}\n"

    return f"{title}{bars}{dash}\n{lbl}"
