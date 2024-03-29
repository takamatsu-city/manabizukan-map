import React from "react";
import { FacebookShareButton, LineShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, LineIcon, TwitterIcon } from "react-share";

import './Share.scss'

const Content = () => {
  const url = window.location.href.replace(/\?.+$/, '').replace(/#.+$/, '')

  return (
    <div className="share">
      <ul>
        <li><a href="/"><TwitterShareButton url={url} hashtags={[``]} title={'たかまつ学び図鑑マップ'}><TwitterIcon size={32} round={true} /></TwitterShareButton></a></li>
        <li><a href="/"><FacebookShareButton url={url} hashtag={'#たかまつ学び図鑑マップ'}><FacebookIcon size={32} round={true} /></FacebookShareButton></a></li>
        <li><a href="/"><LineShareButton url={url} title={'たかまつ学び図鑑マップ'}><LineIcon size={32} round={true} /></LineShareButton></a></li>
      </ul>
    </div>
  );
};

export default Content;
