import React from 'react';
import headerUnderline from '../assets/10_Headerunderline.png';
import '../css/App.css';


function RightToLeftTitle({ titleToInsert }) {

    return (

        <div className='titleBoxHeb'>
            <h1 className='titleFont heInfoPageTitle'>{titleToInsert}</h1>
            <img alt='underline' src={headerUnderline} />
        </div>
    );

}
export default RightToLeftTitle;