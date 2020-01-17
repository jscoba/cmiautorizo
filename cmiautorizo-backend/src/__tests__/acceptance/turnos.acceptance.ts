import {Client} from '@loopback/testlab';
import {CmiautorizoApplication} from '../..';
import {setupApplication} from './test-helper';

describe('TurnosController', () => {
  let app: CmiautorizoApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('rejects non valid lavadora for turno', async () => {
    await client
      .post('/turnos')
      .send({
        hab: 202,
        lavadora: 'algo',
        time: '2020-01-17T00:22:54.468Z',
        lavado: true,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .expect(/Lavadora no válida/);
  });
  it('can create a turno', async () => {
    await client
      .post('/turnos')
      .send({
        hab: 202,
        lavadora: 'miele1',
        time: '2020-01-17T00:22:54.468Z',
        lavado: true,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('can count how many turnos there are', async () => {
    await client.get('/turnos/count').expect(200);
  });
});
