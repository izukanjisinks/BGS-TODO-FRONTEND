import { useState } from 'react';

import FormInput from './form-components/form-input';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../redux/todos/todoThunks';

const AddTodo = ({ handleAddTodo }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    completed: false,
    user_id: user.user.id
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value
    }));

    // Clear error on change
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!todo.title.trim()) newErrors.title = 'Title is required.';
    if (!todo.description.trim()) newErrors.description = 'Description is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(createTodo(todo));
    dispatch(handleAddTodo);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <FormInput
            label="TITLE"
            name="title"
            handleChange={handleChange}
            value={todo.title}
          />
          {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
        </div>

        <div>
          <FormInput
            label="DESCRIPTION"
            name="description"
            handleChange={handleChange}
            value={todo.description}
          />
          {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
        </div>

        <button className="button" type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default AddTodo;
