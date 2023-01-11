import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Blog Title');
  const [subtitle, setSubtitle] = useState('Blog Subtitle');
  const [font, setFont] = useState('indie-flower');
  const [align, setAlign] = useState('center');
  const [text, setText] = useState('This is some blog text.');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} align={align} text={text} />
      <Editor
        title={title}
        subtitle={subtitle}
        font={font}
        align={align}
        text={text}
        setTitle={setTitle}
        setSubtitle={setSubtitle}
        setFont={setFont}
        setAlign={setAlign}
        setText={setText}
      />
    </main>
  );
}
