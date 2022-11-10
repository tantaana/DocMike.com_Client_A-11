import React from 'react';

const Carousel = () => {
    return (
        <div className='flex justify-center'>
            <div className="carousel mx-10 w-3/5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://cdn-blkgh.nitrocdn.com/wQIWCqoSvAiKawJPuBsfaEdMgcdzcsRG/assets/mobile/optimized/rev-b7ba49e/54613f2d9a0f2a90fdabf94032e720e5." className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://c.files.bbci.co.uk/2291/production/_110894880_gettyimages-1055182908.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.hennepinhealthcare.org/wp-content/uploads/2018/10/boy-dental-exam.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://downingdental.co.uk/images/nhs.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Carousel;