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

import math
def quadratic(a, b, c):
  x1 = float((-b+math.sqrt(b**2-4*a*c))/(2*a))
  x2 = float((-b-math.sqrt(b**2-4*a*c))/(2*a))
  return x1, x2

print(quadratic(1, 100, 1))