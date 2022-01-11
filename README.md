# ASEAN-API-V2

The API for ASEAN BTE to get memes, build sites, and more!

## 👨‍💻 Demo

Check out the website: [ASEAN BTE API](aseanbte-api.herokuapp.com/)

## 👇 Prerequisites

Before starting working on this project, please make sure you have already installed the following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)

## 🛠️ Installation Steps

1. Fork the project
2. Clone the project, by using the following command
   ```bash
   $ git clone https://github.com/ASEAN-Build-The-Earth/ASEAN-API-V2
   ```
3. Navigate to the project directory `cd ASEAN-API-V2`
4. Install dependencies with `npm install`
5. Run `npm start` to start a local development environment

Alternatively, skip all the steps by using [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ASEAN-Build-The-Earth/ASEAN-API-V2)

## 📁 File structure

ASEAN BTE API follows the traditional express API folder structure

- `controllers`
- `model`
- `routes`
- `views`
- `utils`

### Controllers

The main logic (such as fetching the data from the MongoDB database) for each route is present inside the `controllers` folder

### Model

The API schemas are present inside the `model` folder.

### Routes

Each endpoint is divided into smaller files that are present inside the `routes` folder, which then can be imported into the main `index.js` file.

### Views

All the `HTML` and `CSS` stylesheets are present inside the `views` folder

### Utils

Any utility function/logic are present inside this folder, which then can be imported into the `controllers` or any other folder and used inside them

## 👨‍💻 Contributing

All kinds of contributions are always welcomed. It is recommended to either tell the maintainers that you are working on a previously made issue or make a new issue and let the maintainers now that you are working on it.

## 💪 Thanks to all Contributors

Thanks a lot for spending your time helping ASEAN BTE API grow. Thanks a lot!

[![Contributors](https://contrib.rocks/image?repo=ASEAN-Build-The-Earth/ASEAN-API-V2)](https://github.com/ASEAN-Build-The-Earth/ASEAN-API-V2/graphs/contributors)

## 🙏 Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️
