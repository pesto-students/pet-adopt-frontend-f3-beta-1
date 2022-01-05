import React from "react";
import Autocomplete from "react-google-autocomplete";

function SearchLocation({
  style,
  onPlaceSelected,
  types,
  componentRestrictions,
  required,
}) {
  return (
    <>
      <Autocomplete
        style={style}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        types={types}
        componentRestrictions={componentRestrictions}

      />
    </>
  );
}

export default SearchLocation;
