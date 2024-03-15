import React from "react";

const NotionLogin = () => {
  function initiateOAuth() {
    const oauthUrl =
      "https://api.notion.com/v1/oauth/authorize?owner=user&client_id=6960a6c0-5194-465e-b6b8-513652c9a977&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FEmployee&response_type=code";
    window.location.href = oauthUrl;
  }
  return (
    <div>
      <button onClick={initiateOAuth}>Logga in med Notion</button>
    </div>
  );
};

export default NotionLogin;
