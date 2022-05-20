import { fireEvent, render } from '@testing-library/react';
import Input from 'pages/Input';

describe('test input component', () => {
  test('render input', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toHaveClass('flex-col positipn-r');
  });

  test('should support value placeholder type style props', () => {
    const { getByTestId } = render(
      <Input
        value="12345"
        style={{ width: '100px' }}
        onChange={() => {}}
        placeholder="Please input qq number"
        type="text"
      />
    );
    const inputElement = getByTestId('input');
    expect(inputElement).toHaveDisplayValue('12345');
    expect(inputElement).toHaveStyle({ width: '100px' });
    expect(inputElement).toHaveAttribute('placeholder', 'Please input qq number');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('should render error when pass a errorText', () => {
    const { getByTestId } = render(<Input errorText="error" value="12345" onChange={() => {}} />);
    const errorElement = getByTestId('error');
    expect(errorElement).toBeInTheDocument();
  });

  test('calls the onChange callback handler', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input value="" onChange={onChange} />);
    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, {
      target: { value: '22334455' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should show clear icon when pass a onclear function', () => {
    const onClear = jest.fn();
    const { getByTestId } = render(<Input value="12345" onChange={() => {}} onClear={onClear} />);
    const clearIconElement = getByTestId('clearIcon');

    fireEvent.click(clearIconElement);

    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
