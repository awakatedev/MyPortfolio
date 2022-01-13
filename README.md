# Awakate.dev platform <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">  <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white">


***[Git and GitHub (Workflow)](https://github.com/Uptly/Uptly-GitHubWorkflow)***

# Table of content
- [Tree of directories](#tree-of-directories)
- [Frontend useless commands to development mode](#frontend-useless-commands-to-development-mode)
- [Backend useless commands to development mode](#backend-useless-commands-to-development-mode)
- [Frontend structure](#frontend-structure)
- [Backend structure](#backend-structure)

# Frontend useless commands to development mode
## Npm scripts
An npm script is just a shortcut to run a series of node commands on your project. Any npm script, meaning any node.js commands listed under a package.json file's "scripts" section, are executed through node.js when you call them.

Here you will find all the useless commands at time to work on the project:

- [Test](#test)
- [Start](#start)
- [Dev](#dev)
- [Build](#build)
- [Format](#format)
- [Lint](#lint)

## Test

```
$ npm run test
```

## Start

This command tells webpack to spin up a development server, serve the files live, and open the browser to the port you specify in the webpack.config file (or it will use the default 8080).

```
$ npm run start
```

## Dev

```
$ npm run dev
```

## Build

```
$ npm run build
```
## Format

```
$ npm run format
```

## Lint

```
$ npm run lint
```

# Backend useless commands to development mode
To run the project you need to install Python and other libraries that the project uses.

### Requirements installation
1. First, go to the [Python official page] (https://www.python.org/downloads/) and download
python according to your operating system.
   * [Installation on Windows] (https://www.youtube.com/watch?v=_T3UC_okLiM)
   * [Installation on Linux] (https://www.youtube.com/watch?v=PFL81nkUYNo)
   * [Installation on MacOs] (https://www.youtube.com/watch?v=IPllX-enwxo)
2. With Python installed, it remains to install the libraries that the project will use.
    
    * Using a terminal (CMD or Bash), we go to the level of the file `requirements.txt`
    and we execute the following command: `pip install requirements.txt`. Python will take care of installing all the libraries
    specified there.
      
### Project execution
When you have finished installing all the requirements, you are ready to execute the project.

1. Using a terminal, go to the `manage.py` file level and execute the following command` python manage.py makemigrations`.
This command will make the necessary migrations so that the project is ready.

2. Using a terminal, go to the file level `manage.py` and execute the following command` python manage.py migrate`.
This command will apply the migrations to the database (`brozger_platform / db.sqlite3`).

3. With the migrations applied, all that remains is to run the project. Go to the level of the `manage.py` file and, execute the following command` python manage.py runserver`, subsequently open the url: `127.0.0.1: 8000` in a browser of your choice.


### Create Administrator User
1. Through a terminal, go to the level of the `manage.py` file and execute the following
   `python manage.py createsuperuser`, fill in the requested data and you're done. This command will create a user
   administrator able to enter the administration panel.
   
### Access the administration panel
1. Through a terminal, go to the level of the `manage.py` file and execute the following
   `python manage.py runserver`. This command will run the django server.
2. In your browser, go to the path `http: //127.0.0.1: 8000 / admin`, log in with your administrator user and that's it.


* Important note: For now, we are going to work with Python's built-in database engine, call it sqlite3.
All this for more portability and to avoid configuration and installation conflicts for more advanced engines; in the future we will switch to mysql. *

