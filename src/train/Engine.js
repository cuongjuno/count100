import React, { useState, useEffect } from 'react'

function Engine({num, finished, end}) {
  const [state, setState] = useState({});

  const _add_smoke = () => {
    setState(st => {
      if (st.smokes.length >= 3) {
        clearInterval(st.id);
        return {...st, id: null};
      }

      return {
        ...st,
        smokes: [...st.smokes, <div key={st.smokes.length} className='smoke'/>],
      };
    });
  }

  useEffect(() => {
    if (finished) {
      setState({smokes: [], id: setInterval(_add_smoke, 220)});
    } else {
			setState({});
		}
  }, [finished]);

  return (
    <div className={`wagon wagon--engine wagon--${finished}`}
			onTransitionEnd={end}
		>
      {state.smokes}
      <div className='wagon__num wagon__num--engine'>
        {num}
      </div>
    </div>
  );
}

export default Engine;
