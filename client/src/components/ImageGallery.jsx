import React from 'react';
import Popup from 'reactjs-popup';
import { IoMdApps } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviewContent: false
    };
    this.handleClickImage = this.handleClickImage.bind(this);
  }
  handleClickImage(event) {
    event.preventDefault();
    this.setState({ showReviewContent: true });
  }

  render() {
    return (
      <div className="viewGallery" >
        {this.state.showReviewContent ?
          'Hello'
          : this.props.customerData.map(imagesObj => {
            return imagesObj.imagesUrl.map(imagesArr => {
              return <img className="galleryImage" style={{ width: 100, height: 80 }} src={imagesArr.image} onClick={this.handleClickImage}/>;
            });
          })}
      </div>
    );
  }
}

export default ImageGallery;