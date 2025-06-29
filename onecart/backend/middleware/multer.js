import Multer from 'multer'

let storage = Multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }

})

let upload = Multer({storage})

export default upload