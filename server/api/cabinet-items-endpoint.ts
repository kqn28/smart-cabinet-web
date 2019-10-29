import * as Express from 'express';
import { CabinetItem } from '../../core/cabinet-item/cabinet-item';
import { Environment } from '../environment';
import { PgSql } from '../pg-sql';

const cabinetItemsApi = Express.Router();

cabinetItemsApi.post('/AddItem', (req: Express.Request, res: Express.Response) => {
  try {
    const client = PgSql.getClient();
    client.connect().then((err: any) => {
      if (err) {
        throw new Error(err);
      }
      const userId: string = req.body.userId;
      const item: CabinetItem = req.body.item;
      if (!userId || !item) {
        throw new Error('Missing input(s)');
      }
      client.query(
        'SELECT * from sm.cabinet_items__add_item($1, $2, $3, $4)',
        [userId, item.name, item.quantity, item.unit],
      ).then((result: any) => {
        const items = result.rows.map((row: any) => new CabinetItem(row.name, row.quantity, row.unit));
        res.send({items});
      });
    });
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error);
    res.sendStatus(500);
  }
});

export {cabinetItemsApi};
