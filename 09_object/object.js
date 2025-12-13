// shallow copy 
const obj = {
    name:'nikhil',
    surname:'saini',
    age:23,
    address:{
        city:'haridwar',
        state:'uttarakhand',
        country:'india',
        pin:'249407',
        cordinates:{
            lat:29.9457,
            long:78.1642
        }
    }
}

// shallow copy

const object = {...obj};

object.address.city="delhi"

console.log(obj); // delhi
console.log(object); //delhi
 



// deep copy 

const obj2 = structuredClone(obj);

obj2.address.city="new york";

console.log(obj); // delhi
console.log(obj2); // newyork