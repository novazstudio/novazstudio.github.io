document.getElementById('enlace-descarga').addEventListener('click', function() {
  // Cambia 'URL_DEL_ARCHIVO' por la URL real del archivo que deseas descargar
  var urlArchivo = 'https://ia600308.us.archive.org/9/items/nov-books-1.0/NovBooks_1.0.apk';
  
  // Crear un enlace temporal para descargar el archivo
  var enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = urlArchivo;
  enlaceDescarga.setAttribute('download', ''); // Dejar el atributo 'download' vacío
  
  // Simular un clic en el enlace temporal
  enlaceDescarga.click();
});
