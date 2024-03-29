


export const saveToLocal = (data) => {
    
    const savedData = JSON.parse(localStorage.getItem("read")) || [];
    const isExist = savedData.find((item) => item.bookId == data.bookId);
    if(!isExist){
        
        savedData.push(data);
        localStorage.setItem("read", JSON.stringify(savedData));
        alert('Book Added to read-list');
    }
    else{
        alert("Already exist in read-list");
    }

    
    
}


export const saveToLocalWishlist = (data) =>{
    
    const readBook = JSON.parse(localStorage.getItem("read")) || [];
    // console.log(readBook);
    const isExistInRead = readBook.find((item) => item.bookId == data.bookId);

    
    const savedData = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isExist = savedData.find((item) => item.bookId == data.bookId);


    if(!isExist && !isExistInRead){
        
        savedData.push(data);
        localStorage.setItem("wishlist", JSON.stringify(savedData));
        alert('Book Added to wishlist');
    }
    else if(isExistInRead){
        alert("Book in read-list");
    }
    else{
        alert("Already exist in wishlist");
    }

}


export const getReadBooks = () => {
    const data = JSON.parse(localStorage.getItem("read")) || [];
    return data;

}

export const getWishListBooks = () => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    return data;

}