# modules
import socket
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)

# left, right, up, down, and x
button1 = 12
button2 = 16
button3 = 11
button4 = 13
button5 = 15

def setupEnv():
    # socket
    host = "172.22.151.123"
    port = 8080
    
    # init buttons
    GPIO.setup(button1, GPIO.IN, pull_up_down=GPIO.PUD_UP)
    GPIO.setup(button2, GPIO.IN, pull_up_down=GPIO.PUD_UP)
    GPIO.setup(button3, GPIO.IN, pull_up_down=GPIO.PUD_UP)
    GPIO.setup(button4, GPIO.IN, pull_up_down=GPIO.PUD_UP)
    GPIO.setup(button5, GPIO.IN, pull_up_down=GPIO.PUD_UP)


def createConn():
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM) # create an obj
    client.connect((host, port)) # connect to server
    

# main
setupEnv()
createConn()

while(1):
    # press the button
    if GPIO.input(button1)==0:
        print("up button was pressed")
        client.send(b'u')
        sleep(.1)

    if GPIO.input(button2)==0:
        print("right button was pressed")
        client.send(b'r')
        sleep(.8)

    if GPIO.input(button3)==0:
        print("down button was pressed")
        client.send(b'd')
        sleep(.1)

    if GPIO.input(button4)==0:
        print("left button was pressed")
        client.send(b'l')
        sleep(.8)

    if GPIO.input(button5)==0:

        print("x button was pressed")
        client.send(b'x')
        sleep(.1)
        GPIO.cleanup()
        client.close()
