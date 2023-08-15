const showKirin = () => {
  console.log('キリンさんです');
};

const kirinObserver = new IntersectionObserver(showKirin);

kirinObserver.observe(document.querySelector('#kirin'));