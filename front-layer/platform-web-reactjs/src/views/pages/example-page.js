import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '#styles/example-style.js';

import { actionRequest } from '#behaviors/example-agregador/example-actions.js';

export default function ExamplePage() {
  const [stateExample, setStateFunction] = useState([
    'Default Value 1',
    'Default Value 2',
  ]);

  // Captures the state value of another component. Access information through 'valueState.field'
  const stateAnotherComponent = useSelector(
    (state) => state.component.valueState,
  );

  const dispatch = useDispatch();

  // Adds a new value in the component's "stateExample" state
  const handleExample = useCallback(() => {
    setStateFunction([...stateExample, 'New Value 1']);

    // Fires an action in Redux
    dispatch(actionRequest(stateAnotherComponent));
  }, [stateExample]);

  // Perform action once when the component is rendered
  useEffect(() => {
    const storageExample = localStorage.getItem('example');

    if (storageExample) {
      setStateFunction(JSON.parse(storageExample));
    }
  }, []);

  // Perform an action whenever the "stateExample" state changes
  useEffect(() => {
    localStorage.setItem('example', JSON.stringify(stateExample));
  }, [stateExample]);

  // Returns a value assigned to a variable as soon as a state changes
  const exampleValue = useMemo(() => stateExample.length, [stateExample]);

  // Render the component on screen
  return (
    <Container>
      <h1>Hello World!</h1>
      <ul>
        {stateExample.map((exState) => (
          <li key={exState}>{exState}</li>
        ))}
      </ul>
      <span>Your state have {exampleValue} information</span>
      <button type="button" onClick={handleExample}>
        Change State Component
      </button>
    </Container>
  );
}
