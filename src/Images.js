import './Images.css';

const Images = (props) => {
    const images = props.images;
    const [firstImage, secondImage, thirdImage] = images.map(item => item.image);
    
    return (
        <div className='images'>
           <img src={firstImage} />
           <img src={secondImage} />
           <img src={thirdImage} />
        </div>
    )
}

export default Images;

