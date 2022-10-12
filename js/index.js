'use strict';
//prefix? (P) + action (A) + high-level context (HC) + low-level context? (LC)

// PREFIX
// - is
const prefixIs = () => { 
    const color = 'blue';
    const isBlue = (color === 'blue'); // property
    const isPresent = true; //condition

    if (isBlue && isPresent) {
        console.log('Blue is present!');
    }
}

// - has
const prefixHas = () => {
    /* Bad */
    const isProductExist = (productsCount > 0);
    const areProductsPresent = (productsCount > 0);

    /* Good */
    const hasProducts = (productsCount > 0);
}

// - should
const shouldUpdateUrl = (url, expectedUrl) => url !== expectedUrl;


// ACTION
// - get
function getFruitsCount() {
    return this.fruits.length;
}

// - set
let fruits = 0;
const setFruits = (nextFruits) => {
    fruits = nextFruits;
};
setFruits(5);
console.log(fruits); // 5

// - reset
const initialFruits = 5;
fruits = initialFruits;
setFruits(10);
console.log(fruits); // 10
const resetFruits = () => {
    fruits = initialFruits;
};
resetFruits();
console.log(fruits); // 5

// - fetch
/*const fetchPosts = (postCount) => fetch('https://api.dev/posts', {...}); */ 

// - remove
const removeFilter = (filterName, filters) => filters.filter((name) => name !== filterName);
const selectedFilters = ['price', 'availability', 'size'];
removeFilter('price', selectedFilters);

// - delete
const deletePost = (id) => database.find({id}).delete();

// - compose
const composePageUrl = (pageName, pageId) => `${pageName.toLowerCase()}-${pageId}`;

// - handle
const handleLinkClick = () => {
    console.log('Clicked a link!');
};
link.addEventListener('click', handleLinkClick);


// CONTEXT
const filter = (list, predicate) => list.filter(predicate);

const gerRecentPosts = (posts) => filter(posts, (post) => post.date === Date.now());


