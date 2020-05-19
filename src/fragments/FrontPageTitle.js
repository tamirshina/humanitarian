import React, { useContext } from 'react';
import headerUnderline from '../assets/10-HeaderunderlineEn.png';
import hebUnderline from '../assets/10_Headerunderline.png';
import isLeftToRight from './IsLeftToRightFunc';
import LangContext from '../ChurchContext';
import '../css/App.css';


function RightToLeftTitle() {

    const lang = useContext(LangContext).lang;
    const title = ['The Russian Church', 'Русская Церковь', 'המסייה הרוסית'];

    return (

        <div className={isLeftToRight() ? 'front-page-title' : 'front-page-title'} >
            <h1 className='titleFont front-h1'>{lang === "hebrew" ? title[2]
                : lang === "english" ? title[0]
                    : title[1]}</h1>
            <img alt='underline' src={isLeftToRight() ? headerUnderline : hebUnderline} className='' />
        </ div>
    );

}
export default RightToLeftTitle;