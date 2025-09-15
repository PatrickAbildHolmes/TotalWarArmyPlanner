# TotalWarArmyPlanner
## About
This tool is a very fresh, WIP, hobby project of mine, intended to serve as a companion to the Total War game series. <br>
Initially, it will be developed for Total War Warhammer 3, with the first race added being The Empire. <br>
Once all WH3 races have been added at some point in the distant future, I will consider expanding to other (new?) entries in the series, 
seeing as the games have broadly followed the same recipe for Custom Games for the last 20-odd years, and will likely continue to do so.

My hope is that it will prove useful as a neat planning utility for Singleplayer Campaigns, and a much more accessible & share-friendly army planner for the Multiplayer community. <br>

## How to run
### Frontend
```bash
cd frontend
npm run dev --port=5000 --host=0.0.0.0
```
### Backend
```bash
cd backend
go run backend
```
### Database

## How to install
### Frontend
Navigate to frontend folder and install dependencies:
```bash
cd frontend
npm install
```
Update NodeJS (Linux) with:
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
apt-get install -y nodejs
```
### Backend
```bash
cd backend
go build backend
```
## Architecture
Frontend is coded ReactJS. <br>
Follows MVC, on a Go backend with a NoSQL database. <br>
FE/BE/DB kept separate for good separation of concerns and easy containerization.

## Purpose
The main purpose of this project is twofold:
* To provide a tool for the Total War community, SP and MP, to plan and share army compositions
* Personal experience with web development in a new language (Go)

## Other useful information
This project relies on large amounts of unit information and pictures from the game pack files, 
which are periodically retrieved through the use of a tool and inserted into the database.
