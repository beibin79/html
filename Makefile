default:
	pandoc -f markdown -t html index.md >  index.html

comment = "makefile change"

push:
	git add --all 
	git commit -m $(comment)
	git push origin master

pull:
	git pull


over:
	git fetch --all
	git reset --hard origin/master
