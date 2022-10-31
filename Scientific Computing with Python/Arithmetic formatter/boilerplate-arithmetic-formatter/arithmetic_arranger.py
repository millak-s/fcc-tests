import re


def arithmetic_arranger(problems, *show_ans):
    operations = []

    if len(problems) > 5:
        return 'Error: Too many problems.'
    for pb in problems:
        reg_letters = re.compile("[a-zA-Z]")
        operation = pb.split(" ")
        operator = operation[1]

        if operator not in "-+":
            return "Error: Operator must be '+' or '-'."
        if reg_letters.search(pb):
            return "Error: Numbers must only contain digits."
        for operand in operation:
            if len(operand) > 4:
                return "Error: Numbers cannot be more than four digits."
        operations.append(operation)

    arranged_problems = line1 = line2 = dashes = ans = ''
    for problem in operations:
        l_operand, operator, r_operand = problem
        max_len = max(len(l_operand), len(r_operand))

        if operator == "-":
            solution = str(int(l_operand) - int(r_operand))
        else:
            solution = str(int(l_operand) + int(r_operand))

        if operations.index(problem) == 0:
            line1 += f"{l_operand:>{max_len + 2}}"
            line2 += f'{operator} {r_operand:>{max_len}}'
            dashes += "-" * (max_len + 2)
            ans += f"{solution:>{max_len + 2}}"
        else:
            line1 += f"{' ' * 4}{l_operand:>{max_len + 2}}"
            line2 += f"{' ' * 4}{operator} {r_operand:>{max_len}}"
            dashes += f"{' ' * 4}{'-' * (max_len + 2)}"
            ans += f"{' ' * 4}{solution:>{max_len + 2}}"

    arranged_problems = f'{line1}\n{line2}\n{dashes}'
    arranged_problems += f"\n{ans}" if show_ans else ''

    return arranged_problems
