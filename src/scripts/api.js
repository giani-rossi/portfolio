const url = "http://localhost:3000/formulario";

$("#buttonForm").click(function () {
  let name = $("#name").val();
  let message = $("#message").val();
  const data = {
    nombre: "name",
    mensaje: "message",
  };

  $.post(
    url,
    {
      nombre: name,
      message: message,
    },
    function (data, status) {
      if (status === "success") {
        $("#beforeSend").append("Se esta enviando tu info");
      }
    }
    //}
  );
  /*function clearField() {
    $("#name").val("");
    $("#message").val("");
  }
  clearField();*/
});
