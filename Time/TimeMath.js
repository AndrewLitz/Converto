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

  // now compare the input and resultType value and add formula
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  if (option_from === "Seconds" && option_to === "Seconds") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 1";

  } else if (option_from === "Seconds" && option_to === "Minutes") {

    result.value = Number(input.value) / 60;
    document.getElementById("formula").innerHTML = "Time Value divided by 60";

  } else if (option_from === "Seconds" && option_to === "Hours") {

    result.value = Number(input.value) / 3600;
    document.getElementById("formula").innerHTML = "Time Value divided by 3600";

  } else if (option_from === "Seconds" && option_to === "Days") {

    result.value = Number(input.value) / 86400;
    document.getElementById("formula").innerHTML = "Time Value divided by 86400";

  } else if (option_from === "Seconds" && option_to === "Years") {

    result.value = Number(input.value) / 0.0000003154;
    document.getElementById("formula").innerHTML = "Time Value divided by 3.171e-8";
  }

// -------------------------------------------------------------------------------------------

if (option_from === "Minutes" && option_to === "Minutes") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 1";

  } else if (option_from === "Minutes" && option_to === "Seconds") {

    result.value = Number(input.value) * 60;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 60";

  } else if (option_from === "Minutes" && option_to === "Hours") {

    result.value = Number(input.value) / 60;
    document.getElementById("formula").innerHTML = "Time Value divided by 60";

  } else if (option_from === "Minutes" && option_to === "Days") {

    result.value = Number(input.value) / 1440;
    document.getElementById("formula").innerHTML = "Time Value divided by 1440";

  } else if (option_from === "Minutes" && option_to === "Years") {

    result.value = Number(input.value) / 525600;
    document.getElementById("formula").innerHTML = "Time Value divided by 525600";
  }

// -------------------------------------------------------------------------------------------

if (option_from === "Hours" && option_to === "Hours") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 13600";

  } else if (option_from === "Hours" && option_to === "Seconds") {

    result.value = Number(input.value) * 3600;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 3600";

  } else if (option_from === "Hours" && option_to === "Minutes") {

    result.value = Number(input.value) * 60;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 60";

  } else if (option_from === "Hours" && option_to === "Days") {

    result.value = Number(input.value) / 24;
    document.getElementById("formula").innerHTML = "Time Value divided by 24";

  } else if (option_from === "Hours" && option_to === "Years") {

    result.value = Number(input.value) / 8760;
    document.getElementById("formula").innerHTML = "Time Value divided by 8760";
  }

// -------------------------------------------------------------------------------------------

if (option_from === "Days" && option_to === "Days") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 1";

  } else if (option_from === "Days" && option_to === "Seconds") {

    result.value = Number(input.value) * 86400;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 86400";

  } else if (option_from === "Days" && option_to === "Minutes") {

    result.value = Number(input.value) * 1440;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 1440";

  } else if (option_from === "Days" && option_to === "Hours") {

    result.value = Number(input.value) * 24;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 24";

  } else if (option_from === "Days" && option_to === "Years") {

    result.value = Number(input.value) / 365;
    document.getElementById("formula").innerHTML = "Time Value divided by 365";
  }

// -------------------------------------------------------------------------------------------

if (option_from === "Years" && option_to === "Years") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 1";

  } else if (option_from === "Years" && option_to === "Seconds") {

    result.value = Number(input.value) * 31540000;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 31540000";

  } else if (option_from === "Years" && option_to === "Minutes") {

    result.value = Number(input.value) * 525600;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 525600";

  } else if (option_from === "Years" && option_to === "Hours") {

    result.value = Number(input.value) * 8760;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 8760";

  } else if (option_from === "Years" && option_to === "Days") {

    result.value = Number(input.value) * 365;
    document.getElementById("formula").innerHTML = "Time Value multiplied by 365";
  }

// -------------------------------------------------------------------------------------------
}