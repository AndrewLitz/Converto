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

  if (option_from === "Grams" && option_to === "Grams") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 1";

  } else if (option_from === "Grams" && option_to === "Ounces") {

    result.value = Number(input.value) / 28.35;
    document.getElementById("formula").innerHTML = "Weight Value divided by 28.35";

  } else if (option_from === "Grams" && option_to === "Pounds") {

    result.value = Number(input.value) / 454;
    document.getElementById("formula").innerHTML = "Weight Value divided by 454";
  }
    else if (option_from === "Grams" && option_to === "Kilograms ") {

    result.value = Number(input.value) / 1000;
    document.getElementById("formula").innerHTML = "Weight Value divided by 1000";
  }
    else if (option_from === "Grams" && option_to === "Tons") {

    result.value = Number(input.value) / 907185;
    document.getElementById("formula").innerHTML = "Weight Value divided by 907185";
  }

  // -----------------------------------------------------------------------------------------

  if (option_from === "Ounces" && option_to === "Ounces") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 1";

  } else if (option_from === "Ounces" && option_to === "Grams") {

    result.value = Number(input.value) * 28.35;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 28.35";

  } else if (option_from === "Ounces" && option_to === "Pounds") {

    result.value = Number(input.value) / 16;
    document.getElementById("formula").innerHTML = "Weight Value divided by 16";
  }
    else if (option_from === "Ounces" && option_to === "Kilograms ") {

    result.value = Number(input.value) / 35.274;
    document.getElementById("formula").innerHTML = "Weight Value divided by 35.274";
  }
    else if (option_from === "Ounces" && option_to === "Tons") {

    result.value = Number(input.value) / 32000;
    document.getElementById("formula").innerHTML = "Weight Value divided by 32000";
  }

  // -----------------------------------------------------------------------------------------

  if (option_from === "Pounds" && option_to === "Pounds") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 1";

  } else if (option_from === "Pounds" && option_to === "Grams") {

    result.value = Number(input.value) * 454;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 454";

  } else if (option_from === "Pounds" && option_to === "Ounces") {

    result.value = Number(input.value) * 16;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 16";
  }
    else if (option_from === "Pounds" && option_to === "Kilograms") {

    result.value = Number(input.value) / 2.205;
    document.getElementById("formula").innerHTML = "Weight Value divided by 2.205";
  }
    else if (option_from === "Pounds" && option_to === "Tons") {

    result.value = Number(input.value) / 2000;
    document.getElementById("formula").innerHTML = "Weight Value divided by 2000";
  }

  // -----------------------------------------------------------------------------------------

  if (option_from === "Kilograms" && option_to === "Kilograms") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 1";

  } else if (option_from === "Kilograms" && option_to === "Ounces") {

    result.value = Number(input.value) * 35.274;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 35.274";

  } else if (option_from === "Kilograms" && option_to === "Grams") {

    result.value = Number(input.value) * 1000;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 1000";
  }
    else if (option_from === "Kilograms" && option_to === "Pounds") {

    result.value = Number(input.value) * 2.205;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 2.205";
  }
    else if (option_from === "Kilograms" && option_to === "Tons") {

    result.value = Number(input.value) / 907;
    document.getElementById("formula").innerHTML = "Weight Value divided by 907";
  }

  // -----------------------------------------------------------------------------------------

  if (option_from === "Tons" && option_to === "Tons") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 1";

  } else if (option_from === "Tons" && option_to === "Grams") {

    result.value = Number(input.value) * 907185;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 907185";

  } else if (option_from === "Tons" && option_to === "Ounces") {

    result.value = Number(input.value) * 32000;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 32000";
  }
    else if (option_from === "Tons" && option_to === "Kilograms ") {

    result.value = Number(input.value) * 907;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 907";
  }
    else if (option_from === "Tons" && option_to === "Pounds") {

    result.value = Number(input.value) * 2000;
    document.getElementById("formula").innerHTML = "Weight Value multiplied by 2000";
  }

  // -----------------------------------------------------------------------------------------
  

}