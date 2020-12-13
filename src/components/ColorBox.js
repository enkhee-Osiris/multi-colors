function ColorBox({colors}) {
  return (
    <div className="color-box">
      {colors.map((color, i) => (
        <div
          className="color"
          style={{
            backgroundColor: color.toRgbString(),
            marginBottom: i < colors.length - 1 ? `${3.5 / colors.length}rem` : 0,
          }}>
          <span>{color.toRgbString()}</span>
        </div>
      ))}
    </div>
  );
}

export default ColorBox;
