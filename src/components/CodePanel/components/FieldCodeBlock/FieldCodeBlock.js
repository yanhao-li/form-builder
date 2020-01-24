export const getCodeByFormFields = (formFields) => 
formFields.map(
  (formField) => getCodeByFormField(formField)
).join('');

export const getCodeByFormField = (formField) => {
  switch (formField.type) {
    case "input":
      return `@formField('input', [
        'name' => 'subtitle',
        'label' => ${formField.label},
        'maxlength' => 100,
        'required' => true,
        'note' => 'Hint message goes here',
        'placeholder' => 'Placeholder goes here',
    ])
    `
    case "fieldset":
      return `@section('fieldsets')
  <a17-fieldset title=${formField.label}>
    ${getCodeByFormFields(formField.children)}
  </a17-fieldset>
@stop

`
    default:
      return "default";
  }
}