function handleClick(value) {
  switch (value) {
    case "ce":
      document.getElementById("display").innerText = "";
      break;
    case "←":
      document.getElementById("display").innerText = document
        .getElementById("display")
        .innerText.slice(
          0,
          document.getElementById("display").innerText.length - 1
        );
      break;
    case "=":
      console.log(document.getElementById("display").innerText);

      if (document.getElementById("display").innerText.length === 0) {
        return;
      }

      document.getElementById("display").innerText = eval(
        document.getElementById("display").innerText
      );
      break;

    default:
      document.getElementById("display").innerText =
        document.getElementById("display").innerText + value;
      break;
  }
}
