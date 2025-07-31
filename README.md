# 🌱 Bright Path - Soluções em Energia Sustentável

## 📋 Descrição do Projeto

O **Bright Path** foi desenvolvido utilizando Vite + ReactJS com o principal objetivo de criar uma página interativa/informativa dedicada à promoção e educação sobre energia sustentável, com foco especial em energia solar, de um sistema de paineis solares que verifica a eficiência energética de duas placas solares (uma a leste e a outra a oeste) e a média da eficiência energética de cada uma delas, como também incentivar as pessoas a adotarem medidas de consumo de energia mais sustentáveis e renováveis!

### 🎯 Objetivos
- Promover o uso de energias renováveis
- Educar usuários sobre sustentabilidade energética
- Monitorar produção de energia solar em tempo real
- Calcular consumo energético doméstico
- Gamificar o aprendizado através de quiz interativo

## ✨ Funcionalidades Principais

### 🏠 Página Principal
- **Carousel Interativo**: Slideshow automático com navegação manual
  - Controles por setas laterais e indicadores
  - Links diretos para diferentes seções
  - Apresentação das principais funcionalidades

### 🌍 Monitoramento de Energia (Acesso Público)
- **6 Localidades em São Paulo**:
  - Vila Antonieta
  - Jardim Helena
  - Cidade Tiradentes
  - Itaim Paulista
  - Vila Formosa
  - São Mateus

- **Recursos por Localidade**:
  - Accordions expansíveis
  - Dados de armazenamento e produção em tempo real
  - Integração com ESP32 e sensores
  - Mapas interativos de cada bairro

### 👤 Sistema de Autenticação
- **Cadastro de Usuários**:
  - Avatar personalizável
  - Validação de email (obrigatório @)
  - Senha segura (8+ caracteres, maiúscula, minúscula, números)
  - Campos: Nome, Sobrenome, Usuário, Email, Senha

- **Login Seguro**: Acesso às funcionalidades exclusivas

### 🎮 Quiz Educativo (Logado)
- **15 perguntas aleatórias** de um banco de 25 questões
- Sistema de pontuação baseado na dificuldade
- Alternativas randomizadas
- Feedback de desempenho ao final
- Possibilidade de refazer quantas vezes desejar

### ⚡ Calculadora Energética (Logado)
- **Cálculo para 1-3 pessoas**
- **13 eletrodomésticos** configuráveis:
  - Quantidade
  - Tempo de uso diário
  - Potência média

- **Sistema de Alertas**:
  - 🟢 **< 280 kWh**: Consumo adequado
  - 🟡 **280-600 kWh**: Atenção ao consumo
  - 🔴 **> 600 kWh**: Urgente economizar energia

### 👥 Área do Usuário (Logado)
- Dashboard personalizado com boas-vindas
- Acesso rápido às 3 principais funcionalidades
- Gerenciamento de perfil completo

### ⚙️ Gerenciamento de Perfil
- **Edição de dados** em tempo real
- Interface intuitiva com ícones de edição
- Validação de dados atuais
- Atualização automática da interface
- Opção de logout seguro

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Vite** - Build tool e servidor de desenvolvimento
- **React.js** - Biblioteca para interfaces de usuário
- **JSX** - Extensão de sintaxe JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento para SPA
- **React Icons** - Biblioteca de ícones

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **CORS** - Middleware para requisições cross-origin
- **Dotenv** - Gerenciamento de variáveis de ambiente

### Dados e Mock
- **JSON Server** - API REST fake para desenvolvimento

### Hardware (Simulação IoT)
- **ESP32** - Microcontrolador para sensores
- **Sensores** - Simulação de dados de energia solar

## 🚀 Como Executar o Projeto

