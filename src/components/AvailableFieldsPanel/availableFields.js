// All available fields' inital state in FormPanel

const availableFields = [
  {
    type: "input",
    label: "Input"
  },
  {
    type: "medias",
    label: "Medias"
  },
  {
    type: "select",
    label: "Select"
  },
  {
    type: "checkbox",
    label: "Checkbox"
  },
  {
    type: "block-editor",
    label: "Content"
  },
  {
    type: "wysiwyg",
    label: "Wysiwyg Editor"
  },
  {
    type: "date-picker",
    label: "Date"
  },
  {
    type: "files",
    label: "Files"
  },
  {
    type: "map",
    label: "Map"
  },
  {
    type: "color",
    label: "Color"
  },
  {
    type: "radios",
    label: "Radio"
  },
  {
    type: "fieldset",
    label: "Content",
    children: []
  },
  {
    type: "browser",
    label: "Browser"
  },
  {
    type: "repeater",
    label: "Repeater"
  }
];

export const getAvailableFields = () => availableFields;

export const getAvailableFieldByType = (type) => (
  availableFields.find((field) => field.type === type)
);