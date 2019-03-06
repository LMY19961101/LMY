# print('helloworld')
# name = input('enter your name')
# print('hello', name)

# name = input("请输入姓名：")
# print("{}同学，你好！".format(name))
# print("{}同学，你好！".format(name[0]))
# print("{}同学，你好！".format(name[1]))

# n1 = input("请输入第一个数字")
# n2 = input("请输入第二个数字")
# sum = float(n1) + float(n2)
# print("两个数字之和:{}".format(sum))

# a = float(input("第一边："))
# b = float(input("第二边："))
# c = float(input("第三边："))
# p = (a + b + c) / 2
# area = (p * (p-a) * (p-b) * (p-c)) ** 0.5
# print("三角形面积：{}".format(area))

# radius = float(input("请输入半径："))
# area = float(3.1415926535898 * radius * radius)
# print("圆的面积：{:.2f}".format(area))

# 画一组同切圆
# import turtle
# turtle.circle(10)
# turtle.circle(40)
# turtle.circle(80)
# turtle.circle(120)

# 画一个五角星
# import turtle
# for i in range(5):
#   turtle.forward(100)
#   turtle.right(144)

# 有四个数字：1、2、3、4，能组成多少个互不相同且无重复数字的三位数？各是多少？
#!/usr/bin/python
# -*- coding: UTF-8 -*-
# for i in range(1,5):
#   for j in range(1,5):
#     for k in range(1,5):
#       if( i != k ) and (i != j) and (j != k):
#         print(i,j,k)

# 企业发放的奖金根据利润提成。
# 利润(I)低于或等于10万元时，奖金可提10%；
# 利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；
# 20万到40万之间时，高于20万元的部分，可提成5%；
# 40万到60万之间时高于40万元的部分，可提成3%；
# 60万到100万之间时，高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，
# 从键盘输入当月利润I，求应发放奖金总数？
#!/usr/bin/python
# -*- coding: UTF-8 -*-
# num = input('净利润:')
# arr = [1000000, 600000, 400000, 200000, 100000, 0]
# index = [0.01, 0.015, 0.03, 0.05, 0.075, 0.1]
# sum = 0
# for i in range(0, 6):
#   if num > arr[i]:
#     sum += (num - arr[i]) * index[i]
#     print((num - arr[i]) * index[i])
#     num = arr[i]
# print(sum)

# -*- coding: UTF-8 -*-
# num = float(input("请输入一个数字："))
# num_sqrt = num ** 0.5
# print('%.3f的平方根是：%.3f'%(num, num_sqrt))

# a = float(input('第1边'))
# b = float(input('第2边'))
# c = float(input('第3边'))
# d = (a + b + c) / 2
# area = (d * (d-a) * (d-b) * (d-c)) ** 0.5
# print('三角形的面积是：%.2f' %area)

# import random
# print(random.randint(0, 9))

# x = input('请输入x:')
# y = input('请输入y:')
# temp = x
# x = y
# y = temp
# print('交换后的x：{},y：{}'.format(x, y))

# num = float(input("请输入一个数字:"))
# if num > 0:
#   print('正数')
# elif num == 0:
#   print('0')
# else:
#   print('负数')

# num = float(input('请输入一个数字：'))
# if num >= 0:
#   if (num == 0):
#     print('0')
#   else:
#     print('正数')
# else:
#   print('负数')

# def is_number(s):
#   try:
#     float(s)
#     return True
#   except ValueError:
#     pass
#   return False
# print(is_number('1'))

# num = int(input("请输入一个数字:"))
# if (num % 2) == 0:
#   print("{}是偶数".format(num))
# else:
#   print("{}是奇数".format(num))

# year = int(input("请输入年份:"))
# if (year % 4) == 0:
#   if (year % 100):
#     if (year % 400) == 0:
#       print("{}是闰年".format(year))
#     else:
#       print("{}不是闰年".format(year))
#   else:
#     print("{}是闰年".format(year))
# else:
#   print("{}不是闰年".format(year))

# print("80, 90, -1, -1000中最大值：", max(80, 90, -1, -1000))

# num = int(input("请输入一个数字："))
# if num > 1:
#   for i in range(2, num):
#     if (num % i) == 0:
#       print(num, "不是质数")
#       print(i, "乘与", num//i, "是", num)
#       break
#   else:
#     print(num, "是质数")
# else:
#   print(num, "不是质数")

# low = int(input("最小值："))
# up = int(input("最大值："))
# for num in range(low, up+1):
#   if num > 1:
#     for i in range(2, num):
#       if (num % i) == 0:
#         break
#     else:
#       print(num)

# for i in range(1, 10):
#   for j in range(1, i+1):
#     print("{}x{}={}\t".format(i, j, i*j), end='')
#   print()

# nterms = int(input("你需要几项？"))
# n1 = 0
# n2 = 1
# count = 2
# if nterms <= 0:
#   print("请输入一个正整数")
# elif nterms == 1:
#   print("斐波那契数列:")
#   print(n1)
# else:
#   print("斐波那契数列:")
#   print(n1,',',n2,end=",")
#   while count < nterms:
#     nth = n1 + n2
#     print(nth,end=",")
#     n1 = n2
#     n2 = nth
#     count += 1

# num = int(input("请输入一个数字："))
# sum = 0
# n = len(str(num))
# temp = num
# while temp > 0:
#   digit = temp % 10
#   sum += digit ** n
#   temp //= 10
# if num == sum:
#   print(num, "是阿姆斯特朗数")
# else:
#   print(num, "不是阿姆斯特朗数")

# 获取用户输入的数字
# num = int(input("请输入一个数字: "))
# # 初始化变量 sum
# sum = 0
# # 指数
# n = len(str(num))
# # 检测
# temp = num
# while temp > 0:
#    digit = temp % 10
#    sum += digit ** n
#    temp //= 10
# # 输出结果
# if num == sum:
#    print(num,"是阿姆斯特朗数")
# else:
#    print(num,"不是阿姆斯特朗数")

# # 计算器
# def add (x, y):
#   return x + y

# def subtract (x, y):
#   return x - y

# def multiply (x, y):
#   return x * y

# def divide (x, y):
#   return x / y

# print("选择运算：")
# print("1,相加")
# print("2,相减")
# print("3,相乘")
# print("1,相除")

# chioce = input("请输入你的选择1/2/3/4:")
# num1 = int(input("请输入第一个数字："))
# num2 = int(input("请输入第二个数字："))
# if chioce == '1':
#   print(num1, "+", num2, "=", add(num1, num2))
# elif chioce == '2':
#   print(num1, "-", num2, "=", subtract(num1, num2))
# elif chioce == '3':
#   print(num1, "*", num2, "=", multiply(num1, num2))
# elif chioce == '4':
#   print(num1, "/", num2, "=", divide(num1, num2))
# else:
#   print("非法输入!")

# # 生成日历
# import calendar
# year = int(input('请输入年份：'))
# month = int(input('请输入月份：'))
# print(calendar.month(year, month))

# import calendar
 
# # 输入指定年月
# yy = int(input("输入年份: "))
# mm = int(input("输入月份: "))
 
# # 显示日历
# print(calendar.month(yy,mm))