### Pré-requisitos
```bash
Node.js (versão 16+)
npm ou yarn
MongoDB
```

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/bright-path.git
cd bright-path
```

2. **Instale as dependências do Frontend**
```bash
cd frontend
npm install
```

3. **Instale as dependências do Backend**
```bash
cd ../backend
npm install
```

4. **Configure as variáveis de ambiente**
```bash
# No diretório backend, crie um arquivo .env
cp .env.example .env
# Configure as variáveis necessárias
```

5. **Inicie o MongoDB**
```bash
mongod
```

6. **Execute o Backend**
```bash
cd backend
npm start
```

7. **Execute o Frontend**
```bash
cd frontend
npm run dev
```

8. **Execute o JSON Server (se necessário)**
```bash
cd data
json-server --watch db.json --port 3001
```

## 📱 Navegação do Sistema

### Acesso Público
- ✅ Página Principal
- ✅ Sobre a Empresa
- ✅ Monitoramento de Energia (6 localidades)
- ✅ Cadastro de Usuário
- ✅ Login

### Acesso Logado
- ✅ Área do Usuário
- ✅ Quiz Educativo (15 perguntas)
- ✅ Calculadora Energética
- ✅ Gerenciamento de Perfil
- ✅ Todas as funcionalidades públicas

## 🎨 Design e UX

- **Design Responsivo** com Tailwind CSS
- **Interface Intuitiva** com navegação clara
- **Feedback Visual** para ações do usuário
- **Tema Sustentável** com cores verdes e naturais
- **Componentes Reutilizáveis** para consistência

## 🔒 Segurança

- Validação de dados no frontend e backend
- Senhas com critérios de segurança
- Autenticação de sessão
- Sanitização de inputs

## 📊 Métricas e Monitoramento

- Dados em tempo real via ESP32
- Dashboard de consumo energético
- Sistema de gamificação com pontuação
- Relatórios de uso sustentável

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é open source sob a **MIT License with Commons Clause**. Isso significa que você pode visualizar, modificar e compartilhar o código livremente, desde que não o utilize para fins comerciais.

Para mais detalhes, consulte o arquivo [LICENSE](./LICENSE).

## 👥 Equipe

| **Nome** | **RM**                 | **LinkedIn** |
|--------------------------------|------------------------|----------|
| Murilo Justi                   | RM 554512              | <a target="_blank" href="https://www.linkedin.com/in/murilo-justi-rodrigues-b336b22b7/"><img src="https://media.licdn.com/dms/image/v2/D4D03AQGnXBOl96aCtQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709252884484?e=1733961600&v=beta&t=_W2l37rEiTdk8HSG-GUrS4R_V6KddfAGj13CbkA_k0g" width="80"></a> |
| Renan Dias Utida               | RM 558540              | <a target="_blank" href="https://www.linkedin.com/in/renan-dias-utida-1b1228225/"><img src="https://github.com/user-attachments/assets/b4f96f4b-542e-4988-9bc1-b1acf22a41a1" width="80"></a> | 
| Leonardo Rocha Scarpitta       | RM 555460              | <a target="_blank" href="https://www.linkedin.com/in/leonardorscarpitta/"><img src="https://avatars.githubusercontent.com/u/161969345?s=400&u=f9bdb6fa659af646efcd0cb9fb51a321f19faabc&v=4" width="80"></a> |

---

### 🌟 "Com a Bright Path, cada raio de sol é uma oportunidade para transformar vidas."

**Desenvolvido com 💚 para um futuro mais sustentável**

## 📷 ScreenShots

### 🏠 Página Principal

Carousel Automático / Manual

![image](https://github.com/user-attachments/assets/3b27564e-84b5-40c5-9055-f0557dd4673d)

Cards Explorando nossas Soluções Sustentáveis

![image](https://github.com/user-attachments/assets/9fbe63a4-3efd-44ad-a9ac-a4998d5aed07)

Rodapé/Footer

![image](https://github.com/user-attachments/assets/a1cca089-9c3e-40c1-8086-096b537d855d)

---

### 🍔 Menu

Menu Hamburger

![image](https://github.com/user-attachments/assets/55483868-d163-43fc-87c6-d2d4c8fc2955)

---

### 💡 Página Geração Energia

Accordions com 6 bairros aleatórias em SP

![image](https://github.com/user-attachments/assets/9c7483fb-d148-4683-97c1-0947df334719)

Exibindo um bairro

![image](https://github.com/user-attachments/assets/df3ce71e-eb33-4406-ba1e-d22b02fb0255)

---

### 👥 Login e Criar Conta

Tela de Login

![image](https://github.com/user-attachments/assets/16e874d8-9e25-40e7-99f7-5943ce7000d2)

Tela para Criar conta

![image](https://github.com/user-attachments/assets/7f5597e4-91ca-43ef-903b-4c0c60bd3d15)

Exibe as sugestões de Avatares disponíveis

![image](https://github.com/user-attachments/assets/23563fd6-8e36-4aea-8bc7-968ee6a6a16b) 



---

### 🧩 Página Quiz

Lobby do Quiz

![image](https://github.com/user-attachments/assets/41b3b479-6d39-454f-aa9c-ddafcd6bf841)

Respondendo a uma das 15 perguntas do quiz

![image](https://github.com/user-attachments/assets/a531e0dd-e63b-453f-8d55-9486d02b353f)

Resultado final do quiz com quantidade de acertos e pontuação

![image](https://github.com/user-attachments/assets/8d251c86-62dc-4dec-8b66-a062bc986714)

---

### 💲 Página Cálculo Energético ⚡

Página de Cálculo de gasto energéticos de 1 a 3 pessoas, preenchendo a Quantidade usada, Tempo por Dia (cada) e Potência Média (cada) de cada um dos eletrodomésticos citados

![image](https://github.com/user-attachments/assets/a5f6da7a-7d37-4950-97b1-232bfd20e862)

Exibição do Resultado do Cálculo Energético gasto pelo usuário, com Status

![image](https://github.com/user-attachments/assets/70aa4343-fdc8-4c5e-a400-759f327e2daf)

---

### Perfil e Editar Conta

Exibição dos dados de cadastro do Usuário

![image](https://github.com/user-attachments/assets/fdd69094-3e00-4b27-9036-687f67cef577")

Alterando o Sobrenome do Usuário, informando o sobrenome atual e o novo sobrenome

![image](https://github.com/user-attachments/assets/500b6630-e705-4196-9fc3-c6f1f7b919f4)

Sobrenome alterado com sucesso!

![image](https://github.com/user-attachments/assets/fa8c1b64-c696-4cb9-aae1-cbb4abdbd1f7)




