const Button = ({
  children,
  onClick,
  className = '',
  disabled = false,
  variant,
  ...props
}) => {
  const classes = [
    'btn',
    variant === 'danger' && 'btn--danger',
    variant === 'icon' && 'btn--icon',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
