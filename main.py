import datetime 
import threading
import os




def setInterval(func,time):
    e = threading.Event()
    while not e.wait(time):
        func()

def main():
    os.system("poweroff")
       
def pushGit():
    timeNow = datetime.datetime.now()
    data = str(timeNow.day) +"."+ str(timeNow.month) +"."+ str(timeNow.year)
    os.system("cd ~/" )
    os.system("git add *")
    os.system("git commit -m" + data)
    os.system("git push origin master")

pushGit()
setInterval(main,60)
