import React from 'react';

const getImgUrl = (imgName) => chrome.runtime.getURL(`images/${imgName}`); // eslint-disable-line no-undef
const getRandomInt = (max) => Math.floor(Math.random() * max);

const App = () => {
  const [count, setCount] = React.useState(0);
  const [imageUrl, setImageUrl] = React.useState(getImgUrl('cat0.jpg'));

  const handleImageClick = () => {
    const image =
      (count + 1) % 50 === 0 ? `rabbit${getRandomInt(3)}.jpg` : `cat${(count + 1) % 6}.jpg`;
    setImageUrl(getImgUrl(image));
    setCount(count + 1);
  };

  return (
    <div id="ext-main-container">
      <div className="ext-title">Have a nice day!</div>
      <img id="ext-img" src={imageUrl} alt="Lucky Cat" width={'90%'} onClick={handleImageClick} />
      <div className="ext-content">
        You clicked <span className="ext-bold">{count}</span> times
      </div>
    </div>
  );
};

export default App;
