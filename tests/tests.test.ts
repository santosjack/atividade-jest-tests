import app from "index";
import supertest from "supertest";

const api = supertest(app);

describe('FRUITS TESTS',  () => {

    it('TESTANDO POST: /fruits', async () => {
      const result = await api.post('/fruits').send({name: "maçã", price: "7"});

      expect(result.status).toBe(201);

    });

    it('TESTANDO GET: /fruits', async () => {
      const result = await api.get('/fruits');

      expect(result.status).toBe(200);

      expect(result.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
		            price: expect.any(String),
            })
        ])
      );
    });

    it('TESTANDO GET: /fruits/id',async () => {
      const result = await api.get(`/fruits/${1}`);

      expect(result.status).toBe(200);

      expect(result.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
		            price: expect.any(String),
            })
      );
    });
  });