import React, { useState } from "react";
import { Spin } from "antd";
import {useSelector, useDispatch} from 'react-redux'
import {addImage} from '../../redux/actions/app'

const Upload = () => {
  const dispatch = useDispatch()
  const url = useSelector(state => state.products.imgUrl)
  
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    setLoading(true);
    const files = e.target.files;
    for (const item of files) {
      const data = new FormData();
      data.append("file", item);
      data.append("upload_preset", "harrys");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/codersx-sora/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      fileList.push({ id: fileList.length + 1, url: file.secure_url });
    }
    dispatch(addImage([...fileList]))
    viewImage();
  };

  const viewImage = () => {
    setPreviewImage(fileList);
    setLoading(false);
  };

  return (
    <div>
      <div className="upload">
        <input type="file" onChange={handleChange} multiple />
      </div>
      {loading ? (
        <Spin style={styleSpin} />
      ) : (
        previewImage.map((item) => (
          <img key={item.id} src={item.url} style={styleImage} />
        ))
      )}
    </div>
  );
};

const styleSpin = {
  marginTop: "15px",
};

const styleImage = {
  width: "150px",
  height: "200px",
  margin: " 8px 10px 0 0",
};

export default Upload;
