import app from "./app";

const port = process.env.APP_PORT;

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));
