# uwacg.com
To Infrastructure and planning:  
Please commit your changes to this repository instead of uwacg.github.io.   
Development of the main site starts here.  

## Some Rules
Please write your commit messages in English only.
Commit to 'master' at this moment is okay. 
Do keep in mind as we will soon proceed to 'dev' and 'staging' and prohibit commits to 'master'.  
Please give your branch a meaningful prefixes as you submit Pull requests.  
For example: `fix/type` or `feature/issue-templates`  

## Technology choices
* MongoDB
* Node.js 6.10.0 LTS
* React
* Nginx

## Code Style
Code style is not strictly enforced, but please follow [Airbnb's style guide](https://github.com/airbnb/javascript) if you can. 

## Setup local development environment
**Install Nginx.**

	sudo apt-get install nginx (Linux)
	brew install nginx (mac) and after installing: sudo nginx

	ps. for mac if you don't have homebrew, use this command to get it: ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

If you have apache installed, remove apache or edit `/etc/apache2/ports.conf`
for mac, it maybe under /Library/Webserver/Documents/apache2, but not guaranteed. 
change `Listen 80` to `Listen [any usable port other than 80 and 8080]`
restart apache and nginx

	service apache2 restart
	service nginx restart
 
**Install npm and node.js**

	sudo apt-get install npm
	sudo apt-get install nodejs

	for mac, use brew intead apt-get as mentioned above. 

Try command `node -v` after installation. It is very likely you will see this error message `/usr/sbin/node: No such file or directory`, fix it by symbolic link `nodejs` to `node` in `/usr/bin`.

	sudo ln -s /usr/bin/nodejs /usr/bin/node

**Install dependencies**

	cd [project directory]
	npm install

**Nginx config**


Server config file can be found in project root directory.

To enable the site, symbolic link test.uwacg to /etc/nginx/sites-enabled

	sudo ln -s /etc/nginx/sites-available/test.uwacg /etc/nginx/sites-enabled
	for mac nginx is in /usr/local/var/run
NOTE: You must use absolute path to create the link

## Start the node.js server (TODO: change to PM2 method)
Have node.js and npm installed in your environment.

    npm install
    npm start

Server will live at localhost:8080.

## Other
Blog: http://blog.uwacg.com/ (Chinese)
