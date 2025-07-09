import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';


describe('Button', () => {
  it('calls onClickHandler with "hello!!" when clicked', () => {
    const mockHandler = vi.fn();

    render(
      <Button label="Click Me" onClickHandler={mockHandler} />
    );
    
    const button = screen.getByRole('button', {name: "CLICK ME"});
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledWith('hello!!');
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
}); 