# My REST API
I created this project to learn how to develop a rest api using nodejs, express and mongodb.

- nodejs - the javascript runtime
- express - framework for web server
- mongodb - the database

# Installation

First install mongodb and run local instance of mongodb on the port 27017(default port of mongodb).

Here's how to install mongodb on linux mint \
Check if gnupg is installed and if not install it.
```console
sudo apt update && sudo apt install gnupg -y
```
Now, add the public GPG key of MongoDB repo.
```console
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
```
Add the MongoDB repo in the list of APT package servers.
```console
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/
mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
```
Update the APT cache.
```console
sudo apt update
```
Now, tell APT to install MongoDB. The package name is mongodb-org. 
```console
sudo apt install mongodb-org
```
To start mongodb 
```console
sudo systemctl start mongod
```
That's it your local mongodb instance is running for other OS you can just google how to run local instance of mongodb on your system. \
To run it automatically everytime \
```console
sudo systemctl enable mongod
```
Then clone the project 
```console
git clone https://github.com/Harshroxnox/api.git
```
Go inside the directory
```console
cd api
```
Install dependencies
```console
npm install
```
Start the server on the port 3000
```console
npm start
```

# API Doc
I am currently working on the api, will document the routes once I am done working on it.
