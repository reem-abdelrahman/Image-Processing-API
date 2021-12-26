import imageProcess from '../utilities/imageProcess';
import supertest from 'supertest';
import app from '../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('test the endpoints ', () => {
  it('test /api', async (done): Promise<void> => {
    const response: supertest.Response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });
  it('test api/image.jpg', async (done): Promise<void> => {
    const response: supertest.Response = await request.get('/api/fjord.jpg');
    expect(response.status).toBe(200);
    done();
  });
  it('test /api/resizedImage', async (done): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/resizedImage/?image=fjord&height=200&width=150'
    );
    expect(response.status).toBe(200);
    done();
  });
});

describe('Image Processing test', () => {
  it('expects the return value to be true', async () => {
    const name = 'fjord';
    const resize = await imageProcess(name, 200, 200);
    expect(resize).toBe(true);
  });
});
