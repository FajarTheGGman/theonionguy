// Copyright 2020 By FajarTheGGman

// Some Modules
var style = require('chalk');
var jsome = require("jsome");
var argue = require('yargs').argv
var sys = require("shelljs");
var spinner = require("ora");
var file = require('fs');
var cowsay = require("cowsay2")
// banner
console.log(style.yellow(cowsay.say('The Onion Guy :V')))
jsome({
    Coder: "FajarTheGGman",
    IG: "FajarTheGGman",
    Github: "FajarTheGGman"
})

console.log(style.blue("[!] You got some error ? Contact Me :)"))


if(argue.install){
console.log(style.bgGreen("[/] Installing Package..."))

// Setup The Dependencies
sys.exec("sudo apt-get update -y")
sys.exec("sudo apt-get install tor nginx ufw -y");
sys.exec("sudo ufw allow 'Nginx HTTP'");
sys.exec("sudo ufw reload");
sys.exec("sudo service nginx stop");
sys.exec("sudo service tor stop");
sys.exec("sudo rm /etc/nginx/sites-available/default")
sys.exec("sudo rm /etc/nginx/sites-enabled/default")
sys.exec("sudo rm /var/www/html/index.html")
sys.exec("sudo cp ./template/index.html /var/www/html/")
sys.exec("sudo mv  /etc/tor/torrc /etc/tor/backup.torrc")
sys.exec("sudo mv  /etc/nginx/nginx.conf /etc/nginx/backup.nginx.conf")
sys.exec("sudo cp ./config/nginx.conf /etc/nginx/")
sys.exec("sudo cp ./config/torrc /etc/tor/")
sys.exec("sudo cat /var/lib/tor/hidden_service/hostname > ./config/domain.txt")
file.readFile('./config/domain.txt', (err, data) => {
    file.appendFile('./config/darknet', 'server {\n listen 127.0.0.1:80;\n root /var/www/index/ \nindex index.html\nserver_name ' + data + '\n}', (err) => {
        sys.exec("sudo mv ./config/darknet /etc/nginx/sites-available/");
    })
})

console.log(style.bgGreen("[+] All Done.."))

console.log(style.yellow("[+] Starting the server..."))
sys.exec("sudo service tor start");
sys.exec("sudo service nginx start");


    
// Show The Link To User
file.readFile("./config/domain.txt", (err, data) => {
    console.log(style.bgBlue("[+] Your Web : ") + style.green(data))
})

// Options to start the server
}else if(argue.server == "start"){
sys.exec("sudo service tor start");
sys.exec("sudo service nginx start");

file.readFile("./config/domain.txt", (err, data) => {
    console.log(style("[+] Your Web : " + data))
})

console.log(style.green("[+] Server Started.."))

// Options to stop the server
}else if(argue.server == "stop"){
    sys.exec("sudo service tor stop");
    sys.exec("sudo service nginx stop");
    
    console.log(style.red("[-] Server Stopped.."))
}else if(argue.cmd){
 console.log(style.bgBlue("[----- Commands -----]"))
 console.log(style.green("[-] --help 'to see all commands'"))
 console.log(style.green("[-] --server start 'to start the server'"))
 console.log(style.green("[-] --server stop 'to stop the server'"))
    
}else{

console.log(style.red("[!] Wrong Commands, Type --cmd To See all commands"))

}
