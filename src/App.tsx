import React from 'react';
import PDF from 'react-pdf-js';

import resume from "./assets/CSE493_QUIZ 1 _ Quizizz.pdf"; 

function MyApp() {
  return (
    <div>
      <PDF file={resume} onDocumentComplete={numPages => console.log(numPages)} scale={1} page={1} />
    </div>
  );
}

export default MyApp;
