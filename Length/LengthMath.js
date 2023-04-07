
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
  // MILLIMETERS -- MILLIMETERS -- MILLIMETERS -- MILLIMETERS -- MILLIMETERS

  if (option_from === "Millimeter" && option_to === "Millimeter") {
    // Millimeter to Millimeter
    result.value = input.value;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1";
    // document.getElementById("formulaHeader").hidden = false;

  } else if (option_from === "Millimeter" && option_to === "Centimeter") {
    // Millimeter to Centimeter
    result.value = Number(input.value) / 10;
    document.getElementById("formula").innerHTML = "Length Value divided by 10";

  } else if (option_from === "Millimeter" && option_to === "Inch") {
    // Millimeter to Inch
    result.value = Number(input.value) / 25.4;
    document.getElementById("formula").innerHTML = "Length Value divided by 25.4";

  } else if (option_from === "Millimeter" && option_to === "Foot") {
    // Millimeter to Foot
    result.value = Number(input.value) / 305;
    document.getElementById("formula").innerHTML = "Length Value divided by 305";

  } else if (option_from === "Millimeter" && option_to === "Yard") {
    // Millimeter to Yard
    result.value = Number(input.value) / 914;
    document.getElementById("formula").innerHTML = "Length Value divided by 914";

  } else if (option_from === "Millimeter" && option_to === "Meter") {
    // Millimeter to Meter
    result.value = Number(input.value) / 1000;
    document.getElementById("formula").innerHTML = "Length Value divided by 1,000";

  } else if (option_from === "Millimeter" && option_to === "Kilometer") {
    // Millimeter to Kilometer
    result.value = Number(input.value) / 1000000;
    document.getElementById("formula").innerHTML = "Length Value divided by 1,000,000";

  } else if (option_from === "Millimeter" && option_to === "Mile") {
    // Millimeter to Mile
    result.value = Number(input.value) / 1609000;
    document.getElementById("formula").innerHTML = "Length Value divided by 1,609,000";

  }
  

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // CENTIMETERS -- CENTIMETERS -- CENTIMETERS -- CENTIMETERS -- CENTIMETERS 

  if (option_from === "Centimeter" && option_to === "Millimeter") {

    result.value = Number(input.value) * 25.4;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 10";

  } else if (option_from === "Centimeter" && option_to === "Centimeter") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1";

  } else if (option_from === "Centimeter" && option_to === "Inch") {
   
    result.value = Number(input.value) / 2.54;
    document.getElementById("formula").innerHTML = "Length Value divided by 2.54";

  } else if (option_from === "Centimeter" && option_to === "Foot") {
 
    result.value = Number(input.value) / 30.48;
    document.getElementById("formula").innerHTML = "Length Value divided by 30.48";

  } else if (option_from === "Centimeter" && option_to === "Yard") {

    result.value = Number(input.value) / 91.44;
    document.getElementById("formula").innerHTML = "Length Value divided by 91.44";

  } else if (option_from === "Centimeter" && option_to === "Meter") {

    result.value = Number(input.value) / 100;
    document.getElementById("formula").innerHTML = "Length Value divided by 100";

  } else if (option_from === "Centimeter" && option_to === "Kilometer") {

    result.value = Number(input.value) / 100000;
    document.getElementById("formula").innerHTML = "Length Value divided by 100,000";

  } else if (option_from === "Centimeter" && option_to === "Mile") {

    result.value = Number(input.value) / 160934;
    document.getElementById("formula").innerHTML = "Length Value divided by 160,934";

  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // INCHES INCHES INCHES INCHES INCHES INCHES INCHES INCHES INCHES INCHES INCHES 

  if (option_from === "Inch" && option_to === "Millimeter") {

    result.value = Number(input.value) * 25.4;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 25.4";

  } else if (option_from === "Inch" && option_to === "Centimeter") {

    result.value = Number(input.value) * 2.54;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 2.54";

  } else if (option_from === "Inch" && option_to === "Inch") {
    result.value = input.value;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1";

  } else if (option_from === "Inch" && option_to === "Foot") {

    result.value = Number(input.value) / 12;
    document.getElementById("formula").innerHTML = "Length Value divided by 12";

  } else if (option_from === "Inch" && option_to === "Yard") {

    result.value = Number(input.value) / 36;
    document.getElementById("formula").innerHTML = "Length Value divided by 36";

  } else if (option_from === "Inch" && option_to === "Meter") {

    result.value = Number(input.value) / 39.37;
    document.getElementById("formula").innerHTML = "Length Value divided by 39.37";

  } else if (option_from === "Inch" && option_to === "Kilometer") {

    result.value = Number(input.value) / 39370;
    document.getElementById("formula").innerHTML = "Length Value divided by 39,370";

  } else if (option_from === "Inch" && option_to === "Mile") {

    result.value = Number(input.value) / 63360;
    document.getElementById("formula").innerHTML = "Length Value divided by 63,360";

  }

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // FEET  FEET  FEET  FEET  FEET  FEET  FEET  FEET  FEET  FEET  FEET  FEET  FEET  

  if (option_from === "Foot" && option_to === "Millimeter") {

    result.value = Number(input.value) * 305;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 305";

  } else if (option_from === "Foot" && option_to === "Centimeter") {

    result.value = Number(input.value) * 30.48;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 30.48";

  } else if (option_from === "Foot" && option_to === "Inch") {
    result.value = Number(input.value) * 12;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 12";

  } else if (option_from === "Foot" && option_to === "Foot") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1";

  } else if (option_from === "Foot" && option_to === "Yard") {

    result.value = Number(input.value) / 3;
    document.getElementById("formula").innerHTML = "Length Value divided by 3";

  } else if (option_from === "Foot" && option_to === "Meter") {

    result.value = Number(input.value) / 3.281;
    document.getElementById("formula").innerHTML = "Length Value divided by 3.281";

  } else if (option_from === "Foot" && option_to === "Kilometer") {

    result.value = Number(input.value) / 3281;
    document.getElementById("formula").innerHTML = "Length Value divided by 3281";

  } else if (option_from === "Foot" && option_to === "Mile") {

    result.value = Number(input.value) / 5280;
    document.getElementById("formula").innerHTML = "Length Value divided by 5,280";

  }
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // YARDS YARDS YARDS YARDS YARDS YARDS YARDS YARDS YARDS YARDS YARDS YARDS YARDS 

  if (option_from === "Yard" && option_to === "Millimeter") {

    result.value = Number(input.value) * 914;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 914";

  } else if (option_from === "Yard" && option_to === "Centimeter") {

    result.value = Number(input.value) * 91.44;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 91.44";

  } else if (option_from === "Yard" && option_to === "Inch") {
    result.value = Number(input.value) * 36;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 36";

  } else if (option_from === "Yard" && option_to === "Foot") {

    result.value = Number(input.value) * 3;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 3";

  } else if (option_from === "Yard" && option_to === "Yard") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1";

  } else if (option_from === "Yard" && option_to === "Meter") {

    result.value = Number(input.value) / 1.094;
    document.getElementById("formula").innerHTML = "Length Value divided by 1.094";

  } else if (option_from === "Yard" && option_to === "Kilometer") {

    result.value = Number(input.value) / 1094;
    document.getElementById("formula").innerHTML = "Length Value divided by 1,094";

  } else if (option_from === "Yard" && option_to === "Mile") {

    result.value = Number(input.value) / 1760;
    document.getElementById("formula").innerHTML = "Length Value divided by 1,760";

  }

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // METERS METERS METERS METERS METERS METERS METERS METERS METERS METERS METERS 

  if (option_from === "Meter" && option_to === "Millimeter") {

    result.value = Number(input.value) * 1000;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1000";

  } else if (option_from === "Meter" && option_to === "Centimeter") {

    result.value = Number(input.value) * 100;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 100";

  } else if (option_from === "Meter" && option_to === "Inch") {
    result.value = Number(input.value) * 39.37;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 39.37";

  } else if (option_from === "Meter" && option_to === "Foot") {

    result.value = Number(input.value) * 3.281;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 3.281";

  } else if (option_from === "Meter" && option_to === "Yard") {

    result.value = Number(input.value) * 1.094;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1.094";

  } else if (option_from === "Meter" && option_to === "Meter") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1";

  } else if (option_from === "Meter" && option_to === "Kilometer") {

    result.value = Number(input.value) / 1000;
    document.getElementById("formula").innerHTML = "Length Value divided by 1,000";

  } else if (option_from === "Meter" && option_to === "Mile") {

    result.value = Number(input.value) / 1609;
    document.getElementById("formula").innerHTML = "Length Value divided by 1,609";

  }


    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // KILOMETERS  KILOMETERS  KILOMETERS  KILOMETERS  KILOMETERS  KILOMETERS  KILOMETERS 

  if (option_from === "Kilometer" && option_to === "Millimeter") {

    result.value = Number(input.value) * 1000000;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1,000,000";

  } else if (option_from === "Kilometer" && option_to === "Centimeter") {

    result.value = Number(input.value) * 100000;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 100,000";

  } else if (option_from === "Kilometer" && option_to === "Inch") {
    result.value = Number(input.value) * 39370;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 39,370";

  } else if (option_from === "Kilometer" && option_to === "Foot") {

    result.value = Number(input.value) * 3281;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 3,281";

  } else if (option_from === "Kilometer" && option_to === "Yard") {

    result.value = Number(input.value) * 1094;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1,094";

  } else if (option_from === "Kilometer" && option_to === "Meter") {

    result.value = Number(input.value) * 1000;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1,000";

  } else if (option_from === "Kilometer" && option_to === "Kilometer") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1";

  } else if (option_from === "Kilometer" && option_to === "Mile") {

    result.value = Number(input.value) / 1.609;
    document.getElementById("formula").innerHTML = "Length Value divided by 1.609";

  }

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // MILES MILES MILES MILES MILES MILES MILES MILES MILES MILES MILES MILES MILES MILES 

  if (option_from === "Mile" && option_to === "Millimeter") {

    result.value = Number(input.value) * 1609000;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1,609,000";

  } else if (option_from === "Mile" && option_to === "Centimeter") {

    result.value = Number(input.value) * 160934;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 160,934";

  } else if (option_from === "Mile" && option_to === "Inch") {
    result.value = Number(input.value) * 63360;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 63,360";

  } else if (option_from === "Mile" && option_to === "Foot") {

    result.value = Number(input.value) * 5280;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 5,280";

  } else if (option_from === "Mile" && option_to === "Yard") {

    result.value = Number(input.value) * 1760;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1,760";

  } else if (option_from === "Mile" && option_to === "Meter") {

    result.value = Number(input.value) * 1609;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1,609";

  } else if (option_from === "Mile" && option_to === "Kilometer") {

    result.value = Number(input.value) * 1.609;
    document.getElementById("formula").innerHTML = "Length Value multiplied by 1.609";

  } else if (option_from === "Mile" && option_to === "Mile") {

    result.value = input.value;
    document.getElementById("formula").innerHTML = "Length Value divided by 1.609";

  }



}
