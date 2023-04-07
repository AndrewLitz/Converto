var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var option_from, option_to;

// now add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
option_from = inputType.value;
option_to = resultType.value;
document.getElementById("formulaHeader").hidden = false;
document.getElementById("formula").innerHTML = myResult().result;

function myResult() {
  // when we change the input and output type vale we need to updata the
  // option_from and option_to

  option_from = inputType.value;
  option_to = resultType.value;


  if (option_from === "Fahrenheit" && option_to === "Fahrenheit") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Temperature Value multiplied by 1";

  } else if (option_from === "Fahrenheit" && option_to === "Celsius") {

    result.value = (Number(input.value) - 32) * 5/9;
    document.getElementById("formula").innerHTML = "(Temperature Value - 32) x 5/9";

  } else if (option_from === "Fahrenheit" && option_to === "Kelvin") {

    result.value = (Number(input.value) - 32) * 5/9 + 273.15;
    document.getElementById("formula").innerHTML = "(Temperature Value - 32) x 5/9 + 273.15";
  }

  // -----------------------------------------------------------------------------
  
  if (option_from === "Celsius" && option_to === "Celsius") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Temperature Value multiplied by 1";

  } else if (option_from === "Celsius" && option_to === "Fahrenheit") {

    result.value = (Number(input.value) * 9/5) + 32;
    document.getElementById("formula").innerHTML = "(Temperature Value x 9/5) + 32";

  } else if (option_from === "Celsius" && option_to === "Kelvin") {

    result.value = Number(input.value) + 273.15;
    document.getElementById("formula").innerHTML = "Temperature Value + 273.15";
  }

  // -----------------------------------------------------------------------------
  
  if (option_from === "Kelvin" && option_to === "Kelvin") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Temperature Value multiplied by 1";

  } else if (option_from === "Kelvin" && option_to === "Fahrenheit") {

    result.value = (Number(input.value) - 273.15) * 9/5 + 32;
    document.getElementById("formula").innerHTML = "(Temperature Value - 273.15) x 9/5 + 32";

  } else if (option_from === "Kelvin" && option_to === "Celsius") {

    result.value = Number(input.value) - 273.15;
    document.getElementById("formula").innerHTML = "Temperature Value - 273.15";
  }

  // -----------------------------------------------------------------------------
}
