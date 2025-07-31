# Front End - Bright Path

## Descrição do projeto
Esse projeto foi desenvolvido utilizando Vite + ReactJS com o principal objetivo de criar uma página interativa/informativa com as informações do [IoT](https://github.com/Bright-Path-Team/bp-edge), de um sistema de paineis solares que verifica a eficiência energética de duas placas solares (uma a leste e a outra a oeste) e a média da eficiência energética de cada uma delas, como também incentivar as pessoas a adotarem medidas de consumo de energia mais sustentáveis e renováveis!

## Tecnologias Utilizadas
- ReactJS (JavaScript);
- MongoDB (Back End);
- NodeJS;
- Express;
- CORS
- Dotenv;

## Manual de inicialização (Desenvolvimento)
> [!NOTE]
> Tenha o NodeJS instalado em sua máquina.
1. Clone o projeto em sua máquina: `git clone git@github.com:Bright-Path-Team/bp-front.git`;
2. Navegue até o projeto: `cd bp-front`;
3. Realize a instalação das dependências do projeto: `npm install`;
4. Configure as variáveis ambientes em um arquivo `.env` da seguinte forma (sem aspas, mesmo sendo do tipo string):
    ```
    REACT_APP_IP=
    REACT_APP_COLLECTION=
    ```
5. Rode o servidor com o listener do mongo_db: `node server_mongodb`;
6. Inicialize o ambiente de desenvolvimento da página web: `npm run dev`;

## Desenvolvedores do projeto:

| **Nome** | **RM**                 | **LinkedIn** |
|--------------------------------|------------------------|----------|
| Murilo Justi                   | RM 554512              | <a target="_blank" href="https://www.linkedin.com/in/murilo-justi-rodrigues-b336b22b7/"><img src="https://media.licdn.com/dms/image/v2/D4D03AQGnXBOl96aCtQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709252884484?e=1733961600&v=beta&t=_W2l37rEiTdk8HSG-GUrS4R_V6KddfAGj13CbkA_k0g" width="80"></a> |
| Renan Dias Utida               | RM 558540              | <a target="_blank" href="https://www.linkedin.com/in/renan-dias-utida-1b1228225/"><img src="https://github.com/user-attachments/assets/b4f96f4b-542e-4988-9bc1-b1acf22a41a1" width="80"></a> | 
| Leonardo Rocha Scarpitta       | RM 555460              | <a target="_blank" href="https://www.linkedin.com/in/leonardorscarpitta/"><img src="https://avatars.githubusercontent.com/u/161969345?s=400&u=f9bdb6fa659af646efcd0cb9fb51a321f19faabc&v=4" width="80"></a> |

## Licença

Este projeto é open source sob a **MIT License with Commons Clause**. Isso significa que você pode visualizar, modificar e compartilhar o código livremente, desde que não o utilize para fins comerciais.

Para mais detalhes, consulte o arquivo [LICENSE](./LICENSE).
