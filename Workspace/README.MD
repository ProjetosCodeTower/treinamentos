# Configurando um Ambiente básico de desenvolvimento

## ferramentas básicas para desenvolvimento

- #### Linux
- #### Git
- #### Docker
- #### Editor de código

## Dando início
- ### Adquirindo linux
Basicamente não iremos ultilizar de dual boot, vamos usar uma ferramenta um pouco mais elegante iremos ultilizar o WSL
(*windows subsystem for linux*) o que essa ferramenta nos fornece é um sistema linux sem a necessidade de uma máquina virtual,
nós teremos um sistema Linux que compartilha dos mesmos recursos que o windows, isto é, o Linux será executado como um programa nativo
do Windows basicamente.

O tutorial que vai ser aqui descrito pode ser melhor detalhado pelo próprio site da Microsoft que trada do [WSL](https://learn.microsoft.com/pt-br/windows/wsl/install)


Abra o PowerShell do windows em modo de administrador execute o comando para instalar a base para wsl
~~~shell
wsl --install
~~~
Verifique se a versão do wsl instalada é a versão 2, ultilize o comando:
~~~shell
wsl -l -v
~~~

Caso não seja a versão 2, visite a [página oficial da Microsoft](https://learn.microsoft.com/pt-br/windows/wsl/install) 
e atualize para a versão 2.

Tendo a versão 2 instalada continuemos escolhendo alguma das versões disponiveis do Linux
- ### Escolhendo e adquirindo uma versão do linux
Para adquirir uma distribuição do linux basta ir á [loja oficial da Microsoft](https://aka.ms/wslstore) e escolher uma 
da sua preferência. (*para usuários iniciantes recomendo usar a distro do ubuntu por ser a mais usada e de mais fácil manuseio*)
![](https://learn.microsoft.com/en-us/windows/wsl/media/store.png)
### ou escolha dentres uma dsa distros abaixo:
- [Ubuntu 22.04 LTS](https://www.microsoft.com/store/apps/9PN20MSR04DW)
- [OpenSUSE Leap 15.1](https://www.microsoft.com/store/apps/9NJFZK00FGKV)
- [Kali Linux](https://www.microsoft.com/store/apps/9PKR34TNCV07)
- [Debian](https://www.microsoft.com/store/apps/9MSVKQC78PK6)
- [Fedora](https://www.microsoft.com/store/apps/9n6gdm4k2hnc)
- [Alpine](https://www.microsoft.com/store/apps/9p804crf0395)

Assim que instalado basta abrir o app da sua distribuição, ou executar o comando WSL no seu terminal.
No primeiro acesso será pedido a você que insira um usuário e uma senha, e após isso voce terá um sistema linux em sua máquina,
com todos os comandos do sistema e podendo executar todos os programas por CLI.

Uma dia que achamos válida e instalar o app [Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=pt-br&gl=br)
 ele nos fornece um rapido acesso a todos os terminais em nossa máquina de forma rápida e personalizável.
![]("./terminal.png")