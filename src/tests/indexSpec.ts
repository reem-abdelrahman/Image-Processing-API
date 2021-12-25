import sharp from 'sharp';
import imageProcess from '../utilities/imageProcess';
import supertest from 'supertest';
import app from '../index'
import retreiveImage from '../routes/api/retreiveImage';
import routes from '../routes';
const request = supertest(app);
describe('test the endpoints', ()=> {
    it('', async() => {
        
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    
    })
    
})
describe('test endpoint', ()=> {
    it('', async() => {
        const name = 'fjord'
        const response = await request.get('/api/resizedImage/?image=fjord&height=200&width=150');
        expect(response.status).toBe(200);
        
    })
})

/*
describe("Image Processing tests", ()=>{
    it('expects an error with the wrong input file', async ()=> {
        const name = 'idontexist'
        const resize = await imageProcess(name, 200, 300);
        expect(resize).toThrow(Error);
    });
}) */