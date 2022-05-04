import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor:'red'})
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
  expect(colorButton.textContent).toBe('Change to red');
  
});


test('initial conditions', ()=> {
  render(<App />)
  // check that the button starts out enabled
 
const colorButton = screen.getByRole("button", {name: 'Change to blue'});
expect(colorButton).toBeEnabled();
  // check that the chekbox starts out unchecked

  const checkedBox = screen.getByRole("checkbox");
  expect(checkedBox).not.toBeChecked();
})

test('Checkbox disables button on first click and enables on second click',()=> {
  render(<App />)
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
})


