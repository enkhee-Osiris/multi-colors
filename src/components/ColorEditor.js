import {useState, useEffect, useCallback} from 'react';
import tinycolor from 'tinycolor2';

function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}

function ColorEditor({onColors}) {
  const [content, setContent] = useState('');
  const [hightlightContent, setHightlightContent] = useState([]);

  const handleInputKeyDown = useCallback(event => {}, []);

  const handleInputChange = useCallback(event => {
    setContent(event.target.value);
  }, []);

  useEffect(() => {
    const lines = content.split('\n');
    const colors = [];
    const hightlightContents = [];

    lines.forEach(line => {
      const color = tinycolor(line);
      let content = [line];
      if (color.isValid()) {
        colors.push(color);
        content = line
          .split(new RegExp(`(${escapeRegExp(color.getMatch())})`, 'g'))
          .reduce((acc, word) => {
            acc.push(word === color.getMatch() ? color : word);

            return acc;
          }, []);
      }

      content.push('\n');
      hightlightContents.push(content);
    });

    onColors(colors);
    setHightlightContent(hightlightContents);
  }, [content]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="color-editor">
      <textarea
        className="color-input"
        spellCheck={false}
        value={content}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <pre className="color-syntax">
        <code>
          {hightlightContent.map(lines =>
            lines.map(word => {
              if (word instanceof tinycolor) {
                return (
                  <span
                    style={{
                      backgroundColor: word.toRgbString(),
                      color: word.isDark() ? '#fff' : '#000',
                    }}>
                    {word.getMatch()}
                  </span>
                );
              }

              return word;
            }),
          )}
        </code>
      </pre>
    </div>
  );
}

export default ColorEditor;
