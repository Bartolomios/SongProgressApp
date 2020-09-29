import React, {useState} from 'react'
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import styles from './Form.module.scss'



const SignupSchema = Yup.object({
    songName: Yup.string()
        .min(3, 'Too Short! Minimum 3 characters')
        .max(50, 'Too Long!')
        .required('Required'),
    songAdnotation: Yup.string()
        .max(300, 'Too Long!'),
    songLink: Yup.string()
    .required('Required'),
    songProgress: Yup.number()
});

const AddSongForm = ({addSong, closeModal}) => {

    
    const [range, setRange] = useState(0);
    const handleRangeInput = (e) => {
        setRange(e.target.value)

    }
    
   
  
    
    return (
        <div id="form" className={styles.formContainer}>
        <Formik
            initialValues={{
                songName: '',
                songAdnotation: '',
                songLink: '',
                songProgress: 0
            }}
            validationSchema={SignupSchema}
            onSubmit={(values ) => {
               
                console.log(values);
            }}
        >
        
                {({ errors, touched }) => (
                    <Form onSubmit={addSong}>
                        <Field className={styles.input} placeholder="Song name" name="songName" />
                        {errors.songName && touched.songName ? (
                            <div className={styles.errorInfo}>{errors.songName}</div>
                        ) : null}
                        <Field className={styles.input} placeholder="Adnotation" name="songAdnotation" as="textarea" />
                        {errors.songAdnotation && touched.songAdnotation ? (
                            <div className={styles.errorInfo}>{errors.songAdnotation}</div>
                        ) : null}
                        <Field className={styles.input} placeholder="Song link" name="songLink" />
                        {errors.songLink && touched.songLink ? (
                             <div className={styles.errorInfo}>{errors.songLink}</div>
                        ) : null}
                         <label className={styles.progressBar}>Your Progress:
                        <div className={styles.rangeDiv}>
                            <Field name="songProgress" type="range" onChange={handleRangeInput} value={range} />
                            <span className={styles.percentageValue}>{range}%</span></div>
                        </label>
                        <button className={styles.submitButton} type="submit">AddSong</button>
                    </Form>
                )}
           
        </Formik>
            <button className={styles.closeButton} onClick={closeModal}></button>
        </div>
        
    )
}

export default AddSongForm


/*


        <div id="form" className={styles.formContainer}>
        <form onSubmit={addSong}>
            <h3>Add new song</h3>
            <input className={styles.input} required type="text" placeholder="Song name"></input>
            <textarea className={styles.input} placeholder="Adnotation"></textarea>
            <input className={styles.input} required type="text" placeholder="Song link"></input>
            <label className={styles.progressBar}>Your Progress:
            <div className={styles.rangeDiv}><input onChange={handleRangeInput} type="range" min="0" max="100" value={range} />
            <span className={styles.percentageValue}>{range}%</span></div>
            </label>
            <button type="submit" className={styles.submitButton}>Add Song</button>
         </form>
            <button className={styles.closeButton} onClick={closeModal}></button>
        </div>

        */