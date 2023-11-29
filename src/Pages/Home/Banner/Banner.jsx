import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';

import img1 from '../../../assets/02.jpg'
import img2 from '../../../assets/03.png'
import img3 from '../../../assets/06.png'
const Banner = () => {
    return (
        <div>
            <AwesomeSlider
                media={[
                    {
                        source: img1,
                    },
                    {
                        source: img2,
                    },
                    {
                        source: img3,
                    },
                ]}
            />
        </div>
    );
};

export default Banner;