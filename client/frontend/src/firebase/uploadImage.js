// import { storage } from './configs.js'
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
// import { img as image, setImgUrl } from "../pages/Write"

// const AwaitImage = new Promise((resolve, reject) => {
    
//         console.log(image)

//         const imageName = image.lastModified + image.size + image.name

//         console.log(imageName)

//         const imageRef = ref(storage, imageName)
//         uploadBytes(imageRef, this.image)
//         .then(() => {
//             getDownloadURL(imageRef)
//             .then((url) => {
//                 setImgUrl(url)
//                 resolve(url)
//             })
//         })
// })


// export default AwaitImage