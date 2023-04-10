import request, {Response} from 'supertest';
import express, { Application } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';

let app:Application;
let server:http.Server;

beforeAll(async () => {
    app = express();
    const port: number = 5000;
    const options: cors.CorsOptions = {
        origin: ['http://localhost:3000']
    };
    app.use(cors(options));
    app.use(bp.json());
    app.use("/api", api)

    server = app.listen(port, ():void => {
        console.log('Restapi server for testing listening on '+ port);
    }).on("error",(error:Error)=>{
        console.error('Error occured: ' + error.message);
    });
});

afterAll(async () => {
    server.close() //close the server
})

describe('user ', () => {
    /**
     * Test that we can list users without any error.
     */
    it('can be listed',async () => {
        const response:Response = await request(app).get("/api/users/list");
        expect(response.statusCode).toBe(200);
    });

    /**
     * Tests that a user can be created through the productService without throwing any errors.
     */
    it('can be created correctly', async () => {
        let username:string = 'Pablo'
        let email:string = 'gonzalezgpablo@uniovi.es'
        const response:Response = await request(app).post('/api/users/add').send({name: username,email: email}).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });

    
    /**
     * Test that default web page shows correctly
     */
    it('principal page shows correctly',async () => {
        const response:Response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    /**
     * Test that init page works correctly
     */
    it('init page shows correctly',async () => {
        
    });

    /**
     * Test that start button works correctly
     */
    it('start button works correctly',async () => {
        
    });
    
    /**
     * Test that log in redirects correctly
     */
    it('can log in correctly', async ()=>{
        let username:string = 'Saulserra';
        let contraseña:string = 'Contraseña123';
        const response:Response = await request(app).get('/api/login');
        expect(response.statusCode).toBe(200);
    });

    /**
     * Test that sign up redirect correctly
     */
    it('can sign up correctly', async () => {

    });

    /**
     * Test that users can see documentation page
     */
    it('documentation shows correctly',async () => {
        
    });

    /**
     * Test that a user can see the map when he is loged in
     */
    it('map works correctly when log in',async () => {

    });

    /**
     * Test that a user can see his profile
     */
    it('can see profile when log in',async () => {
        
    });

    /**
     * Test that a user can see about page
     */
    it('can see about page',async () => {
        
    });

    /**
     * Test that a user can add a marker in the map
     */
    it('can add markers correctly', async () => {
        
    });
});