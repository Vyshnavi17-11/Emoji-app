import React, { useState } from 'react';
import './EmojiStyle.css';
const emojiData=[{
    id:1,
    symbol:'😊',
    name:"Smiling face",
},
{
    id:2,
    symbol:"✌",
    name:"Victory",
},
{
    id:3,
    symbol:"❤",
    name:"heart",
},
{
    id:4,
    Symbol:"😎",
    name:"Cool",
},{
    id:5,
    symbol:"🤞",
    name:"Fingers Crossed ",
},
{
    id:6,
    symbol:"🤔",
    name:'Thinking Face',
},
{
    id:7,
    symbol:"😍",
    name:"Smiling face with heart",
},
{
    id:8,
    symbol:'🙄',
    name:'face with rolling eyes',

},
{
    id:9,
    symbol:"😡",
    name:"poutting face",
},
{
    id:10,
    symbol:"🤐",
    name:'Zipper face',
},
]
function EmojiSearchapp() {
    const [searchEmoji, setSearchEmoji]= useState("");
    const handleChange=(e)=>{
        setSearchEmoji(e.target.value)
    }
    const showEmoji= emojiData.filter((emoji)=>{
        const emojiName= emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());

    });
  return (
    <div>
        <h1> React Emoji App</h1>
        <input type='text' placeholder='search for the emoji' value={searchEmoji} onChange={handleChange}/>
        <div>{
         showEmoji.map((emoji)=> emoji.symbol)
            }
            
        </div>


    </div>
  )
}

export default EmojiSearchapp