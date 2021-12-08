import React from 'react'
import "./home-screen.css";
import NavigationBar from "../NavigationBar";


const HomeScreen = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="row img-ys">
                    <div className="col-6">
                        <div className="row">
                            <div className='col-2'>
                                <NavigationBar />
                            </div>
                            <div className='col-10'>
                                <h1 className="home-text-1 homeScreen-title">Gorgeous Cocktail</h1>
                                <h3 className="home-text-2 homeScreen-subTitle">Find your favorite cocktail!</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col-6">
                        <div>
                            <img src="https://pica.zhimg.com/50/v2-be8e5804d65a0e85e46468def3fb444d_720w.jpg?source=1940ef5c"
                                 className="first-image" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row img-ys">
                    <div className="col-6">
                        <div>
                            <img src="https://www.liquor.com/thmb/L_3Ry2qyJ386qD2m7HaHzlZAWgU=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__09__04153106__mojito-720x720-recipe-a55b114fc99c4a64b38c9ef6d1660e20.jpg"
                                 className="second-image" alt=""/>
                        </div>
                    </div>
                    <div className="col-6 second-paragraph">
                        <h1 className="homeScreen-title">Amazing Fruit Punch</h1>
                        <p className="homeScreen-subTitle">We'll release a series of fruit cocktails recipes every week, using seasonal fruits.</p>
                        <p className="homeScreen-subTitle">Subscribe to our newsletter for the earliest notification!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomeScreen;
