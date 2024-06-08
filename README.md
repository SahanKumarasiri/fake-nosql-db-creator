# MongoDB Seeding Script

This guide explains how to set up and run a MongoDB seeding script using Mongoose and Faker.js. This script will populate your MongoDB database with sample data for Users, Posts, Comments, and Categories.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [MongoDB](https://www.mongodb.com/) (v4.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher) or [yarn](https://yarnpkg.com/)

## Setup

### 1. Clone the repository

```sh
git clone https://github.com/SahanKumarasiri/fake-nosql-db-creator
cd fake-nosql-db-creator
```

### 2. Install dependencies

Run the following command to install the necessary npm packages:

```sh
npm install
```

or with Yarn:

```sh
yarn install
```

### 3. Configure environment variables

Create a `.env` file in the root directory of your project and add the MongoDB connection string:

```env
MONGODB_URL=mongodb://localhost:27017/your-database-name
```

Replace `your-database-name` with the name of your MongoDB database.


### 5. Run the seeding script

Run the following command to execute the seeding script:

```sh
node seed.js
```

This will delete any existing data in the `users`, `posts`, `comments`, and `categories` collections and insert new sample data.

### 6. Verify the seeded data

After running the script, you can verify that the data has been correctly seeded by connecting to your MongoDB database using a tool like [MongoDB Compass](https://www.mongodb.com/products/compass) or by querying the collections from a MongoDB shell.

## Conclusion

You have successfully set up and executed a MongoDB seeding script to populate your database with sample data. This can be useful for testing and development purposes. For any further modifications or enhancements, refer to the Mongoose and Faker.js documentation.
