import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); 
});

/**
 * Test that default web page shows correctly
 */
test('aplication starts in correct page', () =>{
  render(<App />);
  const init = screen.getByText('Inicio');
  const documentation = screen.getByText('Documentación');
  const about = screen.getByText('Sobre Nosotros');
  const profile = screen.getByText('Profile');
  expect(init).toBeInTheDocument();
  expect(documentation).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(profile).toBeInTheDocument();
});

/**
* Test that start page works correctly
*/
test('init page shows correctly', () =>{
  render(<App />);
  userEvent.click(screen.getByText('Inicio'));
  const welcome = screen.getByText('Bienvenido a LoMap');
  expect(welcome).toBeInTheDocument();
  expect(screen.getByText('Comenzar')).toBeInTheDocument();
});

/**
 * Test that documentation link works correctly
 */
test('documentation link works correctly', () => {
  render(<App />);
  userEvent.click(screen.getByText('Documentación'));

  //Mirar como se puede comprobar que se esta en una direccion URL
  expect(screen.getByText('LOMAP ES6C')).toBeInTheDocument();
});

/**
 * Test that about option redirects correctly
 */
test('abour option works correctly', () => {
  render(<App />);
  userEvent.click(screen.getByText('Sobre Nosotros'));

  const title = 'Sobre Nosotros - LoMap_ES6C';
  expect(title).toBeInTheDocument();
});

/**
 * Test that profile redirects correctly
 */
test('profile link redirects correctly', () => {
  render(<App />);
  userEvent.click(screen.getByText('Profile'));

  const perfil  = screen.getByText('Log in');
  expect(perfil).toBeInTheDocument();
});

/**
 * Test that NavBar shows correctly
 */
test('navbar shows correctly', () => {
  render(<App />);
  userEvent.click(screen.getByText('Inicio'));
  
  const title = screen.getByText('LoMap');
  const init = screen.getByText('Inicio')
  const documentation = screen.getByText('Documentación')
  const about = screen.getByText('Sobre Nosotros')
  const profile = screen.getByText('Profile')

  expect(title).toBeInTheDocument();
  expect(init).toBeInTheDocument();
  expect(documentation).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(profile).toBeInTheDocument();

  const logo = screen.getByAltText('Logo');
  expect(logo).toBeInTheDocument();
});

/**
* Test that start button in start page works correctly
*/
test('start page start-button works correctly', () => {
  render(<App />);
  userEvent.click(screen.getByText('Inicio'));

  const start_button =  screen.getByText('Comenzar');
  userEvent.click(start_button);

  const login = screen.getByText('Log in');
  expect(login).toBeInTheDocument();
});


/**
* Test that log in redirects correctly
*/


/**
* Test that sign up redirect correctly
*/


/**
* Test that users can see documentation page
*/

/**
* Test that a user can see the map when he is loged in
*/

/**
* Test that a user can see his profile
*/

/**
* Test that a user can see about page
*/

/**
* Test that a user can add a marker in the map
*/
