function Button(button) {
  return (
    <div className={button.class}>
      {button.title}
    </div>
  );
}

export default Button;
