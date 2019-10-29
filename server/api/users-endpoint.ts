import * as crypto from 'crypto';
import * as Express from 'express';
import { SmartCabinetUser } from '../../core/user/smart-cabinet-user';
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
      client.query('SELECT * from sm.users__get_user($1, $2)', [username, email]).then((result: any) => {
        res.send({userExist: result.rows.length > 0});
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
        'SELECT * from sm.users__create_user($1, $2, $3, $4, $5)',
        [firstName, lastName, email, username, hashedPassword],
      ).then((result: any) => {
        if (result.rows.length > 1) {
          throw Error('There are more than one rows returned');
        }
        const user = new SmartCabinetUser(
          result.rows[0].id,
          result.rows[0].first_name,
          result.rows[0].last_name,
          result.rows[0].username,
          result.rows[0].email,
        );
        res.send({user});
      });
    });
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
    res.sendStatus(500);
  }
});

usersApi.post('/GetUser', (req: Express.Request, res: Express.Response) => {
  try {
    const client = PgSql.getClient();
    client.connect().then((err: any) => {
      if (err) {
        throw new Error(err);
      }
      const username = req.body.username;
      const password = req.body.password;
      const hashedPassword = crypto.createHmac('sha256', Environment.getEnvironmentVars().encryptionKey)
        .update(password)
        .digest('base64');
      client.query('SELECT * from sm.users__get_user($1, $2)', [username, null]).then((result: any) => {
        if (result.rows.length > 1) {
          throw Error('There are more than one rows returned');
        }
        if (result.rows.length === 0) {
          res.send({invalidPassword: false, noUserExist: true, user: []});
        }
        const user = new SmartCabinetUser(
          result.rows[0].id,
          result.rows[0].first_name,
          result.rows[0].last_name,
          result.rows[0].username,
          result.rows[0].email,
        );
        res.send({invalidPassword: result.rows[0].password !== hashedPassword, noUserExist: false, user});
      });
    });
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
    res.sendStatus(500);
  }
});

export {usersApi};
