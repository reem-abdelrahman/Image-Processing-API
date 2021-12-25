import imageProcess from '../utilities/imageProcess';
import supertest from 'supertest';
import app from '../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('test the endpoints /api', () => {
  it('test /api', async (): Promise<void> => {
    const response: supertest.Response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  it('test api/image.jpg', async (): Promise<void> => {
    const response: supertest.Response = await request.get('/api/fjord.jpg');
    expect(response.status).toBe(200);
  });
});
describe('test endpoint resizedImage', (): void => {
  it('test /api/resizedImage', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/resizedImage/?image=fjord&height=200&width=150'
    );
    expect(response.status).toBe(200);
  });
});

describe('Image Processing tests', () => {
  it('expects the return value to be true', async () => {
    const name = 'fjord';
    const resize = await imageProcess(name, 200, 200);
    expect(resize).toBe(true);
  });
});
