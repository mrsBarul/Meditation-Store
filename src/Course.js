import leftArrow from './picture/leftArrow.png';
import rightArrow from './picture/rightArrow.png';
import { dataCourse } from './dataCourse';
import { useState } from 'react';

function Course() {

    const [course, setCourse] = useState(0);
    const { image, title, describe, price } = dataCourse[course];

    const previousCourse = () => {
        setCourse((course => {
            course --;
            if(course < 0) {
                return dataCourse.length - 1;
            }
            return course;
        }))
    }

    const nextCourse = () => {
        setCourse((course => {
            course ++;
            if(course > dataCourse.length - 1) {
                course = 0
            }
            return course;
        }))
    }


    return(
        <div className="courseContainer">
            <div className="titleCourse">
                <h2>Выбери свой путь к своей душе</h2>
                <h3>Наша команда сертифицированных специалистов разработала 9 обучающих программ, каждая из которых направлена на изучение и познания себя, как часть этого и мира </h3>
            </div>
            <div className="blokContainer">
                <div className="ellipseBlok ellipseLeft">
                    <button onClick={ previousCourse }><img className='arrow' src={ leftArrow } alt='arrow'/></button>
                </div>
                <div className="blokCourse">
                    <div className='imageCourseContainer'>
                        <img className='imageCourse' src={ image } alt='imageProduct'/>
                    </div>
                    <div>
                        <div className='discribeCourse'>
                            <h4>{ title }</h4>
                            <p>{ describe }</p>
                        </div>
                        <div className='buyContainer'>
                            <p>{ price } ₽</p>
                            <button>Купить</button>
                        </div>
                    </div>
                </div>
                <div className="ellipseBlok ellipseRight">
                    <button onClick={ nextCourse }><img className='arrow' src={ rightArrow } alt='arrow'/></button>
                </div>
            </div>
        </div>
    )
}

export default Course;