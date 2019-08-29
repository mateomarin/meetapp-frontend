import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function ImageInput({ url: imageURL, onChange }) {
  const { defaultValue, registerField } = useField('image');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();

  useEffect(() => {
    if (imageURL) {
      setPreview(imageURL);
    }
  }, [imageURL]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'image_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
    onChange(id);
  }

  return (
    <Container>
      <label htmlFor="image">
        <img src={preview || ''} alt="" />
        {!preview && (
          <>
            <MdPhotoCamera size={45} font="#fff" />
            <h5>Selecionar imagem</h5>
          </>
        )}
        <input
          type="file"
          id="image"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

ImageInput.defaultProps = {
  url: null,
};

ImageInput.propTypes = {
  url: PropTypes.string,
};
