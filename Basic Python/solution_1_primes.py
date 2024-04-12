with open("q1-input.txt", "r") as file:
    data=[int(line.strip()) for line in file.readlines()[1:] if line.strip().isdigit()]

max_num=max(data)*50
lowest_div=[0]*(max_num+1)
primes=[]

for i in range(2, max_num+1):
    if lowest_div[i]==0:
        lowest_div[i]
        primes.append(i)
        if len(primes) > 1 and i - primes[-2] == 2:
            primes.append(i)
    j = 0
    while i*primes[j] <= max_num:
        lowest_div[i*primes[j]] = primes[j]
        if i%primes[j]==0:
            break
        j+=1

for num in data:
    print(primes[num-1])