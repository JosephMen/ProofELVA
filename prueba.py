
closePath = [1,0,0,0,1,0,1,0,2,1]

def function(number):
    if number < 10:
        return closePath[number]
    else:
        return closePath[number%10] + function(number//10)

number = int(input("Please enter the number: "))
print (number ," -> Output -> ",function(number))

#given a number n in the input, the times that it will be repeated will be at least log(n) *base 10*
#the best case for the function is 1 time