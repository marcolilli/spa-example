import { render, screen } from '@testing-library/react';
import Profile from './Profile';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';


describe('Profile', () => {
  it('renders Underage label when age is less than 18', () => {
    render(
      <Profile name="John" age={16} imageUrl="/test.jpg" />
    );
    expect(screen.queryByText('Underage')).toBeInTheDocument();
  });

  it('does not render Underage label when age is 18 or more', () => {
    render(
      <Profile name="Jane" age={18} imageUrl="/test.jpg" />
    );
    expect(screen.queryByText('Underage')).not.toBeInTheDocument();
  });
}); 