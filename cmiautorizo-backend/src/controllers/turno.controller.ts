import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Turno} from '../models';
import {TurnoRepository} from '../repositories';

export class TurnoController {
  constructor(
    @repository(TurnoRepository)
    public turnoRepository : TurnoRepository,
  ) {}

  @post('/turnos', {
    responses: {
      '200': {
        description: 'Turno model instance',
        content: {'application/json': {schema: getModelSchemaRef(Turno)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Turno, {
            title: 'NewTurno',
            exclude: ['id'],
          }),
        },
      },
    })
    turno: Omit<Turno, 'id'>,
  ): Promise<Turno> {
    return this.turnoRepository.create(turno);
  }

  @get('/turnos/count', {
    responses: {
      '200': {
        description: 'Turno model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Turno)) where?: Where<Turno>,
  ): Promise<Count> {
    return this.turnoRepository.count(where);
  }

  @get('/turnos', {
    responses: {
      '200': {
        description: 'Array of Turno model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Turno)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Turno)) filter?: Filter<Turno>,
  ): Promise<Turno[]> {
    return this.turnoRepository.find(filter);
  }

  @patch('/turnos', {
    responses: {
      '200': {
        description: 'Turno PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Turno, {partial: true}),
        },
      },
    })
    turno: Turno,
    @param.query.object('where', getWhereSchemaFor(Turno)) where?: Where<Turno>,
  ): Promise<Count> {
    return this.turnoRepository.updateAll(turno, where);
  }

  @get('/turnos/{id}', {
    responses: {
      '200': {
        description: 'Turno model instance',
        content: {'application/json': {schema: getModelSchemaRef(Turno)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Turno> {
    return this.turnoRepository.findById(id);
  }

  @patch('/turnos/{id}', {
    responses: {
      '204': {
        description: 'Turno PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Turno, {partial: true}),
        },
      },
    })
    turno: Turno,
  ): Promise<void> {
    await this.turnoRepository.updateById(id, turno);
  }

  @put('/turnos/{id}', {
    responses: {
      '204': {
        description: 'Turno PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() turno: Turno,
  ): Promise<void> {
    await this.turnoRepository.replaceById(id, turno);
  }

  @del('/turnos/{id}', {
    responses: {
      '204': {
        description: 'Turno DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.turnoRepository.deleteById(id);
  }
}
