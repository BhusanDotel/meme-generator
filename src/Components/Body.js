import React from "react";
import '../Styles/Body.css'


function Body(){
    const [meme, setMeme]=React.useState({
        topText:'',
        bottomText:'',
        image:'https://i.imgflip.com/1ur9b0.jpg'
    })
    
    const [memeArray,setMemeArray]=React.useState([])
    React.useEffect(()=>{
        async function getMemes(){
            const response= await fetch('https://api.imgflip.com/get_memes')
            const data =await response.json()
            setMemeArray(data.data.memes)
        }
        getMemes()
    },[])

    function handleChange(event){
        const _meme={...meme}
        _meme[event.target.name]=event.target.value
        setMeme(_meme)
    }

    function createMeme(){
        let randomNum = Math.floor(Math.random()*memeArray.length);
        let url=(memeArray[randomNum].url)

        let meme_Dup = {...meme}
        meme_Dup.image=url
        meme_Dup.topText=''
        meme_Dup.bottomText=''
        setMeme((prevObj)=>{return meme_Dup})
    }

    return(
        <main className="body-div">
            <div className="input-div-root">
                <div className="input-div">
                    <input 
                    className="top-text" 
                    type="text" 
                    placeholder="Top Text"
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}/>

                    <input 
                    className="bottom-text" 
                    type="text" 
                    placeholder="Bottom Text"
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}/>
                </div>
                <button onClick={createMeme} className="btn">Get a new Meme Image 🖼</button> 
            </div>

            <div className="display-div">
                <h2 className="top meme--text">{meme.topText}</h2>
                <h2 className="bottom meme--text">{meme.bottomText}</h2>
                <img className="display-image" src={`${meme.image}`} alt=""/>
            </div>
        </main>
    )
}

export default Body;