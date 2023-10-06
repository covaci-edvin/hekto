import CheckboxInput from "/src/components/form/CheckboxInput";

import usePriceFilter from "./usePriceFilter";
import OptionText from "../components/OptionText";
import Container from "../components/Container";

function PriceFilter({ filter }) {
  const { currValue, handleChange } = usePriceFilter();

  function formatPriceText(option) {
    return `$${option[0].toFixed(2)}
    ${option[1] === "MAX" ? " +" : ` - $${option[1].toFixed(2)}`}`;
  }

  const renderFilter = (option, index) => {
    return (
      <CheckboxInput
        key={index}
        dataValue={option}
        color={filter.color}
        withCheck
        isChecked={currValue === option.join()}
        onChange={handleChange}
      >
        <OptionText>{formatPriceText(option)}</OptionText>
      </CheckboxInput>
    );
  };

  return (
    <Container filterName={filter.name}>
      {filter.options.map(renderFilter)}
    </Container>
  );
}

export default PriceFilter;
