import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import cors from 'cors';

const app = express();
const apiKey = "AIzaSyBFwb4V-OJrWNoJmBob26E4JCsVjvSQiUE";
const genAI = new GoogleGenerativeAI(apiKey);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));  

async function generateContent(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error('Error generativo:', error);
    return 'Error al generar respuesta: ' + error.message;
  }
}

// Ruta para la generación de contenido
app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  const responseText = await generateContent(prompt);
  res.json({ response: responseText });
});

// Ruta para servir el HTML
app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
<html lang="en" class="h-100" data-bs-theme="auto">
<head>
  <script src="color-modes.js"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <title>Contacto</title>
  <link rel="icon" href="codigo.png" type="image/x-icon">
  <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/cover/">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
  <link href="./bootstrap.min.css" rel="stylesheet">
  <link href="./cover.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="https://Davidcrz14.github.io" style="font-size: 19px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 2 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
            </svg>
            Home
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="https://github.com/Davidcrz14">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        GitHub
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="https://davidcrz14.github.io/contacto.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                        </svg>
                        Contacto
                    </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://davidcrz14.github.io/hobbies.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-yin-yang" viewBox="0 0 16 16">
                      <path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0"/>
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 0 1 7-7c.933 0 1.818.189 2.621.528a3.833 3.833 0 0 0-3.12 3.754A3.833 3.833 0 0 0 8 12.833c.923 0 1.763-.318 2.421-.843C10.933 14.35 9.546 15 8 15a7 7 0 0 1-7-7m10.879 5.472a3.833 3.833 0 0 0-1.758-7.226A3.833 3.833 0 0 0 8 3.167c-.923 0-1.763.318-2.421.843A7.014 7.014 0 0 1 8 1a7 7 0 0 1 7 7 7 7 0 0 1-3.121 5.472"/>
                    </svg>
                    Hobbies
                  </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://davidcrz14.github.io/lenguajes.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                    <path d="M11.354 1.146a.5.5 0 1 0-.708.708L14.293 5.5 2 5.5a.5.5 0 0 0 0 1l12.293 0-3.647 3.646a.5.5 0 0 0 .708.708l4.5-4.5a.5.5 0 0 0 0-.708l-4.5-4.5z"/>
                    <path d="M4.646 8.646a.5.5 0 0 1 0 .708L.146 12.5a.5.5 0 0 1-.708-.708L3.293 8 .438 5.146a.5.5 0 0 1 .708-.708l4.5 4.5z"/>
                  </svg>
                  Lenguajes
                </a>
            </li>
            </ul>
            <ul class="navbar-nav d-flex flex-row ms-auto me-3">
                <li class="nav-item">
                    <a class="nav-link me-3 me-lg-0" href="https://Davidcrz14.github.io">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                        </svg>
                        Share
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="https://www.facebook.com/sharer/sharer.php?u=https://Davidcrz14.github.io" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="https://twitter.com/intent/tweet?url=https://Davidcrz14.github.io&text=Mira%20esta%20pagina" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>
                                Twitter
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <img src="../pop.gif" alt="asd" style="width: 60px;" class="rounded-circle img-fluid">
        </div>
    </div>
</nav>
<div class="container px-4 py-5" id="hanging-icons">
  <div class="mb-3">
    <label for="questionInput" class="form-label">Ingrese su pregunta:</label>
    <input type="text" class="form-control" id="questionInput">
  </div>
  <button class="btn btn-primary" id="sendButton">Enviar</button>
  <div class="mt-3">
    <label for="responseArea" class="form-label">Respuesta:</label>
    <textarea class="form-control" id="responseArea" rows="5" readonly></textarea>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
  document.getElementById('sendButton').addEventListener('click', async function() {
    const question = document.getElementById('questionInput').value;
    
    try {
      const response = await fetch('http://localhost:3000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: question })
      });

      const data = await response.json();
      document.getElementById('responseArea').value = data.response;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('responseArea').value = 'Error al generar';
    }
  });
</script>
</body>
</html>

  `);
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
