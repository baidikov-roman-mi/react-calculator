function Button({title, setClass, onClick}) {
  return (
    <div className={setClass} onClick={onClick}>
      {title}
    </div>
  );
}

export default Button;
