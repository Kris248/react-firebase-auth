import React, { useState } from 'react'
import { storage } from '../../firebase';
import styles from './Fileupload.module.css'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
const Fileupload = () => {

    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please select a file.");
            return;
        }

        const storageRef = ref(storage, `/files/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => {
                console.log(err);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        )
    }


    return (
        <>
        <h1 style={{padding:'10px'}} >Your Quotes</h1>
            <div className={styles.main}>
                <img src='https://taetaetae.github.io/images/spring-file-upload/upload.png' alt='' />
                <div className={styles.content}>
                    <h4>Drag & Drop Your Designs Or <span id='browse'>Browse</span><br /></h4>

                    <p>You can upload multiple files at once.</p><br />

                    <h5>
                        Instant quote: STEP, STP, SLDPRT, STL, SAT, 3DXML, 3MF, PRT, IPT, CATPART, X_T, PTC, X_B, DXF <br />
                        Manual quote: DWS, DWF, DWG, PDF
                        <br />
                        All uploads are secure and confidential
                    </h5>
                </div>

                <div className={styles.container}>
                    <input type='file' onChange={handleChange} accept='/image/*' />
                    <button onClick={handleUpload}>Upload your Quote</button>
                </div>
                <div className={styles.status}>
                    {percent === 100 ? <p>File Uploaded Successfully.</p> : <p>{percent}% Done</p>}
                </div>
            </div>
        </>
    )
}

export default Fileupload