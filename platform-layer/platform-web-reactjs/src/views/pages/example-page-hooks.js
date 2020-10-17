import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '#views/styles/example-style'

export default function ExamplePage() {
  const [example_state, exampleSetFunction] = useState([
    'Default Value 1',
    'Default Value 2'
  ]);

  // Adds a new value in the component's "example_state" state
  const handleExample = useCallback(() => {
    exampleSetFunction([...example_state, 'New Value 1']);
  }, [example_state]);

  // Perform action once when the component is rendered
  userEffect(() => {
    const storageExample = localStorage.getItem('example');

    if (storageExample) {
      exampleSetFunction(JSON.parse(storageExample));
    }
  }, [])

  // Perform an action whenever the "example_state" state changes 
  useEffect(() => {
    localStorage.setItem('example', JSON.stringify(example_state));
  }, [example_state])

  // Returns a value assigned to a variable as soon as a state changes
  const exampleValue = useMemo(() => example_state.length, [example_state]);

  // Render the component on screen
  return (
    <Container>
      <h1>Hello World!</h1>
      <ul>
        {example_state.map(exState => <li key={exState}>{exState}</li>)}
      </ul>
      <span>Your state have {exampleValue} information</span>
      <button type="button" onClick={handleExample}>Change State Component</button>
    </Container>
  )
}