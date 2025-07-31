# 🌱 Bright Path - Soluções em Energia Sustentável

![Bright Path Logo](https://img.shields.io/badge/Bright%20Path-Energia%20Sustent%C3%A1vel-green?style=for-the-badge)

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
