import React from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [messages, setMessages] = React.useState({});
  const [filePaths, setFilePaths] = React.useState({});

  return (
    <div className="container">
      {[
        [1, 2],
        [3, 4],
      ].map((idx) => (
        <div className="row" key={idx}>
          {idx.map((sNo) => (
            <div className="app-box" key={sNo}>
              <div className="input-block">
                <input
                  id="greet-input"
                  onChange={(e) => {
                    setFilePaths({
                      ...filePaths,
                      [sNo]: e.currentTarget.value,
                    });
                    // setFilePaths((prev) => ({
                    //   ...prev,
                    //   [sNo]: e.currentTarget.value,
                    // }));
                  }}
                  placeholder="pathname to node app"
                />
                <button
                  onClick={async () => {
                    const msg = await invoke("execute_node_app", {
                      // file_path: `/home/user/Downloads/Coding/Node/Multiple/Server1/index.js`,
                      filePath: filePaths[sNo],
                    });

                    setMessages({
                      ...messages,
                      [sNo]: messages[sNo] + "\n" + msg,
                    });
                  }}
                >
                  Run
                </button>
              </div>
              <textarea disabled={true} value={messages[sNo]} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
