import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Modal.scss';
import './ModalVideoScript.js';


const ModalVideo = (props) => {
    const { videoId, setVideoId } = props;

    const hanldeCloseModal = () => {
        setVideoId('');
    };

    return (
        <div className="modal" onClick={() => hanldeCloseModal()}>
            <div className="modal-close" onClick={() => hanldeCloseModal()}>
                <i className="ti-close" />
            </div>
            <div className="modal-content">
                <ReactPlayer className="modal-player" url={`https://www.youtube.com/watch?v=${videoId}`} width="100%" height="100%" playing={true} controls={true} />
            </div>
        </div>
    );
}

export default ModalVideo;