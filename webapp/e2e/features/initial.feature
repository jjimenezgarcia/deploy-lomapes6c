# DSL de Gherkin con los escenarios de prueba

Feature: Acceso inicial a la aplicación

Scenario: El usuario accede a la página de bienvenida
  Given Un acceso a la app por un usuario
  When Tras hacer click en el botón Inicio
  Then El usuario es redirigido a la página de bienvenida

Scenario: El usuario accede a la página sobre nosotros
  Given Un acceso a la app por un usuario
  When Tras hacer click en el botón Sobre Nosotros
  Then El usuario es redirigido a la página sobre nosotros

Scenario: El usuario accede a la página de inicio de sesión desde Comenzar
  Given Un acceso a la página de bienvenida de la app por un usuario
  When Tras hacer click en el botón Comenzar
  Then El usuario es redirigido a la página de inicio de sesión

Scenario: El usuario accede a la página de inicio de sesión
  Given Un acceso a la app por un usuario
  When Tras hacer click en el botón Profile
  Then El usuario es redirigido a la página de inicio de sesión
