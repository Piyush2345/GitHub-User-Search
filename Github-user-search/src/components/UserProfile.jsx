import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="my-4">
      <h2>{user.login}</h2>
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="img-fluid rounded-circle mb-3"
      />
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repositories: {user.public_repos}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default UserProfile;
