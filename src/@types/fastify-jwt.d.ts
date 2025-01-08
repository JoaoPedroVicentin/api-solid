import '@fastify/jwt'
import { TRoleAdmin } from './roleAdmin'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      role: TRoleAdmin
      sub: string
    }
  }
}
