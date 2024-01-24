#! /bin/bash

echo " -- Install Chokidar & Forever -- "
npm install
npm install -g forever

echo " -- Setting is starting -- "

echo 'cd ~/environment/prettier-forever' >> ~/.bashrc
echo './start.sh' >> ~/.bashrc
echo 'cd ~' >> ~/.bashrc

source ~/.bashrc
