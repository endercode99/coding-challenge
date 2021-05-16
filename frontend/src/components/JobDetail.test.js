import { render } from '@testing-library/react';
import JobDetail from './JobDetail';

  test('checkJobDetailButton', ()=> {
    const { getByText } = render(<JobDetail id={1} />);
    const button = getByText("Show");
    expect(button).toBeTruthy()
});