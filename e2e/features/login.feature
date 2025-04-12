Feature: Login

  Scenario: Login exitoso
    Given estoy en la pantalla de login
    When ingreso el usuario "diego" y contraseña "1234"
    Then debo ser redirigido a la pantalla de inicio