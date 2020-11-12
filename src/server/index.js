import express from 'express';
import path from 'path'
import cors from 'cors'
import expressPlayground from "graphql-playground-middleware-express";

import servicesLoader from './services';


const app = express();

import db from './database'
const utils = {
    db,
}
const services = servicesLoader(utils);



const root = path.join(__dirname, '../../');

app.use('/uploads', express.static(path.join(root, 'uploads')));
app.use(cors())

const serviceNames = Object.keys(services);

for(let i = 0; i < serviceNames.length; i += 1) {
    const name = serviceNames[i];
    if(name === 'graphql') {
        // console.log(services[name])
        services[name].applyMiddleware({app})
    } else {
        app.use(`/${name}`, services[name]);
    }
}

app.get('/playground', expressPlayground({ endpoint: '/graphql'}))
app.get('*', (req, res) => res.send('Hello World'));
app.listen(8002, () => console.log('Listening on port 8002'))