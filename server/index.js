const express = require('express');
const cors = require('cors');
const colors = require('colors');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const schema = require('./schema/schema');
const connectDB = require('./config/db');

// connect DB
connectDB();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
