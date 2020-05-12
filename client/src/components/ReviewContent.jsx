import React from 'react';
import Popup from 'reactjs-popup';
import moment from 'moment';
import ImageGallery from './ImageGallery.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import ImagePreview from './ImagePreview.jsx';
import ImageReview from './ImageReview.jsx';
import styled from 'styled-components';
import { IoMdApps } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Button = styled.button`
  cursor: pointer;
`;
const Imagegallery = styled.span`
  cursor: pointer;
  width: 100px;
  `;
const Reviewcontent = styled.div`
  position: relative;
  text-align: auto;
  margin-top: auto;
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  `;
const Modal = styled.div`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
  `;

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGallery: false,
      showReviewContent: false,
      imgUrls: [],
      imageReviewState: '',
      reviewId: this.props.images._id,
      imagesObj: this.props.images,
      customerName: this.props.customerName,
      reviewStars: this.props.reviewStars,
      reviewTitle: this.props.reviewTitle,
      reviewContent: this.props.reviewContent,
      createdDate: this.props.createdDate

    };
    this.handleClick = this.handleClick.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.getImageUrl = this.getImageUrl.bind(this);
    this.getCarouselId = this.getCarouselId.bind(this);
    this.updateImagesObj = this.updateImagesObj.bind(this);

  }
  resetForm(event) {
    event.preventDefault();
    this.setState({ showGallery: false });
  }
  handleClick(event) {
    event.preventDefault();
    this.setState({
      showGallery: true
    });
  }
  handleClickImage(event) {
    event.preventDefault();
    this.setState({ showReviewContent: true });
  }
  componentDidMount() {
    this.setData();
    this.setState({ imageReviewState: this.props.image });
  }
  // componentWillUpdate(prevProps) {
  //   if (prevProps.images !== this.props.images) {
  //     this.setState({ imagesObj: this.props.images });
  //     this.getCarouselId(this.state.carouselId);
  //     console.log(this.state.imagesObj);
  //   }

  // }
  setData() {
    let imgUrls = [];
    let mapData = this.props.customerData.map(imagesObj => {
      imagesObj.imagesUrl.map(imagesArr => {
        imgUrls.push({ id: imagesObj._id, urls: imagesArr.image });
      });
    });

    this.setState({ imgUrls });
  }
  getImageUrl(url) {
    this.setState({ imageReviewState: url });
  }
  getCarouselId(id) {
    this.setState({ reviewId: id });
    console.log(this.state.reviewId);
    this.updateImagesObj(this.state.reviewId);

  }
  updateImagesObj(id) {
    let reviewDecisionObj = this.props.customerData.filter(data => {
      if (id === data._id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(reviewDecisionObj[0].customerName);
    this.setState({
      customerName: reviewDecisionObj[0].customerName,
      reviewStars: reviewDecisionObj[0].reviewStars,
      reviewTitle: reviewDecisionObj[0].reviewTitle,
      reviewContent: reviewDecisionObj[0].reviewContent,
      createdDate: reviewDecisionObj[0].createdDate
    });

  }
  render() {

    return (

      <Popup

        trigger={
          <Button>
            {
              <ImagePreview image={this.props.image} />
            }
          </Button>}
        modal
        closeOnDocumentClick
      >
        {close => (
          <div>
            <Modal onClick={close} >
              &times;
            </Modal>
            {this.state.showGallery ?
              <ImageGallery
                customerData={this.props.customerData}
                resetForm={this.resetForm}
                handleClickImage={this.handleClickImage}
                showReviewContent={this.state.showReviewContent}
              /> :
              <div className="parentDiv">
                <Imagegallery onClick={this.handleClick}><IoMdApps size={30} />View Image Gallery</Imagegallery>

                <Reviewcontent>
                  <div className="RightBlock">
                    <text style={{ fontweight: 'bold' }}>
                      <span className="stars">
                        {this.state.reviewStars === 1 ?
                          <span>
                            <FaStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                          </span>
                          : this.state.reviewStars === 2 ?
                            <span>
                              <FaStar size={20} style={{ color: 'orange' }} />
                              <FaStar size={20} style={{ color: 'orange' }} />
                              <FaRegStar size={20} style={{ color: 'orange' }} />
                              <FaRegStar size={20} style={{ color: 'orange' }} />
                              <FaRegStar size={20} style={{ color: 'orange' }} />
                            </span>
                            : this.state.reviewStars === 3 ?
                              <span>
                                <FaStar size={20} style={{ color: 'orange' }} />
                                <FaStar size={20} style={{ color: 'orange' }} />
                                <FaStar size={20} style={{ color: 'orange' }} />
                                <FaRegStar size={20} style={{ color: 'orange' }} />
                                <FaRegStar size={20} style={{ color: 'orange' }} />
                              </span>
                              : this.state.reviewStars === 4 ?
                                <span>
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaRegStar size={20} style={{ color: 'orange' }} />
                                </span>
                                : this.state.reviewStars === 5 ?
                                  <span>
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                  </span> : null
                        }
                      </span>
                      {this.state.reviewTitle}
                    </text>
                    <br />
                    <text className="cusomerInfo">By {this.state.customerName} on {moment(this.state.createdDate).format('LL')}</text>
                    <br />
                    <text className="content">{this.state.reviewContent}</text>
                  </div>
                  <div className="imageContent">
                    <ImageCarousel image={this.state.imageReviewState} id={this.props.images._id} imgUrls={this.state.imgUrls} getCarouselId={this.getCarouselId} />
                  </div>
                  <div className="thumbnail">Images in this review</div>
                  <ImageReview id={this.props.images._id} customerData={this.props.customerData} getImageUrl={this.getImageUrl} />
                </Reviewcontent>

              </div>
            }

          </div>
        )}
      </Popup>
    );
  }
}

export default ReviewContent;