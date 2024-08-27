const express = require('express');
const app = express();
const port = 3000;

// datos de usuarios (readme)
const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

// filtrar usuarios por especialidad
function filterUsers(specialty) {
  return usersData.filter(user => user.specialty === specialty);
}

// rutas
const specialties = ['marketing', 'developers', 'QAs', 'ventas'];

app.get('/', (req, res) => {
  res.send(`
    <h1>Esto es la página principal</h1>
    <a href="${specialties[0]}">Marketing</a>
    <a href="${specialties[1]}">Developers</a>
    <a href="${specialties[2]}">QAs</a>
    <a href="${specialties[3]}">Ventas</a>
    <a href="/Contacto">Contacto</a>`);
});

specialties.forEach(specialty => {
  app.get(`/${specialty}`, (req, res) => {
    const users = filterUsers(specialty);
    let html = `<h1>Usuarios de ${specialty}</h1><h3>Total de usuarios: ${users.length}</h3><ul>`;
    users.forEach(user => {
      html += `<li>${user.name}, ${user.age} años</li>`;
    });
    html += `</ul><a href="/">Home</a>`;
    res.send(html);
  });
});

// error 404
app.use((req, res) => {
  res.status(404).send('<h1>Page not found</h1><a href="/">Home</a>');
});

// iniciar servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
