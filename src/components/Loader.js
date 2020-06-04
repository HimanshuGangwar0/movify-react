import React from 'react';

function Loader() {
  return (
      <div className="ui container" style={{ height: "60vh" }}>
        <div className="ui active inverted dimmer">
          <div className="ui intermediate text loader" >Loading movies...</div>
        </div>
      </div>
  );
}

export default Loader;

