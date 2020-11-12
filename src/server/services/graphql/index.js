import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import Resolvers from './resolvers';
import Schema from './schema';
import JWT from 'jsonwebtoken'
import auth from './auth'

export default (utils) => {
const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(utils),
    schemaDirectives: {
        auth: auth
    }
});

const server = new ApolloServer({
    schema: executableSchema,
    context: async ({ req }) => {
        const authorization = req.headers.authorization;
        if(typeof authorization !== typeof undefined) {
            var search = "Bearer";
            var regEx = new RegExp(search, "ig");
            const token = authorization.replace(regEx, '').trim();
            return JWT.verify(token, "thisisasupersecretstringforyou", function(err, result) {
                if(err){
                    return req;
                    // console.log(req)
                } else {
                    // console.log(result)
                    return utils.db.models.User.findById(result.id).then((user) => {
                        return Object.assign({}, req, {user})
                    })
                }
            });
        } else {
            return req;
        }
    }
})

return server;

};