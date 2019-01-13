import './ImageList.css';
import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imgRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imgRef.current.clientHeight);
  }

  render() {
    const { description, urls} = this.props.image;
    return(
      <div>
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