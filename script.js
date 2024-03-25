document.getElementById('enlace-descarga').addEventListener('click', function() {
  // Cambia 'URL_DEL_ARCHIVO' por la URL real del archivo que deseas descargar
  var urlArchivo = 'https://ia600206.us.archive.org/30/items/nov-books/NovBooks.apk';
  
  // Crear un enlace temporal para descargar el archivo
  var enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = urlArchivo;
  enlaceDescarga.setAttribute('download', ''); // Dejar el atributo 'download' vacío
  
  // Simular un clic en el enlace temporal
  enlaceDescarga.click();
});