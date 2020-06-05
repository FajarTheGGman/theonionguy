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
echo -e $green "[=================]\n"

sudo apt-get install nodejs npm -y
npm install
npm start --cmd
