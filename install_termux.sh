#!/usr/bin/bash

blue='\033[34;1m'
green='\033[32;1m'
purple='\033[35;1m'
cyan='\033[36;1m'
red='\033[31;1m'
white='\033[37;1m'
yellow='\033[33;1m'

echo -e $green "[=================]"
echo -e $blue "TheOnionGuy By FajarTheGGman"
echo -e $yellow "[+] Termux Installer Ubuntu"
echo -e $green "[=================]\n"

echo -e $cyan "[/] Please Wait...."
mkdir ubuntu
cd ubuntu
apt-get install git proot wget openssl-tool -y && hash -r && wget https://raw.githubusercontent.com/EXALAB/Anlinux-Resources/master/Scripts/Installer/Ubuntu/ubuntu.sh 
chmod +x ubuntu.sh
./ubuntu.sh
./start-ubuntu.sh
