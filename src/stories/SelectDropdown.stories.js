import SelectDropdownField from "./SelectDropdown";

export default {
  component: SelectDropdownField,
  title: "SelectDropdown",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Default = {
  args: {
    kopraUITagsTemp: [],
    kopraUIPlaceholder: "",
    options: [
      "Africa",
      "Australia",
      "Brazil",
      "Croatia",
      "Iran",
      "China",
      "United Kingdom",
      "United State of America",
      "Indonesia",
      "India",
    ],
    isDisabled: false,
    multiple: true,
    outline: true,
    withSearch: true,
    id: "sdd-1",
  },
};
