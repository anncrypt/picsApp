import './ImageList.css';
import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }

  render() {
    const { description, urls} = this.props.image;
    return(
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img 
          ref={this.imgRef}
          src={urls.regular} 
          alt={description} 
        />
      </div>
    );
  }
}

export default ImageCard;