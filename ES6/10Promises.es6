// need to run this in a browser since this is a browser api
var postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');

postsPromise
  .then(data => data.json())
  .then(data => { console.log(data) })
  .catch((err) => {
    console.error(err);
  })


var postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
var streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

// promises wait for all to be resolved
Promise
    .all([postsPromise, streetCarsPromise])
    .then(responses => {
      return Promise.all(responses.map(res => res.json()))
    })
    .then(responses => {
      console.log(responses);
    });


// basic promise creation
var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error('Err wes isn\'t cool'));
    }, 1000);
  });

  p
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });



// promises, resolve & reject

const posts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  ];

const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  ];

function getPostById(id) {
    // create a new promise
    return new Promise((resolve, reject) => {
      // using a settimeout to mimick a databse
      setTimeout(() => {
        // find the post we want
        const post = posts.find(post => post.id === id);
        if(post) {
          resolve(post); // send the post back
        } else {
          reject(Error('No Post Was Found!'));
        }
      }, 200);
    });
}

function hydrateAuthor(post) {
    // create a new promise
    return new Promise((resolve, reject) => {
      // find the author
      const authorDetails = authors.find(person => person.name === post.author);
      if(authorDetails) {
        // "hydrate" the post object with the author object
        post.author = authorDetails;
        resolve(post);
      } else {
        reject(Error('Can not find the author'));
      }
    });
}

getPostById(3)
    .then(post => {
      return hydrateAuthor(post);
    })
    .then(post => {
      console.log(post);
    })
    .catch(err => {
      console.error(err);
    });