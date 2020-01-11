import datetime 
import threading
import os

def setInterval(func,time):
    e = threading.Event()
    while not e.wait(time):
        func()


def main(push,interval,power):
    print('Push + poweroff = 1 | OnlyPush = 2')
    info = input()
    if info == "1":
        push()
        interval(power,60)
    elif info == "2":
        push()

def off():  
    os.system("poweroff")
       
def pushGit():
    timeNow = datetime.datetime.now()
    data = str(timeNow.day) +"."+ str(timeNow.month) +"."+ str(timeNow.year)
    os.system("git add *")
    os.system("git commit -m" + data)
    os.system("git push origin master")

main(pushGit,setInterval,off)


