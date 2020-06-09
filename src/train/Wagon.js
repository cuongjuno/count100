import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'

const snapRange = 50;
const topLimit = 200;

function Wagon(props) {
  const [pos, setPos] = useState(props.pos);
  const [snap, setSnap] = useState(null);
  const [style, setStyle] = useState(null);

	useEffect(() => {
		if (props.pos !== pos) {
			setPos(props.pos);
		}
	}, [props.pos]);

  const _inrange = (x, y) => Math.abs(x - props.target.x) < snapRange &&
    Math.abs(y - props.target.y) < snapRange;

  const oMD = () => setSnap(null);

  const onDrag = (e, {x, y}) => {
    props.hilite(_inrange(x, y));
  }

  const onStop = (e, {x, y}) => {
    if (_inrange(x, y)) {
      if (!props.push(props.idx)) {
        setTimeout(setPos, 1000, props.pos);
      }
      setStyle({zIndex: 6 - props.idx});
      setSnap('snap');
      ({x, y} = props.target);
    } else if (y > topLimit) {
      y = topLimit;
      setSnap('snap');
    }

		props.hilite(false);
    setPos(pos => ({x, y}));
  }

  return (
    <Draggable
      bounds='parent'
      position={pos}
      onMouseDown={oMD}
      onDrag={onDrag}
      onStop={onStop}
    >
      <div className={`wagon wagon--${snap} wagon--${props.finished}`}
        style={style}
      >
        <div className='wagon__num'>
          {props.num}
        </div>
      </div>
    </Draggable>
  );
}

export default Wagon;
