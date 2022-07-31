# pille-recommender

This repo contains an express based application that recommends nutrition pills based on the user nutrition lack.

## Setup

### Install dependencies
```sh
npm i
```
### Create your environment variables

Create a copy of the `.env.sample` file named `.env` : 

```
cp .env.sample .env
```

Then adjust variables in `.env` to match your own environment.

## Run the app

When developping, to automatically restart the server on file changes : 

```sh
npm run dev
```

If you don't need automatic reloadings, you can just : 

```sh
npm start
```

## Run unit tests
You can use below command to run the unit tests

```sh
npm test
```