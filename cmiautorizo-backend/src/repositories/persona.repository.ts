import {DefaultCrudRepository} from '@loopback/repository';
import {Persona, PersonaRelations} from '../models';
import {SqliteDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {
  constructor(
    @inject('datasources.sqliteDs') dataSource: SqliteDsDataSource,
  ) {
    super(Persona, dataSource);
  }
}
