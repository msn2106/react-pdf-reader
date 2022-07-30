import './App.css';
import PdfViewer from './PdfViewer';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   debugger;
  //   const url = 'http://localhost:3000  ';
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('fileName', file.name);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     },
  //   };
  //   axios.post(url, formData, config).then((response) => {
  //     console.log(response.data);
  //   });

  // }

  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}> */}
        <h1>React File Upload</h1>
        <input type="file" accept="application/pdf" onChange={handleChange}/>
        {/* <button type="submit">Upload</button>
      </form> */}
      {
        (file) && <PdfViewer pdf={file}/>
      }
    </div>
  );
}

export default App;