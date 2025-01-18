// Button Component
// This is a functional component that renders a button-like div element.
// It accepts two props: `value` (the text or content displayed inside the button)
// and `onClick` (the function to be called when the button is clicked).

export default function Button({ value, onClick, color, color2, color3 }) {
  return (
    // The main container of the button with a CSS class for styling.
    <div
      className="button-main"
      onClick={onClick}
      style={{ background: color, color: color2 && color2, "--color": color3 }}
    >
      {/* Render the value (content) of the button here */}
      {value}
    </div>
  );
}
