# notes-app-nodejs
A simple terminal NodeJS application that can be used to create and edit nodes
## Installation
* Clone the repository and install the package from local source
```shell
curl -O -L https://github.com/llsuryall/notes-app-nodejs/releases/download/latest/notes-app-nodejs.tgz
sudo npm install -g notes-app-nodejs.tgz
```
## Usage
* Initialize the notes directory for your user
```shell
notes-app init
```
* To add a new note/update an existing one
```shell
notes-app add 'title of the note'
```
* To list all notes
```shell
notes-app list
```
* To read a note
```shell
notes-app get 'title of the note'
```
* To delete a note
```shell
notes-app delete 'title of the note'
```
* To delete all notes
```shell
notes-app clear
```
