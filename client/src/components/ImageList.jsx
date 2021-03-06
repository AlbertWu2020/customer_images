import React from 'react';
import ReviewContent from './reviewContent.jsx';


class ImageList extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let count = 0;
    return (
      <div className="imagelist">
        {this.props.imageList.map((imagesObj, index) => {
          return imagesObj.imagesUrl.map((imageArr) => {
            count++;
            if (count <= 4) {
              return <ReviewContent
                image={imageArr.image}
                images={imagesObj}
                id={imagesObj._id}
                customerName={imagesObj.customerName}
                reviewStars={imagesObj.reviewStars}
                reviewTitle={imagesObj.reviewTitle}
                reviewContent={imagesObj.reviewContent}
                createdDate={imagesObj.createdDate}
                customerData={this.props.imageList}
              />;
            }
          });
        })}
      </div >
    );
  }
}

export default ImageList;