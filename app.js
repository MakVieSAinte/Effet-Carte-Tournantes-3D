const images = document.querySelectorAll('.invisible');

let options = {
   root: null,
   rootMargin: "-20% 0px",
   threshold: 0
}

function handleIntersect(entries) {

   entries.forEach(entry => {
      if(entry.isIntersecting) {
         
         entry.target.classList.add('visible');

         console.log('visible');
      }
      else {
         console.log('invisible');
      }
   })
}

const observer = new IntersectionObserver(handleIntersect, options);

images.forEach(image => {
   observer.observe(image);
});

// 925DEV