import React, {
  createRef,
  useCallback,
  useState,
} from "react";
import { json } from "react-router";

function Tooltip(props) {
  const btn = createRef();
  const [tooltip, setTooltip] = useState(null);
  const toolTip = useCallback(() => {
    const btns = btn.current.getBoundingClientRect();
    const Containe = containe;
    setTooltip(
      <Containe
        x={btns.left}
        y={Number(btns.top) + Number(btns.height)}
        content={"Try to test tooltip"}
      />
    );
  });
  return (
    <div>
      <button
        ref={btn}
        onPointerMove={toolTip}
        onPointerOut={() => {
          setTooltip(null);
        }}
      >
        Try ToolTip
      </button>
      {tooltip}
      <Form />
    </div>
  );
}

export default Tooltip;

function containe({ x, y, content }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        padding: "5px",
        color: "white",
        backgroundColor: "rgb(0,0,0,0.8)",
        borderRadius: "2px",
        transition: "display 3s",
      }}
    >
      {content}
    </div>
  );
}

function Form() {
  const [state,setState]=useState({formData:{}})
  const [display ,setDisplay]=useState(JSON.stringify(state))
  function handleChanges(e){
    const target=e.target
    const name=target.name
    const value = target.type==='checkbox'?target.checked:target.value
    setState((state)=>{state.formData[name]=value; setDisplay(JSON.stringify(state));return state})
    
  }
  return (
    <div>
      <form>
        <input type={"text"} name="name" onChange={handleChanges} />
        <input type={"text"} name="text"  onChange={handleChanges}/>
        <input type={"checkbox"} name="check"  onChange={handleChanges}/>
        <br/><br/>
        {display}
      </form>
    </div>
  );
}
