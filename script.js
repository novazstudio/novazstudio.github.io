document.getElementById('enlace-descarga').addEventListener('click', function() {
  // Cambia 'URL_DEL_ARCHIVO' por la URL real del archivo que deseas descargar
  var urlArchivo = 'https://www.mediafire.com/file/4c74stt1uzr32vp/NovBooks.apk/file';
  var nombreArchivo = 'NovBooks'; // Puedes cambiar 'nombre_del_archivo' por el nombre que quieras para el archivo
  
  // Crear una solicitud para obtener el archivo
  var solicitud = new XMLHttpRequest();
  solicitud.open('GET', urlArchivo, true);
  solicitud.responseType = 'blob'; // El tipo de respuesta es un blob (archivo binario)
  
  // Cuando la solicitud esté completa
  solicitud.onload = function() {
    if (solicitud.status === 200) {
      // Crear un enlace temporal para descargar el archivo
      var enlaceDescarga = document.createElement('a');
      enlaceDescarga.href = window.URL.createObjectURL(solicitud.response);
      enlaceDescarga.setAttribute('download', nombreArchivo);
      
      // Simular un clic en el enlace temporal
      enlaceDescarga.click();
    }
  };
  
  // Enviar la solicitud
  solicitud.send();
});
