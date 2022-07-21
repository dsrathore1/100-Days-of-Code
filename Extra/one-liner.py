# Swap two variable
a = 12
b = 43
print(a, b)  # Before Swap
a, b = b, a
print(a, b)  # After Swap

result = []
for i in range(10):
    result.append(i**2)
# print(result)
# List Comprehension
result = [i for i in range(10)]  # i**1 == i+1 == i 
print(result)

# Lambda function
# Traditional function with def
def sum(a, b):
    print(a+b)
sum(2, 4)

# Lambda Function (Anonymous function)
sum_lambda = lambda x,y : x + y

print(sum_lambda(3,5))

# Print without newLine
for i in range(1,5):
    print(i, end= ' ')
print("\n",*range(1,5))