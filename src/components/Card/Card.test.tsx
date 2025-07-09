import { render, screen } from '@testing-library/react';
import Card from './Card';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import styles from './Card.module.css';

describe('Card', () => {
  it('renders child text', () => {
    const childText = 'Hello, Card!';
    
    const {container} = render(
      <Card>{childText}</Card>
    );

    const card = container.firstChild;

    expect(screen.queryByText(childText)).toBeInTheDocument();
    expect(card).not.toHaveClass(styles.skeleton);

  });

  it('renders skeleton variant', () => {
    const {container} = render(
        <Card skeleton>Card with skeleton</Card>
    );

    const card = container.firstChild;

    expect(card).toHaveClass(styles.skeleton);
  });
});
