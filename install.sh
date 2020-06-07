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

sudo apt-get update -y
sudo apt-get install tor nginx ufw nodejs npm -y
sudo ufw allow 'Nginx HTTP'
sudo ufw reload
npm install
node index.js --cmd
