import os
import socket
import pygame
#from pygame.locals import *
#import time

pygame.init()
print ("Joystics: ", pygame.joystick.get_count())
my_joystick = pygame.joystick.Joystick(0)
my_joystick.init()
clock = pygame.time.Clock()

host = "172.22.151.123"
port = 8080
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM) # create an obj

while 1:
    for event in pygame.event.get():
        #print(my_joystick.get_numaxes()-1)
        x_axis = my_joystick.get_axis(0) # left & right
        y_axis = my_joystick.get_axis(1) # up & down
        button_X = my_joystick.get_button(0) # button X
        button_Y = my_joystick.get_button(3) # button Y
        #print(y_axis)

        if(button_X==1.0):
            print("pressed button X")
            client.connect((host, port)) # connect to server

        if(button_Y==1.0):
            print("pressed button Y")
            client.send(b'x')
            client.close()

        if(x_axis == -1.0):
            print("left")
            client.send(b'l')
        elif (x_axis == 0.999969482421875):
            print("right")
            client.send(b'r')

        if(y_axis == -1.0):
            print("up")
            client.send(b'u')
        elif (y_axis == 0.999969482421875):
            print("down")
            client.send(b'd')
        
            

        #print( my_joystick.get_axis(1) )
        
        #clock.tick(40)

pygame.quit ()