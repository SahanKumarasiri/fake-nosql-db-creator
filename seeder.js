const mongoose = require('mongoose');
const { UserModel, PostModel, CommentModel, CategoryModel } = require('./models');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/powerbi_mock', { useNewUrlParser: true, useUnifiedTopology: true });

const seedDB = async () => {
    await UserModel.deleteMany({});
    await PostModel.deleteMany({});
    await CommentModel.deleteMany({});
    await CategoryModel.deleteMany({});

    // Create categories
    const categories = [
        { name: 'Tech', description: 'All about technology' },
        { name: 'Lifestyle', description: 'Tips and tricks for better living' },
        { name: 'Education', description: 'Learning and knowledge' },
        { name: 'Entertainment', description: 'Movies, music, and more' }
    ];
    const categoryDocs = await CategoryModel.insertMany(categories);

    // Create users
    let users = [];
    for (let i = 0; i < 100; i++) {
        users.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
            dateCreated: faker.date.past()
        });
    }
    const userDocs = await UserModel.insertMany(users);

    // Create posts
    let posts = [];
    for (let i = 0; i < 200; i++) {
        posts.push({
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            dateCreated: faker.date.past(),
            likes: faker.random.number({ min: 0, max: 1000 }),
            views: faker.random.number({ min: 0, max: 10000 }),
            user: userDocs[faker.random.number({ min: 0, max: 99 })]._id,
            category: categoryDocs[faker.random.number({ min: 0, max: 3 })]._id
        });
    }
    const postDocs = await PostModel.insertMany(posts);

    // Create comments
    let comments = [];
    for (let i = 0; i < 500; i++) {
        comments.push({
            content: faker.lorem.sentence(),
            dateCreated: faker.date.past(),
            user: userDocs[faker.random.number({ min: 0, max: 99 })]._id,
            post: postDocs[faker.random.number({ min: 0, max: 199 })]._id
        });
    }
    await CommentModel.insertMany(comments);

    console.log('Database seeded!');
    mongoose.connection.close();
};

seedDB();
