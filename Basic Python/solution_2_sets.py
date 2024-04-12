union=set()
with open("q2-input.txt", "r") as file:
    data=[[int(word) for word in line.split(",")] for line in file.readlines()]

for line in data:
    for word in line:
        union.add(word)

print(len(union))