import * as React from 'react';
// { img, name, gender, height, mass, eye_color }
const PeopleList = ({people}) =>{
    const list = people.map(((man, index) => <Man man={man} index={index}/>))
    return (
        <div>
            <ul className="cards flex fw">
              {list}
            </ul>
          </div>
    )
}

export default PeopleList;