#! /bin/bash

ps=`ps aux | grep prettier-forever/watch.js | grep -v grep | wc -l`

if [ $ps -eq 0 ]; then
	# 対象プロセスが存在しない場合
	cd /home/ec2-user/environment/prettier-forever
	npm start
fi

exit 0
