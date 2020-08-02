import { useState } from 'react';

function useForm(categoria) {
  const [values, setValues] = useState(categoria);
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(change) {
    setValue(
      change.target.getAttribute('name'),
      change.target.value,
    );
  }

  function clearForm() {
    setValues(categoria);
  }
  return {
    handleChange,
    values,
    clearForm,
  };
}
export default useForm;
