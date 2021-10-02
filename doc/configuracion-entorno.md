## Configuración del entorno 

El presente proyecto utilizará git y github como repositorio de fuentes colaborativo y abierto. Para ello se realizará un configuración previa del entorno para habilitar estas tecnologías y seguir buenas prácticas a la hora de utilizarlas. Se da por hecho que **se ha instalado git y se dispone de una cuenta en github**.   


### Creación de par de claves pública-privada :closed_lock_with_key:

#### Generación de claves

Para poder realizar operaciones via ssh necesitamos crear un par de claves pública y privada con las que poder operar con el repositorio de github remoto de forma segura y rápida. Para ello, comenzaremos creando este par de claves con el comando:   

```
ssh-keygen -t ed25519 -C "domin68914@gmail.com"
```

donde -t indica la firma, en este caso [ed25519](https://ed25519.cr.yp.to/index.html) y -C para añadir un comentario con nuestro correo.

![Generando par público - privado](./configuracion-entorno-img/generar-ssh-pair.png)

Esto genera un par de clave público - privada en ~/.ssh/

A continuación las añadimos al agente ssh. En primer lugar comprobamos que el agente está corriendo con:

```
eval "$(ssh-agent -s)"
```

![Comprobar que el agente está running](./configuracion-entorno-img/ssh-agent.png)

y posteriormente añadimos la clave privada al agente con 

```
ssh-add ~/.ssh/id_ed25519
```

![Añadir clave al agente](./configuracion-entorno-img/ssh-agent-add.png)


#### Subida de clave pública a github :key:

Existen diversas maneras de realizar esto, tanto de por línea de comandos como de forma gráfica. En este caso he decidido utilizar [gh](https://github.com/cli/cli) por ser algo distinto a como se suele hacer, además de ser muy sencillo. En primer lugar nos autenticamos a través del cli de github *gh*.

```
gh auth login
```
Al hacerlo y siguiendo los pasos que nos indica nos dará la opción de subir una clave pública ssh (autodetectada por el cli), con lo que ya habríamos subido la clave. Aun así, vamos a subirla de manera manual. Una vez autenticados con gh, podemos ejecutar:

```
gh ssh-key add ~/.ssh/id_ed25519.pub --title "Linux Mint MSI"
```

Como vemos, hemos subido nuestra clave pública al almacén de claves de github:

![Utilizando gh para subir clave ssh](./configuracion-entorno-img/gh-add-key-github.png)

### Configuración del nombre y correo electrónico en git

Para poder identificar nuestros *commits* debemos configurar git para tal propósito añadiendo nuestro nombre y correo electrónico a la configuración de este. Para ello,