import { expect } from 'chai';
import express from 'express';
import supertest from 'supertest';
import { App } from '../src/app';

let app: express.Application;
let appInstance: App;

beforeAll(async () => {
  appInstance = new App();
  app = appInstance.app;
});

describe('Test GET /health Api', () => {
  it('It should return status as up', async () => {
    const response = await supertest(app).get('/api/v1/health');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('{"status":"up"}');
  });
});
