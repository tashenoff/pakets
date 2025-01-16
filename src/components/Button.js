// src/components/Button.js
const Button = ({ label, onClick, variant = "accent", size = "md", disabled = false }) => {
    const baseClasses = "btn focus:outline-none transition-all duration-200";
  
    const variantClasses = {
      primary: "btn-blue",
      secondary: "btn-secondary",
      accent: "btn-accent",
      ghost: "btn-ghost",
      link: "btn-link",
      success: "btn-success text-white",
      warning: "btn-warning",
      error: "btn-error",
      
    };
  
    const sizeClasses = {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    };
  
    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  