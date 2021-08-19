import { useState, useEffect } from 'rect';

const useForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
};
