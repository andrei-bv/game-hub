
 const getCroppedImage = (imageUrl:string)=>
{
    return  imageUrl.replace("media/", "media/crop/600/400/")
}

export default getCroppedImage;