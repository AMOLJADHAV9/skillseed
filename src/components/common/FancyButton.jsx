import React from 'react';

/**
 * FancyButton Component
 * Keyhole cut-out tech action button with hover line animations.
 *
 * @param {string|React.ReactNode} children - Button label/content
 * @param {string} href - Optional URL link. If provided, renders an <a> tag.
 * @param {function} onClick - Click handler
 * @param {string} variant - 'default' | 'purple' | 'dark' | 'emerald'
 * @param {boolean} disabled - Disable button state
 * @param {string} className - Additional CSS classes
 * @param {string} keyBgColor - Background color of parent container to match cutout gaps (default '#ffffff')
 */
export const FancyButton = ({
  children = 'Buy Tickets',
  href,
  onClick,
  variant = 'default',
  disabled = false,
  className = '',
  keyBgColor,
  type = 'button',
  ...props
}) => {
  const variantClass =
    variant === 'purple'
      ? 'fancy-btn--purple'
      : variant === 'dark'
      ? 'fancy-btn--dark'
      : variant === 'emerald'
      ? 'fancy-btn--emerald'
      : '';

  const Component = href ? 'a' : 'button';

  const customStyle = keyBgColor
    ? { '--fancy-key-bg': keyBgColor }
    : {};

  return (
    <Component
      className={`fancy-btn ${variantClass} ${className}`}
      href={href}
      onClick={onClick}
      disabled={disabled}
      type={href ? undefined : type}
      style={customStyle}
      {...props}
    >
      <span className="top-key" />
      <span className="fancy-text">{children}</span>
      <span className="bottom-key-1" />
      <span className="bottom-key-2" />
    </Component>
  );
};

export default FancyButton;
