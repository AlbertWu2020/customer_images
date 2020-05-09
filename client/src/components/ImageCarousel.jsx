import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Arrow from './Arrow.jsx';



class IamgeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      currentId: this.props.id,
      imageChange: false,
      imageUrl: this.props.image

    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.checkIndex = this.checkIndex.bind(this);


  }
  componentDidMount() {
    this.checkIndex();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.image !== this.props.image) {
      this.setState({ imageUrl: this.props.image });
      this.checkIndex();
    }

  }
  previousSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
      currentId: this.props.imgUrls[index].id
    });
  }

  nextSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
      currentId: this.props.imgUrls[index].id
    });
  }
  handleClickImage(e) {
    e.preventDefault();
    this.setState({ imageChange: true });
  }
  checkIndex() {
    let index = this.props.imgUrls.findIndex(x => x.urls === this.props.image && x.id === this.props.id);
    this.setState({ currentImageIndex: index });

  }

  render() {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;" />
        {console.log(this.state.currentImageIndex)}
        <ImageSlide url={this.props.imgUrls[this.state.currentImageIndex].urls} />

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;" />
      </div>
    );
  }
}

export default IamgeCarousel;