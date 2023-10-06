import CheckboxInput from "/src/components/form/CheckboxInput";
import { capitalizeFirstLetter } from "/src/utils/utilityFunctions";
import Rating from "/src/components/ui/Rating";

import ColorFilterSelector from "../components/ColorFilterSelector";
import useFilter from "./useFilter";
import Container from "../components/Container";
import OptionText from "../components/OptionText";

function DefaultFilter({ filter }) {
  const { urlParams, handleChange } = useFilter(filter);

  const renderChildren = (option) => {
    switch (filter.name) {
      case "rating":
        return <Rating nrOfStars={option} />;
      case "color":
        return <ColorFilterSelector color={option} />;
      default:
        return (
          <OptionText>
            {capitalizeFirstLetter(option)}
            {filter.name === "discount" && "%"}
          </OptionText>
        );
    }
  };

  const renderFilter = (option) => {
    return (
      <CheckboxInput
        key={option}
        dataValue={option}
        color={filter.color}
        withCheck={filter.name !== "color"}
        isChecked={urlParams?.includes(`${option}`) || false}
        onChange={handleChange}
      >
        {renderChildren(option)}
      </CheckboxInput>
    );
  };

  return (
    <Container filterName={filter.name}>
      {filter.options.map(renderFilter)}
    </Container>
  );
}

export default DefaultFilter;
