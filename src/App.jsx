import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jsonText, setJsonText] = useState("");
  const [result, setResult] = useState(null);

  const formatJson = async () => {

    if (!jsonText.trim()) {
      setResult({
        valid: false,
        errorMessage: "EMPTY_INPUT"
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/json/format",
        {
          jsonText,
        }
      );

      setResult(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const clearAll = () => {
    setJsonText("");
    setResult(null);
  };

  const copyOutput = () => {
    if (result?.formattedJson) {
      navigator.clipboard.writeText(result.formattedJson);
      alert("Copied!");
    }
  };

  return (
    <div className="container">

      <h1>JSON Formatter & Validator</h1>

      <p className="subtitle">
        Format and validate JSON instantly
      </p>

      <div className="editor-section">

        <div className="card">
          <h3>Input JSON</h3>

          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            placeholder='{"name":"Harshita"}'
          />
        </div>

        <div className="card">
          <h3>Formatted Output</h3>

          {!result ? (
            <p className="placeholder">
              Formatted JSON will appear here...
            </p>
          ) : result.valid ? (

            <pre>{result.formattedJson}</pre>

          ) : result.errorMessage === "EMPTY_INPUT" ? (

            <div className="error-box">
              <h4>⚠️ No JSON Entered</h4>

              <p>
                Please enter JSON data to format and validate.
              </p>
            </div>

          ) : (

            <div className="error-box">
              <h4>❌ Invalid JSON</h4>

              <p>
                Please check your JSON syntax. Make sure all
                brackets, quotes and commas are properly placed.
              </p>
            </div>

          )}
        </div>

      </div>

      <div className="buttons">

        <button onClick={formatJson}>
          Format JSON
        </button>

        <button onClick={copyOutput}>
          Copy
        </button>

        <button onClick={clearAll}>
          Clear
        </button>

      </div>

      <div className="stats">
        Characters: {jsonText.length}
      </div>

      <footer>

        <h3>Harshita Sultanpure</h3>

        <p>harshitasultan30304@gmail.com</p>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
        >
          Built for Digital Heroes
        </a>

      </footer>

    </div>
  );
}

export default App;