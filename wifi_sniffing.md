# Wifi Sniffing

## Wifi Sniffing with Android
### GNURoot Debian
#### setup
```shell
$ apt-get update
$ apt-get install python
$ apt-get install python3-pip
$ apt-get install python3-requests
$ apt-get install python-requests
$ apt-get install git
$ apt-get install aircrack-ng
$ airmon-ng start wlan0
$ airodump-ng mon0
```

I've tried to do wifi sniffing with an Android device, Nexus7, however, there is a permission problem.
I haven't gotten any data from wifi sniffing.

What I've understand about this experiment.
My tablet(Nexus7 2012) supports 2.4GHz and technically, running aircrack-ng on Android is possible if users can get root.  
I can't use a tp-link wifi adapter and alpha wifi adapter for wifi sniffing because my tablet's can't recognize or supply enough power to wifi adapters.
