import {Entity, model, property} from '@loopback/repository';

@model()
export class Turno extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  hab: number;

  @property({
    type: 'string',
    required: true,
  })
  lavadora: string;

  @property({
    type: 'date',
    required: true,
  })
  time: string;

  @property({
    type: 'boolean',
    default: False,
  })
  lavado?: boolean;


  constructor(data?: Partial<Turno>) {
    super(data);
  }
}

export interface TurnoRelations {
  // describe navigational properties here
}

export type TurnoWithRelations = Turno & TurnoRelations;
