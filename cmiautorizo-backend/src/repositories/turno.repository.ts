import {DefaultCrudRepository} from '@loopback/repository';
import {Turno, TurnoRelations} from '../models';
import {SqliteDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TurnoRepository extends DefaultCrudRepository<
  Turno,
  typeof Turno.prototype.id,
  TurnoRelations
> {
  constructor(
    @inject('datasources.sqliteDs') dataSource: SqliteDsDataSource,
  ) {
    super(Turno, dataSource);
  }
}
