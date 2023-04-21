import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';



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
  * Test that link to start page works correctly
  */
  test('init page shows correctly', () =>{
    render(<App />);
    userEvent.click(screen.getByRole("link", {name:'Inicio'}));
    const welcome = screen.getByText('Bienvenido a LoMap');
    expect(welcome).toBeInTheDocument();
    expect(screen.getByRole("link", {name:"Comenzar"})).toBeInTheDocument();
  });
  
  /**
   * Test that default page link for documentation link works correctly
   */
  test('documentation link works correctly', () => {
    render(<App />);
    userEvent.click(screen.getByRole("link",{name:"Documentación"}));
  
    //Mirar como se puede comprobar que se esta en una direccion URL
    expect(screen.getByText('LOMAP ES6C')).toBeInTheDocument();
  });
  
  /**
   * Test that default page link for about option redirects correctly
   */
  test('abour option works correctly', () => {
    render(<App />);
    userEvent.click(screen.getByRole("link",{name:"Sobre Nosotros"}));
  
    const title = 'Sobre Nosotros - LoMap_ES6C';
    expect(title).toBeInTheDocument();
  });
  
  /**
   * Test that default page link for profile redirects correctly
   */
  test('profile link redirects correctly', () => {
    render(<App />);
    userEvent.click(screen.getByRole("link", { name: "Profile" }));
  
    const image = screen.getByRole("img", {name:"Logo"});
    const title = screen.getByRole("heading", {name: "Log in"});
    const button = screen.getByRole("button", {name: "LOGIN"});
    const id_prov = screen.getByRole("textbox", {name: "Identity Provider"});
  
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(id_prov).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
  
  /**
  * Test that start button in start page works correctly
  * Test too that u can click in LOGIN button and go to inrupt log in
  */
  test('start page start-button works correctly', () => {
    render(<App />);
    userEvent.click(screen.getByRole("link",{name: "Inicio"}));
  
    const start_button =  screen.getByRole("link",{name: "Comenzar"});
    userEvent.click(start_button);
  
    const login = screen.getByText('Log in');
    expect(login).toBeInTheDocument();
  
    const login_button = screen.getByRole("button",{ name: "login" });
    userEvent.click(login_button);
    //Completar: comprobar la url
  });
  
  /**
   * Test that NavBar shows correctly
   */
  test('navbar shows correctly', () => {
    render(<App />);
    userEvent.click(screen.getByRole("link", { name : "Inicio"}));
    
    const title = screen.getByRole("heading",{name: "LoMap"});
    const init = screen.getByRole("link", {name:"Inicio"});
    const documentation = screen.getByRole("link", {name:"Documentación"});
    const about = screen.getByRole("link", {name:"Sobre Nosotros"});
    const profile = screen.getByRole("link", {name:"Profile"});
  
    expect(title).toBeInTheDocument();
    expect(init).toBeInTheDocument();
    expect(documentation).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
  
    const logo = screen.getByRole("img",{name: "Logo"});
    expect(logo).toBeInTheDocument();
  });
  
  /**
  * Test that navbar link for documentation works correctly
  */
  test('navbar link to documentation works correctyl', () => {
    render(<App />);
    userEvent.click(screen.getByRole("link", { name : "Inicio"}));
  
    const documentation = screen.getByRole("link",{name: "Documentación"});
    userEvent.click(documentation);
  
    const heading = screen.getByRole("heading", {name: "arc42 LOMAP ES6C"});
    expect(heading).toBeInTheDocument();
  });
  
  /**
  * Test that a navbar link for about works correctly
  */
  test('navbar link to abour works correctly', () => {
    render(<App />);
    userEvent.click(screen.getByRole("link", { name : "Inicio"}));
  
    const about = screen.getByRole("link",{name: "Sobre Nosotros"});
    userEvent.click(about);
  
    const heading = screen.getByRole("heading", {name: "Sobre Nosotros - LoMap_ES6C"});
    expect(heading).toBeInTheDocument();
  });
  
  /**
  * Test that a navbar link for profile works correctly
  */
  test('navbar link to profile works correctly', () => {
    render(<App />);
    userEvent.click(screen.getByRole("link", { name : "Inicio"}));
  
    const profile = screen.getByRole("link", { name: "Profile" } );
    userEvent.click(profile);
  
    const image = screen.getByRole("img", {name:"Logo"});
    const title = screen.getByRole("heading", {name: "Log in"});
    const button = screen.getByRole("button", {name: "LOGIN"});
    const id_prov = screen.getByRole("textbox", {name: "Identity Provider"});
  
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(id_prov).toBeInTheDocument();
  });
  
  /**
   * Test that user can see the map when is logged in
   */
  
  /**
  * Test that a user can add a marker in the map
  */