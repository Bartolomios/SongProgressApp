import React, {useState, useEffect, useRef} from 'react'
import styles from './SongItemEdit.module.scss'


const SongItemEdit = (props) => {

    const [song, setSong] = useState([])
    const [range, setRange] = useState()
    const [updated, setUpdate] = useState(false)
    const nameRef = useRef()
    const descriptionRef = useRef()
    const linkRef = useRef()

    useEffect(() => {
        setUpdate(false)
        getSong()   

    }, [])
    const getSong = () => {
        let songId = props.match.params.id;

        fetch(`http://localhost:4000/songs/${songId}`)
            .then(res => {
                if (res.ok) {
                    return res
                }
                throw Error(res.status)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)   
                setSong(res)
                setCurrentSongData(res)
            })
            .catch(error => console.log(`błąd ${error}`))
           
        
    }
    const setCurrentSongData = (song) =>{
        
        setRange(song.progress)
        nameRef.current.value = song.name
        descriptionRef.current.value = song.description
        linkRef.current.value = song.link
    }

  


    
    const handleRangeInput = (e) => {
        setRange(e.target.value)

    }



    const updateSong = (e) => {
        e.preventDefault()
        let songId = props.match.params.id;

        const updatedSong = {
            name: e.target[0].value,
            description: e.target[1].value,
            link: e.target[2].value,
            progress: e.target[3].value,
            id:parseInt(songId)
        }

        let updatedSongJSON = JSON.stringify(updatedSong)
        let actualDataSongJSON = JSON.stringify(song)

        const requestOptions = {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: updatedSongJSON

        }
       
        if(updatedSongJSON !== actualDataSongJSON){

        fetch(`http://localhost:4000/songs/${songId}`, requestOptions)
            .then(
                async response => {
                    const data = await response.json()
                    if (!response.ok) {
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error)
                    }
                    else {
                        console.log("Succes! Song has been updated")
                    }

                })
            .catch(error => {
                console.error('There was an error!', error)
            })
        setUpdate(true)
        }
        else{
            console.log("There is nothing to update.")
        }
    }
    const goBack = () =>{
        props.history.goBack();
    }

    return (
        <div className={styles.container}>
            <h1>Edit song</h1>
            
            <form className={styles.updateForm} onSubmit={updateSong}>
                
                <input ref={nameRef} className={styles.input} required type="text" placeholder="Song name"></input>
                <textarea ref={descriptionRef} className={styles.input} placeholder="Adnotation"></textarea>
                <input ref={linkRef} className={styles.input} type="text" placeholder="Song link"></input>
                <label className={styles.progressBar}><p>Your Progress: <span className={styles.percentageValue}>{range}%</span></p>
                <div className={styles.rangeDiv}><input onChange={handleRangeInput} type="range" min="0" max="100" value={range} />
                        </div>
                </label>
                <div className={styles.buttonGroup}>
                <button type="submit" className={styles.blueButton}>Update</button>
                <button onClick={goBack} className={styles.orangeButton}>Back</button>
               
                </div>
            </form>

            {updated && <h4 class={styles.info}>Song has been updated!</h4> }

            
        </div>
    )
}

export default SongItemEdit
