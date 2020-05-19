
import React, { useState, useEffect } from 'react';

const LangContext = React.createContext({
  lang: '', // for currently used language
  currentLangData: '', // lang data (names, titles)
  switchLang: () => { },
});

export default LangContext;

export function LangProvider(props) {

  const [lang, setLang] = useState("russian");


  useEffect(() => {

    setLang(lang);

  }, [lang])

  const switchLang = (ln) => {
    setLang(ln);
  };

  return (
    <LangContext.Provider value={{
      lang,
      switchLang
    }}>
      {props.children}
    </LangContext.Provider>
  );
};
