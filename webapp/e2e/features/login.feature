Feature: Inicio de sesión

  Background: 
    Given el usuario se encuentra en la página de inicio de sesión

  Scenario: El usuario introduce correctamente sus credenciales
    When el usuario hace click sobre el botón LOGIN y es redirigido a la página de Inrupt
    Then el usuario introduce su usuario y contraseña correctamente e inicia sesión
    And el usuario puede visualizar su perfil en la app
