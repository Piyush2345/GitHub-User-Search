import React from "react";

const History = ({ history }) => {
  return (
    <div className="my-4">
      <h2>Search History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Profile Link</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td>{item.login}</td>
              <td>
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
