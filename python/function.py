#encoding:utf-8

# a = abs(100)
# print(a)

# b = abs(-20)
# print(b)

# c = abs(12.34)
# print(c)

# d = max(1, -3, 90)
# print(d)

# print(int('123'))
# print(int(12.34))
# print(float('12.34'))
# print(str(1.23))
# print(str(100))
# print(bool(1))
# print(bool(''))

# a = abs
# print(a(-1))

# n1 = 255
# n2 = 1000
# print(hex(n2))

# n1 = hex(int(input("请输入第一组数字：")))
# n2 = hex(int(input("请输入第二组数字：")))
# print("第一组转换为十六进制为：%s\n第二组为：%s"%(n1, n2))

# def my_abs(x):
#   if not isinstance(x, (int, float)):
#     raise TypeError('bad operand type')
#   if (x >= 0):
#     return x
#   else:
#     return -x
# # print(my_abs(-1))

# def nop():
#   pass ## 占位符

# # print(abs('A'))
# # print(my_abs('A'))

# import math
# def move(x, y, step, angle=0):
#   nx = x + step * math.cos(angle)
#   ny = y + step * math.sin(angle)
#   return nx, ny

# r = move(100, 100, 60, math.pi / 6)
# print(r)

# import math
# def quadratic(a, b, c):
#   x1 = float((-b+math.sqrt(b**2-4*a*c))/(2*a))
#   x2 = float((-b-math.sqrt(b**2-4*a*c))/(2*a))
#   return x1, x2

# print(quadratic(1, 100, 1))

def power(x, n=2):
  s = 1
  while n>0:
    n = n-1
    s = s*x
  return s

# print(power(5))
# print(power(5, 3))
# 必选参数在前面，默认参数在后面
# 使用默认参数的好处是能够降低调用难度

def enroll(name, gender, city='beijing', age=6):
  print('name:%s'%(name))
  print('gender:', gender)
  print('city:{0}'.format(city))
  print('age:', age)

# print(enroll('ming', 'F'))
# print(enroll('bob', 'M', age=7))

# 默认参数必须指向不变的对象

def add_end(L=None):
  if L is None:
    L = []
  L.append('END')
  return L
# print(add_end([5, 6]))
# print(add_end())
# print(add_end())

# 为什么要设计str,None这样的不变对象呢？
# 因为不变对象一旦被创建，对象内部的数据就不能修改，这样就减少了由于修改数据导致的错误
# 另外，由于对象不变，多任务环境下同时读取对象不需要加锁，同时读一点问题都没有
# 编写程序时，如果可以设计一个不变的对爱哪个，就尽量设计成不变的对象

# 可变参数
def calc(*numbers):
  sum = 0
  for n in numbers:
    sum = sum + n*n
  return sum
a = calc(1,2,3)
b = calc()
# print(b)

## 在list或者tuple前面加一个*号，把list或者tuple的元素变成可变参数传进去
## 

nums = [1,2,3]
# print(calc(nums[0], nums[1], nums[2]))
# print(calc(*nums))


# 关键字参数
# 可变参数允许传入0个或任意个参数，这些可变参数在函数调用时自动组装为一个tuple。
# 而关键字允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict。
def person(name, age, **kw):
  if 'city' in kw:
    pass
  if 'job' in kw:
    pass
  print('name:%s,''age:%s,''other:%s'%(name,age,kw))
# print(person('M', 30))
# print(person('bob', 35, city="beijing"))
# print(person('jack', 24, gender='M', job='Engineer'))

# 关键字参数有什么用？
# 可以扩展函数功能，
extra = {'city': 'beijing', 'job': 'Engineer'}
# print(person('Jack', 24, city=extra['city'], job=extra['job']))
# print(person('Jack', 24, **extra))

# 命名关键字
print(person('Jack', 24, city="beijing", addr="chaoyang", zipcode=123456))

# def persons(name, age, *, city, job):
#   print(name, age, city, job)

# print(persons('Jack', 24, city="beijing", job="Enginner"))