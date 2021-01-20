# Code Challenge: Factorialize

Devuelve el factorial del entero proporcionado.

Si el número entero se representa con la letra **n**, un factorial es el producto de todos los números enteros positivos menores o iguales a **n**.

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos


## Ejecutar Pruebas
Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: num
- **tipo**: Number (Integer)
- **limitaciones**: 0 < **num** <= 10

## Salida

- **Tipo**: Number (Integer)

## Ejemplo
**5** debe retornar **120** porque: 1\*2\*3\*4\*5 = 120

## Tests

### Test 1
- **Parametros**: num = 5  
- **Resultado esperado**: 120
---
### Test 2
- **Parametros**:  num = 10  
- **Resultado esperado**: 3628800
---
### Test 3
- **Parametros**: num = 1  
- **Resultado esperado**: 1
---
### Test 4
- **Parametros**: num = 3  
- **Resultado esperado**: 6
---
### Test 5
- **Parametros**: num = 7  
- **Resultado esperado**: 5040
