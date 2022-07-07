import TypeORM from 'typeorm';
import path from 'path';

import { CuelistEntity } from './entities/CuelistEntity';

export const datasource = new TypeORM.DataSource({
  type: 'sqlite',
  database: path.join(__dirname, '../db.sqlite3'),
  entities: [CuelistEntity],
  synchronize: true,
});
