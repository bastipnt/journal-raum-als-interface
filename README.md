# Welcome to the journal for our study class "Raum als Interface"

## How to setup
1. Clone the repo to your computer
```sh
cd <folder-to-install>
git clone git@github.com:lItc0de/journal-raum-als-interface.git
```
2. Install npm on your system
For mac:
```sh
brew install nvm
nvm install --latest-lts
```

3. Install dependencies
```sh
npm install
```

4. Run the website locally
```sh
npm start
```
Then navigate to http://localhost:8000

## How to edit the journal notes
Navigate to the markdown folder and edit the files with your favorite editior.
New files wil be automatically added to the page.
It uses the order of the date in the file header section.

## How to deploy
First commit all your changes and push them to main
```sh
git add .
git commit -m "<your-commit-message>"
git push
```

Then deploy the new commits
```sh
npm run deploy
```


This project is done by Basti, Milli and Aron
