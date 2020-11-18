import random
import string


for i in range(1, 501):
    n = 1024 * 25  # 50 Kb of text
    chars = ''.join([random.choice(string.printable) for j in range(n)])

    with open(f'text_{i}.txt', 'w+') as f:
        f.write(chars)
