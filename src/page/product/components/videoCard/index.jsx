import React from "react";
import { Divider } from "antd";
import "./style.css";

/**
 * @description 视频列表展示卡片
 * @property {string} imgUrl 封面图片
 * @property {string} title 标题
 * @property {string} tags tags
 * @property {string} updateTime 更新时间
 * @property {Function} editCallback 点击编辑后执行的回调函数
 * @property {Function} deleteCallback 删除成功后执行的回调函数
 */
const VideoCard = (props) => {
  const { imgUrl, title, tags, updateTime, editCallback, deleteCallback } =
    props;

  const editItem = () => {
    editCallback();
  };

  const deleteItem = () => {
    deleteCallback();
  };

  return (
    <div className="c--video-card">
      <div className="top-cover">
        <img className="cover" src={imgUrl} alt="Cover" />
      </div>
      <div className="desc-wrap border-b">
        <div className="title truncate">
          {title}
          &nbsp;
        </div>
        <div className="tags truncate">
          {tags}
          &nbsp;
        </div>
      </div>
      <div className="operation-wrap">
        <div className="price"> {updateTime + `￥`}</div>
        <div className="operation">
          <span className="link" onClick={() => editItem()}>
            编辑
          </span>
          <Divider type="vertical" />
          <span className="link" onClick={() => deleteItem()}>
            删除
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
