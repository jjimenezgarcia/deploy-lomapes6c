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

Scenario: El usuario accede a la página de Solid
  Given Un acceso a la página de bienvenida de la app por un usuario
  When Tras hacer click en el icono de Solid
  Then El usuario es redirigido a la página de Solid

Scenario: El usuario accede a la página de documentación
  Given Un acceso a la app por un usuario
  When Tras hacer click en el botón Documentación
  Then El usuario es redirigido a la página de documentación

Scenario: El usuario añade un comentario
  Given Un acceso a la app por un usuario
  When Tras iniciar sesión
  Then El usuario selecciona una posición del mapa
  And Añade el comentario

Scenario: El usuario busca a un amigo
  Given Un acceso a la app por un usuario
  When Tras iniciar sesión
  Then El usuario hace click en el botón Amigos
  And Busca un amigo