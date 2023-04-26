import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer, {Page, Browser} from "puppeteer";

const feature = loadFeature('./features/login.feature');

let page: Page;
let browser: Browser;

defineFeature(feature, (test) => {

    beforeAll(async () => {
        browser = process.env.GITHUB_ACTIONS
          ? await puppeteer.launch()
          : await puppeteer.launch({
            headless: false, // false si se quiere ver la ejecución de la prueba
            slowMo: 10 });
        page = await browser.newPage();
    
        await page.goto("http://localhost:3000", {
            waitUntil: "networkidle0"
          }).catch(() => {});
      });

    test('El usuario introduce correctamente sus credenciales', ({given, when, then, and}) => {
        let username: string;
        let password: string;

        given('el usuario se encuentra en la página de inicio de sesión', async () => {
            await expect(page).toClick('a', { text: 'Profile' });
        });

        when('el usuario hace click sobre el botón LOGIN y es redirigido a la página de Inrupt', async () => {
            await expect(page).toClick('button', { text: 'Login' });            
        });

        then('el usuario introduce su usuario y contraseña correctamente e inicia sesión', async () => {
            username = 'ejemplo123'; // email = ejemplo123@ejemplo.com
            password = '123Ejemplo!';
            await page.type('input', username);
            await page.type('input', password);
            await page.click('button');
        });

        and('el usuario es redirigido a su perfil en la app', async () => {
            await expect(page.url()).toMatch('http://localhost:3000/user');
        });
    });

    test('El usuario introduce incorrectamente sus credenciales', ({ given, when, then, and }) => {

        given('El usuario se encuentra en la página de inicio de sesión', async () => {
            page = await browser.newPage();
            await page.goto("http://localhost:3000/user");
        });

        when('el usuario hace click sobre el botón LOGIN y es redirigido a la página de Inrupt', async () => {
            await expect(page).toClick('button', { text: 'Login' });
        });

        then('el usuario introduce su usuario y contraseña incorrectamente', async () => {
            await page.type('input', "");
            await page.type('input', '123Ejemplo!');
            await page.click('button');
        });

        and('el usuario visualiza un mensaje de error', async () => {
            const errorMessage = await page.$eval('strong', (el) => el.textContent);
            expect(errorMessage).toMatch('Username required');
        });
    });

    afterAll(async () => {
        await browser.close();
    });
});
