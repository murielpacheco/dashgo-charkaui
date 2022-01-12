import { createServer, Model } from 'miragejs'

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend({})
    },

    routes() {

    }
  }) 
} 