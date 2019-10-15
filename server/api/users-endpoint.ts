import * as crypto from 'crypto';
import * as Express from 'express';
import { Environment } from '../environment';
import { PgSql } from '../pg-sql';

const usersApi = Express.Router();

usersApi.get('/CheckUserExist', (req: Express.Request, res: Express.Response) => {
  try {
    const client = PgSql.getClient();
    client.connect().then((err: any) => {
      if (err) {
        throw new Error(err);
      }
      const username = req.query.username;
      const email = req.query.email;
      client.query('SELECT sm.users__check_user_exist($1, $2)', [username, email]).then((result: any) => {
        res.send(result.rows[0]);
      });
    });
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
    res.sendStatus(500);
  }
});

usersApi.post('/CreateUser', (req: Express.Request, res: Express.Response) => {
  try {
    const client = PgSql.getClient();
    client.connect().then((err: any) => {
      if (err) {
        throw new Error(err);
      }
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const email = req.body.email;
      const username = req.body.username;
      const password = req.body.password;
      if (!firstName || !lastName || !email || !username || !password) {
        throw new Error('Missing input(s)');
      }
      // Encrypt password
      const hashedPassword = crypto.createHmac('sha256', Environment.getEnvironmentVars().encryptionKey)
        .update(password)
        .digest('base64');
      client.query(
        'SELECT sm.users__create_user($1, $2, $3, $4, $5)',
        [firstName, lastName, email, username, hashedPassword],
      ).then((result: any) => {
          res.sendStatus(200);
        });
    });
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
    res.sendStatus(500);
  }
});

export {usersApi};
