function formatPesos(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0 // No mostrar decimales para los pesos
  }).format(value)
}

export { formatPesos }
