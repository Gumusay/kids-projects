import { useState,useEffect } from "react";
import Card from "../components/Card";
import '../css/MemoryGames.css';
import MemoryGameTitle from '../assets/image/game/MemoryGTitle.png';
import Seksek from '../assets/image/game/seksek.png';


function MemoryGames() {
    const [items, setItems] = useState([
        { text: 1, stat: "" },
        { text: 1, stat: "" },
        { text: 2, stat: "" },
        { text: 2, stat: "" },
        { text: 3, stat: "" },
        { text: 3, stat: "" },
        { text: 4, stat: "" },
        { text: 4, stat: "" },
        { text: 5, stat: "" },
        { text: 5, stat: "" },
        { text: 6, stat: "" },
        { text: 6, stat: "" },
        { text: 7, stat: "" },
        { text: 7, stat: "" },
        { text: 8, stat: "" },
        { text: 8, stat: "" },

    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check (current)
    {
            if(current === prev){
                return;
            }

            if(items[current].text == items[prev].text){
                items[current].stat = "correct"
                items[prev].stat = "correct"
                setItems([...items])
                setPrev(-1)
            }
            else
            {
                items[current].stat = "wrong"
                items[prev].stat = "wrong"
                setItems([...items])
                setTimeout(() => {
                    items[current].stat = ""
                    items[prev].stat = ""
                    setItems([...items])
                    setPrev(-1)
                }, 1000)
            }
    }

    function handleClick(id)
    {

       if(prev === -1){
        items[id].stat = "active"
        setItems([...items])
        setPrev(id)
       }
       else{
        check(id)
       }
    }

    return(
        <>
            <div className="flexMemory">
                <img className="memİmgTitle" width={200} src={MemoryGameTitle} alt="" />

                <div className="Memorycontainer">
                    {
                        items.map((item, index) => (
                            <Card key={index} item={item} id={index} handleClick={handleClick}/>
                        ))
                    }
                </div>

                <img className="Seksekimg" width={80} src={Seksek} alt="" />
            </div>
                        
        
        </>

    )
}

export default MemoryGames;