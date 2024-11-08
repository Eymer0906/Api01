const express = require('express');
const app = express();

// Datos guardados en memoria
let empleados = [
  { id: 1, nombre: 'Carlos', apellido: 'García', email: 'carlos@empresa.com', area: 'Recursos Humanos', puesto: 'Gerente' },
  { id: 2, nombre: 'Ana', apellido: 'Pérez', email: 'ana@empresa.com', area: 'Recursos Humanos', puesto: 'Asistente' },
  { id: 3, nombre: 'Jorge', apellido: 'Martínez', email: 'jorge@empresa.com', area: 'IT', puesto: 'Desarrollador' },
  { id: 4, nombre: 'María', apellido: 'López', email: 'maria@empresa.com', area: 'Marketing', puesto: 'Especialista' }
];

// Ruta para obtener todos los empleados
app.get('/empleados', (req, res) => {
  res.json(empleados);
});

// Ruta para obtener empleados por área
app.get('/empleados/area/:area', (req, res) => {
  const area = req.params.area;
  const empleadosFiltrados = empleados.filter(emp => emp.area.toLowerCase() === area.toLowerCase());

  if (empleadosFiltrados.length === 0) {
    return res.status(404).json({ message: 'No se encontraron empleados en esta área' });
  }

  res.json(empleadosFiltrados);
});

// Ruta para obtener un empleado por ID
app.get('/empleado/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const empleado = empleados.find(emp => emp.id === id);

  if (!empleado) {
    return res.status(404).json({ message: 'Empleado no encontrado' });
  }

  res.json(empleado);
});

//  servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
