import * as pg from 'pg';
import {Environment} from './environment';

export class PgSql {
  public static getClient(): pg.Client {
    return new pg.Client({
      connectionString: Environment.getEnvironmentVars().databaseUrl,
      ssl: true,
    });
  }
}
